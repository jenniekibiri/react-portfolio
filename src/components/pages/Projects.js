import React, { Component } from 'react'
import logo from "./yeoman.png"; 
export class Projects extends Component {
    render() {
        return (
            
               
  <div className="container ">
      <h4 className="white-text center">Projects</h4>

      <div className="row">
    <div className="col s12 m4 offset-m2 offset-s2  ">
      <div className="card">
        <div className="card-image">
          <img src={logo}/>
          <span className="card-title">Card Title</span>
        </div>
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
    <div className="col s12 m4  offset-s2 ">
      <div className="card">
        <div className="card-image">
          <img src={logo}/>
          <span className="card-title">Card Title</span>
        </div>
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
               
  <div className="row">
    <div className="col s12 m4 offset-m2 offset-s2 ">
      <div className="card">
        <div className="card-image">
          <img src={logo}/>
          <span className="card-title">Card Title</span>
        </div>
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    <div className="col s12 m4 offset-s2 ">
      <div className="card">
        <div className="card-image">
          <img src={logo}/>
          <span className="card-title">Card Title</span>
        </div>
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
  </div>
          
          
            </div>
        )
    }
}

export default Projects
