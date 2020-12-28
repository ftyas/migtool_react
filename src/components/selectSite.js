import React, {	Component} from 'react';


class SelectSite extends React.Component {
  constructor(props) {
    super(props);
  	this.state = { value: ""}; 
    this.handleChange = this.handleChange.bind(this);

	}
	componentDidMount() {
	this.setState({value: ""})

	}
	
    handleChange(event) {
        this.setState({value: event.target.value});
		this.props.onSiteChange(event.target.value);
      }
  
  render() {
     return (
      <label>
        Select Site:
        <select value={this.state.value} onChange={this.handleChange}>
        {this.props.sites.map((sites) => {

            return (<Site sites={sites} key={sites.id}  />)
        
        })}
		
        </select>
      </label>
    );
  }

}
class Site extends React.Component {
	render () {
		return(
              <option site={this.props.sites.location_name}>{this.props.sites.location_name}</option>
		)
	}
}


  export default SelectSite;
  