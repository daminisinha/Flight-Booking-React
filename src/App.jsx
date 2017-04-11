import React from 'react';
import ReactDom from 'react-dom';
import LoginButton from './LoginButton.jsx';
import Test from './Test.jsx'
export default class App extends React.Component{

  render(){
    return(
        <div>
          <LoginButton/>
        </div>
    )
  }
}

ReactDom.render(<App />,document.getElementById('app'));

//chalao webpack and server.js ko wapas se chalao al
