import React, {
	Component
} from 'react'
 import Tabs from "./components/tabs"; 
 import axios from 'axios'
 import ManageSites from './components/manageSites';
 import Milegates from './components/milegates';
 import './App.css'

 class App extends Component {
 	constructor(props) {
 	  super(props)
 	  this.state = {
 	    sites: [],
   	    };
 		this.state = {firstsite: ''};
 		this.state = {firstsite_id: 1};
 	}
	
	
 	componentDidMount() {
 	  axios.get('http://localhost:3001/sites/index.json')
 	  .then(response => {
 	    console.log(response)
 	    this.setState({sites: response.data})
 	    this.setState({firstsite: response.data[0].location_name})
 	    this.setState({firstsite_id: response.data[0].id})

 	  })
 	  .catch(error => console.log(error))
	
 	}

 	render() {
 	
 	return (
     <div>
        <h1>Configuration Tool</h1>
       <Tabs> 
         <div label="Sites"> 
 		< ManageSites sites={this.state.sites}/>
         </div> 
         <div label="Milegates"> 
 		< Milegates sites={this.state.sites} firstsite={this.state.firstsite} firstsite_id={this.state.firstsite_id}/>		
         </div> 
         <div label="Migration Groups"> 
           Nothing to see here, this tab is <em>extinct</em>! 
         </div> 
         <div label="About"> 
           Nothing to see here, this tab is <em>extinct</em>! 
         </div> 
       </Tabs> 
      </div>
    );
 }

}
export default App;
