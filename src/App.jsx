import React from 'react';
import ReactDom from 'react-dom';
import LoginButton from './LoginButton.jsx';

export default class App extends React.Component{

  render(){
    return(
        <div>
          <LoginButton />
        </div>
    )
  }
}

ReactDom.render(<App />,document.getElementById('app'));
