import React, {	Component} from 'react'
import ModifySite from './modifySite';
import DeleteSite from './deleteSite';

class ListSites extends Component {
	constructor(props) {
	  super(props)
	    this.handleLoginClick = this.handleLoginClick.bind(this);
	    this.handleLogoutClick = this.handleLogoutClick.bind(this);

	  this.state = {
	    sites: []
	  }
      this.state = {isLoggedIn: false};
	  
	}
	
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
	
	componentDidMount() {
	    this.setState({sites: this.props.sites});
	    this.setState({isLoggedIn: false});
	
	}
	
    render() {
		
	      const isLoggedIn = this.state.isLoggedIn;
	      let showform;
	      if (isLoggedIn) {
		  	showform =
        	  <div>
  			<LogoutButton onClick={this.handleLogoutClick} />;
			  
				< SiteTable  sites={this.props.sites} /> 
        	  </div>
		  } else  {
		       	showform = <LoginButton onClick={this.handleLoginClick} />;
		      }
		 return (
		  		<div>
		  			{showform}
		  		</div>
      );
    }
  }

 function SiteTable(props) {
    return (
		<div className="box">
  	  <table>
  	  	<thead>
  	  		<tr>
  	  		<th> Name </th>
  	  		<th> Modify </th>
  	  		<th> Delete </th>
  			</tr>
  	  </thead>
  	  <tbody>
        {props.sites.map((site) => {

            return (<Site site={site} key={site.id}  />)
        
        })}
  	  </tbody>
  	  </table>
		</div>
    );
  }
  function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Show Sites
      </button>
    );
  }

  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Hide Sites
      </button>
    );
  }

class Site extends React.Component {

	render () {
		return(
			<tr>
				<td>{this.props.site.location_name}</td>
				<td>< ModifySite old_name={this.props.site.location_name} /></td>
				<td>< DeleteSite site_name={this.props.site.location_name} /></td>
			</tr>
		)
	}
}

export default ListSites;
