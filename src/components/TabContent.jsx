import React from 'react';
import axios from 'axios';

export default class TabContent extends  React.Component{
    constructor(props) {
        super(props);
        this.verify = this.verify.bind(this);
        this.state = {origin:null,dest:null,from:null,to:null,guest:null,inValue:3};
        this.changeValue = this.changeValue.bind(this);
      }
      
      verify(e){
        var letters = /^[A-Za-z]+$/;
        var date = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
        var guestNo = /^\d$/;
        if(e.target.id ==="flightOrigin"){
          if((e.target.value.match(letters)) && (e.target.value != null) ){
          this.setState({origin:e.target.value})
          
          }
          else{
            console.log("origin :invalid");
          }
        }
       else if(e.target.id ==="flightDestination"){
          if((e.target.value.match(letters)) && (e.target.value != null) ){
          this.setState({dest:e.target.value})
          
          }
          else{
            console.log("dest :invalid");
          }
        }
      else if(e.target.id ==="flightFromDate"){
        if((e.target.value.match(date)) && (e.target.value != null) ){
        this.setState({from:e.target.value})
        
        }     
        else{
          console.log("from :invalid");
        }
       }
      else if(e.target.id ==="flightToDate"){
    
        if((e.target.value.match(date)) && (e.target.value != null) ){
        this.setState({to:e.target.value})
        
        }
      
        else{
          console.log("to :invalid");
        }
     }
        else if(e.target.id ==="flightGuest"){
          if((e.target.value.match(guestNo)) && (e.target.value != null) &&(e.target.value.length < 11)){
          this.setState({guest:e.target.value})
          
          }
        
        else{
          console.log("guest :invalid");
        }
       }
        else if(e.target.id=="flightSearch"){
          if((this.state.origin != null) && (this.state.dest != null) && (this.state.from != null) 
          && (this.state.to != null) && (this.state.guest != null) ){
          axios.post('http://localhost:3000/flight',{origin:this.state.origin,dest:this.state.dest,to:this.state.to,
        from:this.state.from,guest:this.state.guest})
          .then(function(response){
            console.log(response.data)
            
          })
          .catch(function(error){
            console.log(error);
          });
        }
          
        }
        console.log("Before calling the server, origin ",this.state.origin)
        console.log("Before calling the server, des ",this.state.dest)
        console.log("Before calling the server, from ",this.state.from)
        console.log("Before calling the server, to ",this.state.to)
        console.log("Before calling the server, guest ",this.state.guest)
      }
    
    
      changeValue(e){
         e.preventDefault();
         e.stopPropagation()
      let quantityValue = this.state.inValue ;
      console.log(quantityValue);
        if(e.target.id === "adultPlus"){
          this.setState({inValue:quantityValue+1});
        }
        else if(e.target.id === "adultMinus"){
          this.setState({inValue:quantityValue-1});
        }

      }
    render(){
        var styles ={
            display: 'none'
        };
       
        return(
           
<div className="formStyle col-lg-6 col-md-8 col-sm-12">

    <ul className="nav nav-tabs responsive" role="tablist">
        <li className="nav-item active navStyle">
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
        <div role="tabpane" className="tab-pane fade  active in show" id="plane">
          <form>
            <div className="input-group">
            <input type="text" className="form-control formInputStyle" id="flightOrigin" placeholder="Origin" onKeyUp={this.verify}/>
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
                <input type="text" className="form-control formInputStyle" id="flightDestination" placeholder="Destination" onKeyUp={this.verify}/>
                     <div className="input-group-addon buttonInputStyle">
                      <button className="btn btn-default" type="button" data-toggle="dropdown">
                        <i className="fa fa-navicon" aria-hidden="true"></i>
                      </button>
                      <ul className="dropdown-menu">
                          <li><a href="#">Dubai</a></li>
                          <li><a href="#">Bali</a></li>
                          <li><a href="#">Singapore</a></li>
        }
                        </ul>
                    </div> 
              </div>
              <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="input-group date"> 
                  <input type="text" className="form-control formInputStyle" id='flightFromDate' placeholder="From Date" onKeyUp={this.verify}/>
                       <div className="input-group-addon buttonInputStyle">
                        <button className="btn btn-default" type="button" id='datetimepickerButton1'>
                          <i className="fa fa-edit" aria-hidden="true"></i>
                        </button>
                      </div> 
                  </div>
                </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="input-group">
                    <input type="text" className="form-control formInputStyle" id='flightToDate' placeholder="Return Date" onKeyUp={this.verify}/>
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
                <input className="form-control formInputStyle" id="flightGuest"  placeholder="Guests:" onKeyUp={this.verify}/>
                <div className="input-group-addon buttonInputStyle">                    
                <button  type="button"data-toggle="modal" data-target="#myModal">
                    <i className="fa fa-user" aria-hidden="true"></i>
                </button>
              
                <div id="myModal" className="modal fade" role="dialog">
                  <div className="modal-dialog">          
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal"></button>
                        <h4 className="modal-title">Add number of Guest</h4>
                      </div>
                      <div className="modal-body">
                      <ul>
                <li ><label>Adult</label> 
                <div>
                    <div className="input-group">
                    <span className="input-group-btn">
                        <button type="button" className="quantity-left-minus btn btn-danger" id="adultMinus"   onClick={this.changeValue}>
                          <span className="fa fa-minus"></span>
                        </button>
                    </span>
                    <input type="text" id="adultQuantity" name="quantity" className="form-control input-number" value={this.state.inValue} min="1" max="100" onChange={this.changeValue}/>
                    <span className="input-group-btn">
                        <button type="button" className="quantity-right-plus btn btn-success" id="adultPlus"  onClick={this.changeValue}>
                            <span className="fa fa-plus"></span>
                        </button>
                    </span>
                  </div>
                </div>
             </li>  
             <li ><label>Children</label> 
                <div>
                    <div className="input-group">
                    <span className="input-group-btn">
                        <button type="button" className="quantity-left-minus btn btn-danger" id="adultMinus"   onClick={this.changeValue}>
                          <span className="fa fa-minus"></span>
                        </button>
                    </span>
                    <input type="text" id="adultQuantity" name="quantity" className="form-control input-number" value={this.state.inValue} min="1" max="100" onChange={this.changeValue}/>
                    <span className="input-group-btn">
                        <button type="button" className="quantity-right-plus btn btn-success" id="adultPlus"  onClick={this.changeValue}>
                            <span className="fa fa-plus"></span>
                        </button>
                    </span>
                  </div>
                </div>
             </li>  
             <li ><label>Infants</label> 
                <div>
                    <div className="input-group">
                    <span className="input-group-btn">
                        <button type="button" className="quantity-left-minus btn btn-danger" id="adultMinus"   onClick={this.changeValue}>
                          <span className="fa fa-minus"></span>
                        </button>
                    </span>
                    <input type="text" id="adultQuantity" name="quantity" className="form-control input-number" value={this.state.inValue} min="1" max="100" onChange={this.changeValue}/>
                    <span className="input-group-btn">
                        <button type="button" className="quantity-right-plus btn btn-success" id="adultPlus"  onClick={this.changeValue}>
                            <span className="fa fa-plus"></span>
                        </button>
                    </span>
                  </div>
                </div>
             </li>   
                </ul>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                      </div>
                    </div>

                  </div>
                </div>
               
                
                </div>
              </div> 
            </div>
              <div className="col-lg-4 col-md-4 col-sm-4" >
                  <input className="form-control formInputStyle promoStyle"  placeholder="Promocode"/>
              </div>
           
          </div>
          <div className="text-center">
            <button id="flightSearch"type="button" className="btn  searchStyle" onClick={this.verify}>
              Search
            </button>
          </div>
         </form>   
        </div> 
       
        <div role="tabpane" className="tab-pane fade" id="hotel">

            <form>*/}
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
                    <button className="dropdown-toggle" id="menu2" type="button"data-toggle="dropdown">
                        
                    </button>
                   
                    <ul className="dropdown-menu" role="menu" aria-labelledby="menu2">
                    <li role="presentation" className="divider"></li>
                    <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Adult</a></li>  
                    <li role="presentation" className="divider"></li>
                    <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Children</a></li>  
                    <li role="presentation" className="divider"></li>
                    <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Infants</a></li>    
                    </ul>
                    </div>
                  </div> 
                </div>
                  <div className="col-lg-4 col-md-4 col-sm-4" >
                      <input className="form-control formInputStyle promoStyle"  placeholder="Promocode"/>
                  </div>
               
              </div>
              <div className="text-center">
                <button type="button" className="btn  searchStyle">
                  Search
                </button>
              </div>
             </form>  
             {/* i>
                <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Infants</a></li>    
                </ul> */} 

        </div>
        <div role="tabpane" className="tab-pane fade" id="hotelFlight">
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
                <button type="button" className="btn  searchStyle">
                  Search
                </button>
              </div>
            </form>   
        </div>
        
         <div role="tabpane" className="tab-pane fade" id="car">
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
                  </div>tabpane
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
                <button type="button" className="btn  searchStyle">
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
