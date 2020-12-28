import React, {
	Component
} from 'react'
import ListSites from './listSites';
import AddSiteForm from './addSiteForm';


class ManageSites extends React.Component {


  render() {

    return (
		<div>
			< ListSites sites={this.props.sites}/ >
			< AddSiteForm />
		</div>
    );
  }
}



export default ManageSites;
