import React, { Component } from 'react'



export class Contact extends Component {
    render() {
        return (
          <div  >
            <div className="row">
    <div className="col s12 m6 offset-m2 offset-s2 ">              
             
                <h4 className="center white-text">Contact Me</h4>

          <form action="contact" method="POST">
          <div className="card-panel white lighten-3">
            <h6> For business inquiries please fill this form </h6>
            <div className="input-field">
              <input type="text" placeholder="Name" name="name"/>

            </div>
            <div className="input-field">
              <input type="text" placeholder="Email" name="email"/>
              
            </div>
         
            <div className="input-field">
              <input type="text" placeholder="Phone" name="phone"/>
              
            </div>
           
            <div className="input-field">
              <textarea className="materialize-textarea " type="text" placeholder="Enter Message" name="message"></textarea>
              
              <input type="submit" value="submit" className="btn"/>
            </div>
          </div>
          </form>
          </div>
          </div>
        </div>
          
        )    
    }
}

export default Contact
