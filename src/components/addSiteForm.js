import axios from 'axios'
import React, {	Component} from 'react'

class AddSiteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', isLoggedIn: false};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleShowSitesButtonClick = this.handleShowSitesButtonClick.bind(this);
    this.handleHideSitesButtonClick = this.handleHideSitesButtonClick.bind(this);
	
  }
  handleShowSitesButtonClick() {
    this.setState({isLoggedIn: true});
  }

  handleHideSitesButtonClick() {
    this.setState({isLoggedIn: false});
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  axios.post(
      'http://localhost:3001/sites/add_site.json',
      { location:
        {
          location_name: this.state.value,
        }
      }
    )
    .then(response => {
      console.log(response)
    })
    .catch(error => console.log(error))

  }

  render() {
      const showAddMilegateForm = this.state.showAddMilegateForm;
      const isLoggedIn = this.state.isLoggedIn;
      let button;
      if (isLoggedIn) {

        button = 
          <div>
			<HideSitesButton onClick={this.handleHideSitesButtonClick} />
			<h1> Add a New Site </h1>
      		<form onSubmit={this.handleSubmit}>
        		<label>
					Enter New Site Name:
          			<input type="text" value={this.state.value} onChange={this.handleChange} />
        		</label>
        			<input type="submit" value="Add Site" />
      	  	  </form>
		</div>
	  
      } else {
        button = <ShowSitesButton onClick={this.handleShowSitesButtonClick} />;
      }

    return (
		<div>
		{button}
  </div>

    );
  }
}
function HideSitesButton(props) {
  return (
    <button onClick={props.onClick}>
      Hide Add a new site Form
    </button>
  );
}

function ShowSitesButton(props) {
  return (
    <button onClick={props.onClick}>
      Add a new site
    </button>
  );
}
export default AddSiteForm;
