import React from 'react';
import axios from 'axios';
export default class Test extends React.Component{
  constructor(props){
    super(props)
    this.state={responseFromServer:null}
  }

  componentDidMount(){
    var self = this;
    axios.get('http://localhost:3000')
         .then(function(response){
           console.log(response);
            self.setState({responseFromServer:response.data})
         })
         .catch(function(error){
           self.setState({responseFromServer:error})
         })
  }

  render(){
    var output = this.state.responseFromServer
    return(
      <div> Hello from Test
      {output}</div>
    )
  }
}
