import axios from 'axios'
import React, {	Component} from 'react'
import SelectSite from './selectSite';

class AddMilegateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       milegate_name: '',
		ip: '',
	    isLoggedIn: false};
	this.state = {site: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSiteChange = this.handleSiteChange.bind(this);
    this.handleShowMilegatesButtonClick = this.handleShowMilegatesButtonClick.bind(this);
    this.handleHideMilegatesButtonClick = this.handleHideMilegatesButtonClick.bind(this);
    this.updateMilegateList = this.updateMilegateList.bind(this);
	
  }
  handleShowMilegatesButtonClick() {
    this.setState({isLoggedIn: true});
  }
componentDidMount() {
this.setState({site: this.props.sites[0].location_name})

}

  handleHideMilegatesButtonClick() {
    this.setState({isLoggedIn: false});
  }
  handleSiteChange(site) {
    this.setState({site});
	console.log({site})
//	console.log({site.id})
  }
  updateMilegateList() {
	  axios.get('http://localhost:3001/sites/milegates.json')
	  .then(response => {
	    console.log(response)
	    this.setState({milegates: response.data})

	  })
	  .catch(error => console.log(error))
//	console.log({site.id})
  }

  handleChange = (event) => {
     let nam = event.target.name;
     let val = event.target.value;
     this.setState({[nam]: val});
   }

//	  updateMilegateList();
 
  handleSubmit(event) {
      alert('A name was submitted: ' + this.state.milegate_name + ' ' + this.state.ip + ' ' + this.state.site);
    event.preventDefault();
    axios.post(
        'http://localhost:3001/sites/add_milegate.json',
        { milegate:
          {
            location_name: this.state.site,
            milegate_name: this.state.milegate_name,
            ip: this.state.ip,
          }
        }
      )
    .then(response => {
      console.log(response)
		console.log("updating list");
			  this.updateMilegateList();
		
    })
    .catch(error => console.log(error));

  }
 
 
  render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
      if (isLoggedIn) {

        button = 
		  <div className="box">
		  <HideMilegatesButton onClick={this.handleHideMilegatesButtonClick} />;
		<h1> Add a New Milegate </h1>
	  <form onSubmit={this.handleSubmit}>
		<table>
		<thead>
		<tr>
		<td>select site </td>
		<td> milegate name </td>
		<td> ip address </td>
		</tr>
		</thead>
		<tbody>
		<tr>
		<td> < SelectSite sites={this.props.sites} onSiteChange={this.handleSiteChange} /> </td>
		<td><input type='text' name='milegate_name' onChange={this.handleChange} /></td>
	    <td><input type='text' name='ip'onChange={this.handleChange} /></td>
		</tr>
		</tbody>
		</table>
	  <p><input type="submit" value="Submit" /></p>

	  </form>

	  	</div>
	  
      } else {
        button = <ShowMilegatesButton onClick={this.handleShowMilegatesButtonClick} />;
      }
    return (
		<div>
		{button}
      </div>

    );
  }
}


function HideMilegatesButton(props) {
  return (
    <button onClick={props.onClick}>
      Hide Add Milegate Form
    </button>
  );
}

function ShowMilegatesButton(props) {
  return (
    <button onClick={props.onClick}>
      Add Milegate
    </button>
  );
}
export default AddMilegateForm;


