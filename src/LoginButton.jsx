import React from 'react';
import axios from 'axios';
export  default class LoginButton extends React.Component{
constructor(props){
  super(props)
  //  this.handle = this.handle.bind(this);
    this.handleVerify = this.handleVerify.bind(this);
    this.state = {email:null,password:null};

  }

handleVerify(e){
  if(e.target.id=="email"){

    this.setState({email:e.target.value})
    console.log("Email:",this.state.email);
  }
  else if(e.target.id=="password"){

    this.setState({password:e.target.value})
  }
  else if(e.target.id=="login"){
    axios.post('http://localhost:3000/verify',{email:this.state.email,password:this.state.password})
    .then(function(response){
      console.log(response.data)
    })
    .catch(function(error){
    console.log(error);
    });
  }
  console.log("Before calling the server, email and password are ",this.state.email,this.state.password)

}



  render(){
    return(
      <div>
      <input type='button' className="btn btn-success btn-lg" value="Login" data-toggle="modal" data-target="#myModal"/>
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog" >
          <div className="modal-content modal-content-style">
            <div className="modal-header text-center">
              <h4 className="modal-title">Sign in to SmartAudit</h4>
            </div>

            <div className="modal-body text-center modal-body-style" >
            <label>Enter your email and password </label><br/>
            <div className="no-border">
            <input  type="text" id="email" className="form-control input-lg input-style" onKeyUp={this.handleVerify}  placeholder="Email" />
            </div>
            <div className="no-border">
            <input type="password" id="password" className="form-control input-lg input-style" onKeyUp={this.handleVerify} placeholder="Password"/>
            </div><br/>
            <button type="button" id="login" className="btn btn-success btn-lg btn-block" onClick={this.handleVerify}>Login</button>
            </div>

            <div id="modalFooter" className="modal-footer">
            <div>
            <button type="button" className="btn btn-lnk btn-block btn-lnk-style"> Don't Have an account? Sign Up</button>
            </div>
            <div>
            <button type="button" className="btn btn-lnk btn-block btn-lnk-style"> Forgot Password? Reset Password</button>
            </div>
            </div>
          </div>

        </div>
      </div>
      </div>
    )
  }
}
