import React from 'react';


export default class TabContent extends  React.Component{
    constructor(props) {
        super(props);
        
       
      }
    render(){
        var styles ={
            display: 'none'
        };
       
        return(
           
<div className="formStyle col-lg-6 col-md-8 col-sm-12">

    <ul className="nav nav-tabs responsive" role="tablist">
        <li className="nav-item navStyle">
          <a className="nav-link active" href="#plane" role="tab" data-toggle="tab">
            <i className="fa fa-plane" aria-hidden="true"></i><br/>
            Flight  
          </a>
        </li>
        <li className="nav-item navStyle">
          <a className="nav-link" href="#hotel" role="tab" data-toggle="tab">
              <i className="fa fa-building" aria-hidden="true"></i><br/>
              Hotel
          </a>
        </li>
        <li className="nav-item navStyle">
            <a className="nav-link" href="#hotelFlight" role="tab" data-toggle="tab">
                <i className="fa fa-university" aria-hidden="true"></i><br/>
                HotelFlight
            </a>
          </li>
        <li className="nav-item navStyle">
          <a className="nav-link" href="#car" role="tab" data-toggle="tab">
           <i className="fa fa-car" aria-hidden="true"></i><br/>
          Car
        </a>
        </li>
        <li className="nav-item navStyle">
            <a className="nav-link" href="#activity" role="tab" data-toggle="tab">
              <i className="fa fa-industry" aria-hidden="true"></i><br/>
            Activities
          </a>
          </li>
    </ul>

      <div className="tab-content responsive">
        <div role="tabpanel" className="tab-pane fade active" id="plane">
          <form>
            <div className="input-group">
            <input type="text" className="form-control formInputStyle" id="origin" placeholder="Origin"/>
             <div className="input-group-addon buttonInputStyle">
               <button className="btn btn-default" type="button" data-toggle="dropdown">
                 <i className="fa fa-navicon form-control-feedback " aria-hidden="true"></i>
              </button>
              <ul className="dropdown-menu">
                  <li><a href="#">Bangalore</a></li>
                  <li><a href="#">UK</a></li>
                  <li><a href="#">Canada</a></li>
                </ul>
             </div> 
             </div>
             <div className="input-group">
                <input type="text" className="form-control formInputStyle" id="des" placeholder="Destination"/>
                     <div className="input-group-addon buttonInputStyle">
                      <button className="btn btn-default" type="button" data-toggle="dropdown">
                        <i className="fa fa-navicon" aria-hidden="true"></i>
                      </button>
                      <ul className="dropdown-menu">
                          <li><a href="#">Dubai</a></li>
                          <li><a href="#">Bali</a></li>
                          <li><a href="#">Singapore</a></li>
                        </ul>
                    </div> 
              </div>
              <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="input-group date"> 
                  <input type="text" className="form-control formInputStyle" id='datepicker' placeholder="From Date"/>
                       <div className="input-group-addon buttonInputStyle">
                        <button className="btn btn-default" type="button" id='datetimepickerButton1'>
                          <i className="fa fa-edit" aria-hidden="true"></i>
                        </button>
                      </div> 
                  </div>
                </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="input-group">
                    <input type="text" className="form-control formInputStyle" id='datetimepicker2' placeholder="Return Date"/>
                         <div className="input-group-addon buttonInputStyle">
                          <button className="btn btn-default" type="button">
                            <i className="fa fa-edit" aria-hidden="true"></i>
                          </button>
                        </div> 
                </div>
              </div>
            </div>
          <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-8">
            <div className="dropdown input-group">
                <input className="form-control formInputStyle"   placeholder="Guests"/>
                <div className="input-group-addon buttonInputStyle">                    
                <button className="dropdown-toggle" type="button"data-toggle="dropdown">
                    
                </button>
               
                <ul className="dropdown-menu">
                  <li><a href="#">Adult</a></li>
                  <li><a href="#">Children</a></li>
                  <li><a href="#">Infants</a></li>
                </ul>
                </div>
              </div> 
            </div>
              <div className="col-lg-4 col-md-4 col-sm-4" >
                  <input className="form-control formInputStyle promoStyle"  placeholder="Promocode"/>
              </div>
           
          </div>
          <div className="text-center">
            <button type="button" className="btn btn-danger searchStyle">
              Search
            </button>
          </div>
         </form>   
        </div> 
       
        <div role="tabpanel" className="tab-pane fade" id="hotel">

            <form>
                <div className="input-group">
                <input type="text" className="form-control formInputStyle" id="origin" placeholder="Origin"/>
                 <div className="input-group-addon buttonInputStyle">
                   <button className="btn btn-default" type="button" data-toggle="dropdown">
                     <i className="fa fa-navicon form-control-feedback " aria-hidden="true"></i>
                  </button>
                  <ul className="dropdown-menu">
                      <li><a href="#">Bangalore</a></li>
                      <li><a href="#">UK</a></li>
                      <li><a href="#">Canada</a></li>
                    </ul>
                 </div> 
                 </div>
                  <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="input-group date"> 
                      <input type="text" className="form-control formInputStyle" id='datepicker' placeholder="From Date"/>
                           <div className="input-group-addon buttonInputStyle">
                            <button className="btn btn-default" type="button" id='datetimepickerButton1'>
                              <i className="fa fa-edit" aria-hidden="true"></i>
                            </button>
                          </div> 
                      </div>
                    </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="input-group">
                        <input type="text" className="form-control formInputStyle" id='datetimepicker2' placeholder="Return Date"/>
                             <div className="input-group-addon buttonInputStyle">
                              <button className="btn btn-default" type="button">
                                <i className="fa fa-edit" aria-hidden="true"></i>
                              </button>
                            </div> 
                    </div>
                  </div>
                </div>
                <div className="input-group">
                    <input type="text" className="form-control formInputStyle" id="room" placeholder="Room"/>
                         <div className="input-group-addon buttonInputStyle">
                          <button className="btn btn-default" type="button" data-toggle="dropdown">
                            <i className="fa fa-hotel" aria-hidden="true"></i>
                          </button>
                        </div> 
                  </div>  
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-8">
                <div className="dropdown input-group">
                    <input className="form-control formInputStyle"   placeholder="Guests"/>
                    <div className="input-group-addon buttonInputStyle">                    
                    <button className="dropdown-toggle" type="button"data-toggle="dropdown">
                        
                    </button>
                   
                    <ul className="dropdown-menu">
                      <li><a href="#">Adult</a></li>
                      <li><a href="#">Children</a></li>
                      <li><a href="#">Infants</a></li>
                    </ul>
                    </div>
                  </div> 
                </div>
                  <div className="col-lg-4 col-md-4 col-sm-4" >
                      <input className="form-control formInputStyle promoStyle"  placeholder="Promocode"/>
                  </div>
               
              </div>
              <div className="text-center">
                <button type="button" className="btn btn-danger searchStyle">
                  Search
                </button>
              </div>
            </form>   

        </div>
        <div role="tabpanel" className="tab-pane fade" id="hotelFlight">
            <form>
                <div className="input-group">
                <input type="text" className="form-control formInputStyle" id="originHotel" placeholder="Origin"/>
                 <div className="input-group-addon buttonInputStyle">
                   <button className="btn btn-default" type="button" data-toggle="dropdown">
                     <i className="fa fa-navicon form-control-feedback " aria-hidden="true"></i>
                  </button>
                  <ul className="dropdown-menu">
                    <li><a href="#">Bangalore</a></li>
                    <li><a href="#">UK</a></li>
                    <li><a href="#">Canada</a></li>
                    </ul>
                 </div> 
                 </div>
                 <div className="input-group"id="showReturn">
                    <input type="text" className="form-control formInputStyle" id="desCar" placeholder="Destination"/>
                         <div className="input-group-addon buttonInputStyle">
                          <button className="btn btn-default" type="button" data-toggle="dropdown">
                            <i className="fa fa-navicon" aria-hidden="true"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li><a href="#">Bangalore</a></li>
                            <li><a href="#">UK</a></li>
                            <li><a href="#">Canada</a></li>
                            </ul>
                        </div> 
                  </div>
                  
                  
                  <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="input-group"> 
                      <input type="text" className="form-control formInputStyle" id='datepicker' placeholder="From Date"/>
                           <div className="input-group-addon buttonInputStyle">
                            <button className="btn btn-default" type="button" id='datetimepickerButton1'>
                              <i className="fa fa-edit" aria-hidden="true"></i>
                            </button>
                          </div> 
                      </div>
                    </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="input-group">
                        <input type="text" className="form-control formInputStyle" id='datetimepicker2' placeholder="Return Date"/>
                             <div className="input-group-addon buttonInputStyle">
                              <button className="btn btn-default" type="button">
                                <i className="fa fa-edit" aria-hidden="true"></i>
                              </button>
                            </div> 
                    </div>
                  </div>
                </div>
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-8">
                <div className="dropdown input-group">
                    <input className="form-control formInputStyle"   placeholder="Guests"/>
                    <div className="input-group-addon buttonInputStyle">                    
                    <button className="dropdown-toggle" type="button"data-toggle="dropdown">
                        
                    </button>
                   
                    <ul className="dropdown-menu">
                      <li><a href="#">Adult</a></li>
                      <li><a href="#">Children</a></li>
                      <li><a href="#">Infants</a></li>
                    </ul>
                    </div>
                  </div> 
                </div>
                  <div className="col-lg-4 col-md-4 col-sm-4" >
                      <input className="form-control formInputStyle promoStyle"  placeholder="Promocode"/>
                  </div>
               
              </div>
              <div className="text-center">
                <button type="button" className="btn btn-danger searchStyle">
                  Search
                </button>
              </div>
            </form>   
        </div>
        
         <div role="tabpanel" className="tab-pane fade" id="car">
            <form>
                <div className="input-group">
                <input type="text" className="form-control formInputStyle" id="origin" placeholder="City,airport,address,station.."/>
                 <div className="input-group-addon buttonInputStyle">
                   <button className="btn btn-default" type="button" data-toggle="dropdown">
                     <i className="fa fa-navicon form-control-feedback " aria-hidden="true"></i>
                  </button>
                  <ul className="dropdown-menu ">
                      <li><a href="#">Mall</a></li>
                      <li><a href="#">Museum</a></li>
                      <li><a href="#">Airport</a></li>
                    </ul>
                 </div> 
                 </div>
                 <div className="input-group" id="carDest" style={styles}>
                    <input type="text" className="form-control formInputStyle" id="des" placeholder="Return Address"/>
                         <div className="input-group-addon buttonInputStyle">
                          <button className="btn btn-default" type="button" data-toggle="dropdown">
                            <i className="fa fa-navicon" aria-hidden="true"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li><a href="#">Mall</a></li>
                            <li><a href="#">Museum</a></li>
                            <li><a href="#">Airport</a></li>
                          </ul>
                        </div> 
                  </div>
                 <div className="checkBoxStyle">
                      <input type="checkbox" value="checkBox" id="checkBox" name="checkBox"/> Please select if you want to enter Return Address
                 </div>
                  <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="input-group"> 
                      <input type="text" className="form-control formInputStyle" id='datepicker' placeholder="Start Date" readOnly="true"/>
                           <div className="input-group-addon buttonInputStyle">
                            <button className="btn btn-default" type="button" id='datetimepickerButton1'>
                              <i className="fa fa-edit" aria-hidden="true"></i>
                            </button>
                          </div> 
                      </div>
                    </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="dropdown dropdownStyle">
                      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       10:00 AM
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">12:00 PM</a>
                        <a className="dropdown-item" href="#">14:00 PM</a>
                        <a className="dropdown-item" href="#">16:00 AM</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="input-group"> 
                      <input type="text" className="form-control formInputStyle" id='datepicker' placeholder="End Date" readOnly="true"/>
                           <div className="input-group-addon buttonInputStyle">
                            <button className="btn btn-default" type="button" id='datetimepickerButton1'>
                              <i className="fa fa-edit" aria-hidden="true"></i>
                            </button>
                          </div> 
                      </div>
                    </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="dropdown dropdownStyle">
                      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       10:00 AM
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">12:00 PM</a>
                        <a className="dropdown-item" href="#">14:00 PM</a>
                        <a className="dropdown-item" href="#">16:00 AM</a>
                      </div>
                    </div>
                  </div>
                </div>
              <div className="text-center">
                <button type="button" className="btn btn-danger searchStyle">
                  Search
                </button>
              </div>
            </form>   

         </div>
       
         <div role="tabpanel" className="tab-pane fade" id="activity">
          <div className="input-group">
            <input type="text" className="form-control formInputStyle" id="origin" placeholder="Destination"/>
             <div className="input-group-addon buttonInputStyle">
               <button className="btn btn-default" type="button" data-toggle="dropdown">
                 <i className="fa fa-navicon" aria-hidden="true"></i>
              </button>
              <ul className="dropdown-menu ">
                  <li><a href="#">Mall</a></li>
                  <li><a href="#">Museum</a></li>
                  <li><a href="#">Airport</a></li>
                </ul>
             </div> 
             </div>
             <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="input-group"> 
                    <input type="text" className="form-control formInputStyle" id='datepicker' placeholder="Start Date"/>                
                    </div>
                  </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="input-group">
                      <input type="text" className="form-control formInputStyle" id='datetimepicker2' placeholder="End Date"/>
                  </div>
                </div>
              </div>
              <div className="text-center">
                  <button type="button" className="btn btn-danger searchStyle">
                    Search
                  </button>
                </div>
         </div>
    
       </div>
</div>
           
        )
    }

}
