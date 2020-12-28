import axios from 'axios'
import React, {	Component} from 'react'
import ModifySite from './modifySite';
import DeleteSite from './deleteSite';
import SelectSite from './selectSite';

class ListMilegates extends Component {
	constructor(props) {
	    super(props);
	    this.handleShowMilegatesButtonClick = this.handleShowMilegatesButtonClick.bind(this);
	    this.handleHideMilegatesButtonClick = this.handleHideMilegatesButtonClick.bind(this);
	    this.handleSiteChange = this.handleSiteChange.bind(this);

		this.state = { sites: [] }
      	this.state = {isLoggedIn: false};
      	this.state = {firstsite: ''};
		this.state = {site: this.props.site};

	}

    handleSiteChange(site) {
      this.setState({site});
    }

	
    handleShowMilegatesButtonClick() {
      this.setState({isLoggedIn: true});
	  this.setState({showlist: true});
	  
    }

    handleHideMilegatesButtonClick() {
      this.setState({isLoggedIn: false});
	  this.setState({showlist: false});
	  
    }
	
    render() {
	    const isLoggedIn = this.state.isLoggedIn;
	    let button;
	    if (isLoggedIn) {

	      button = 
			<div>
			<HideMilegatesButton onClick={this.handleHideMilegatesButtonClick} />
			<p>< SelectSite sites={this.props.sites} onSiteChange={this.handleSiteChange} / ></p>
			<h1> List of Milegates for Site: {this.state.site} </h1>
		  	<div className="box">
				< MilegatesTable  milegates={this.props.milegates} /> 
			</div>
			</div>;

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


class Milegate extends React.Component {

	render () {
		return(
			<tr>
				<td>{this.props.milegate.milegate_name}</td>
				<td>Modify</td>
				<td>Delete</td>
			</tr>
		)
	}
}
function MilegatesTable(props) {
  return (
	  <table>
	  <thead>
	  <tr>
	  <th> Name </th>
	  <th> Modify </th>
	  <th> Delete </th>
		</tr>
	  </thead>
	  <tbody>
      {props.milegates.map((milegate) => {

          return (<Milegate milegate={milegate} key={milegate.id}  />)
        
      })}
	  </tbody>
	  </table>
  );
}

function HideMilegatesButton(props) {
  return (
    <button onClick={props.onClick}>
      Hide Milegates List
    </button>
  );
}

function ShowMilegatesButton(props) {
  return (
    <button onClick={props.onClick}>
	  List Milegates
	</button>
  );
}

export default ListMilegates;
