import React, { Component } from 'react';
import './yuna.jpg'; 
import M from "materialize-css";
import { Link } from 'react-router-dom';

export class Sidenav extends Component {
    
    componentDidMount(){
        const sideNav = document.querySelector('.sidenav');
        M.Sidenav.init(sideNav);
    }
    
    render() {
        return (
            <div>

    <div className="container ">
    <a href="#" data-target="nav-mobile" className=" top-nav sidenav-trigger full hide-on-large-only white-text"><i className="material-icons">menu</i></a>
               </div>
                <ul id="nav-mobile" className=" sidenav  sidenav-fixed  " style={{transform: "translateX(-105%)",
                    background:"#545252",height:"100vh",width:"160px"}
                }>
                    <li><div className="user-view">

                        <br></br> <br></br> 
               </div>
                </li>
                    <li>
                        <Link to="/" ><i className="material-icons white-text">home</i></Link>
                        <span className="white-text" style={{ marginLeft: "35px" }}>Home</span>
                        <span><br></br><br></br></span> 
                        </li> 

                   
                  
                    <li><Link  to="/projects" ><i className="material-icons white-text">show_chart</i></Link>
                        <span style={{ marginLeft: "35px" }} className="white-text">Projects</span>
                        <span><br></br><br></br></span>
                    </li>
                   

                    <li><Link  to="/contact"   ><i className="material-icons white-text"> email</i></Link>
                        <span style={{ marginLeft: "35px" }} className="white-text">Contact</span>
                        
                    </li>
                   
                    
  </ul>
 
  </div>
                   
            


                )
            }
        }

        
        export default Sidenav
