import React from 'react';
import ReactDom from 'react-dom';
import NavHeader from './NavHeader.jsx';
import Container from './Container.jsx';
import Tabcontent from './TabContent.jsx';

export default class App extends React.Component{

  render(){
    return(
        <div className="appMain">
          <NavHeader/>
          <Container/>
          <Tabcontent/>
        
        </div>
    )
  }
}

ReactDom.render(<App />,document.getElementById('app'));


