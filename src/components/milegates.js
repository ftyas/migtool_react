import React from 'react'
import axios from 'axios'
import AddMilegateForm from './addMilegateForm';
import ListMilegates from './listMilegates';


class Milegates extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

	this.state = {milegates: []};
	this.state = {site: this.props.firstsite};
  }

componentDidMount() {

  axios.get('http://localhost:3001/sites/milegates.json')
  .then(response => {
    console.log(response)
    this.setState({milegates: response.data})

  })
  .catch(error => console.log(error))
console.log("firstsite is " + this.state.site)
}

  
 handleChange(event) {
      this.setState({site: event.target.value});
    }



  render() {

    return (
      <div>
				< ListMilegates milegates={this.state.milegates} sites={this.props.sites} site={this.state.site}/ >
				< AddMilegateForm sites={this.props.sites}  />
      </div>
    );
  }
}




export default Milegates;
