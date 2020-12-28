import axios from 'axios'
import React, {	Component} from 'react'

class DeleteSite extends React.Component {
    constructor(props) {
      super(props);
      this.handleDeleteSiteClick = this.handleDeleteSiteClick.bind(this);
	
      this.state = {site_name: props.site_name};
    }

    handleDeleteSiteClick(event) {
	   // alert('deleting site: ' + this.state.site_name);
	   // event.preventDefault();
	    axios.delete(
	        'http://localhost:3001/sites/delete_site.json', 
	            {
					data: {site_name: this.state.site_name},
	          }
	      )
	      .then(response => {
	        console.log(response)
	      })
	      .catch(error => console.log(error))
	
    }

render() {
  let button;
    button = <DeleteSiteButton onClick={this.handleDeleteSiteClick} />;

  return (
        <DeleteSiteButton onClick={this.handleDeleteSiteClick} />
   );
}
 
 
  }

  function DeleteSiteButton(props) {
    return (
      <button onClick={props.onClick}>
        Delete Site
      </button>
    );
  }

export default DeleteSite;
