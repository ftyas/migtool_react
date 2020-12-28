import axios from 'axios'
import React, {	Component} from 'react'

class ModifySite extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			new_name: props.old_name,
			old_name: ""
		};

	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	  }

  handleChange(event) {
    this.setState({new_name: event.target.value});
  }
	
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.new_name);
    axios.put(
        'http://localhost:3001/sites/update_site.json',
            {
			 location_name_old: this.props.old_name,
            location_name_new: this.state.new_name,
          }
      )
      .then(response => {
        console.log(response)
      })
      .catch(error => console.log(error))
	
}


    render() {
      return (
      		<form onSubmit={this.handleSubmit}>
        		<label>
                	<input type="text" value={this.state.new_name} onChange={this.handleChange} />
        		</label>
        			<input type="submit" value="modify site name" />
      	</form>
      );
    }
 
 
  }



export default ModifySite;
