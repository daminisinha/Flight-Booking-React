import React from 'react';

export  default class NavHeader extends React.Component{

  render(){
    return(
      <div>
         <header>
           <div className="toggleClass"> 
          <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              {/* <a class="navbar-brand" href="#">Navbar</a> */}
             <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Check In</a>
                  </li>n'''
                  <li className="nav-item">
                    <a className="nav-link" href="#">Customer Support</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">INR</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Login/Signup</a>
                  </li>
                </ul>
              </div>
            </nav>
       
           
      </div>
          <div className="headerDiv">
            <ul className="nav justify-content-end">
                 <li className="nav-item">
                    <a className="nav-link" href="#">Check In</a>
                </li>
                  <li className="nav-item">
                   <a className="nav-link" href="#">Customer Support</a>
              </li>
                 <li className="nav-item">
                   <a className="nav-link " href="#">INR</a>
                </li>
                  <li className="nav-item">
                      <a className="nav-link " href="#">Login/Signup</a>
                    </li>
                </ul>
         
     </div>
     <img src="../src/images/download.png" className="imgStyle" alt="Cinque Terre"/>
       </header>
      </div>
    )
  }
}
