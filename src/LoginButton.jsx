import React from 'react';

export  default class LoginButton extends React.Component{

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
            <input  type="text" id="email" className="form-control input-lg input-style"  placeholder="Email" />
            </div>
            <div className="no-border">
            <input type="password" className="form-control input-lg input-style" placeholder="Password"/>
            </div><br/>
            <button type="button" className="btn btn-success btn-lg btn-block" >Login</button>
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
