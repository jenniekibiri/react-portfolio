import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <div>
               
                    <div className="container">
                <div className="row">
                <div  style={headStyle}>
                <h4 className="white-text col s12   offset-m4 offset-s4">Jennie Kibiri</h4>
                <h3 className="white-text col s12  offset-m2 offset-s3">FullStack Web Developer</h3>
                    </div>
                </div>
                <div className="row " >
                    
                    <div style={contactStyle}>
                  
        <a href="https://github.com/jenniekibiri" className="white-text col s3   m3 offset-m1" > <i className="fa fa-github fa-4x "></i><span> {"   "}Github</span></a>  
                    </div>
                    <div style={contactStyle}>
                  
                  <a href="https://facebook.com/jeniffer.kibiri" className="white-text col s3 m2" > <i className="fa fa-facebook fa-4x "></i><span>facebook</span></a>  
                    </div>
                    
                    <div style={contactStyle}>
                  
        <a href="https://www.linkedin.com/in/jeniffer-kibiri-025ab8146/" className="white-text col s3 m3" > <i className="fa fa-linkedin fa-4x "></i><span > {" "
        }LinkedIn</span></a>  
                    </div>
                    <div style={contactStyle}>
                  
        <a href="https://github.com/jenniekibiri" className="white-text col s3  m3" > <i className="fa fa-file fa-4x "></i><span style={spanStyle}>{"     "} CV</span></a>  
                    </div>
                </div>

                <div className="row">
    <div className="col s12  m8 offset-m1"style={contactStyle} >
      <div className="card">

        <div className="card-content">
          <p>Hi! I develop websites and web applications with modern JavaScript
 frameworks! contact me if you are interested in working together</p>
        </div>
        
      </div>
    </div>
  </div>
                
                    </div>
                    
               
            </div>
        )
    }
}
const headStyle={
    marginTop:"70px"
}
const contactStyle={
    marginTop:"70px", 
  
}
const spanStyle={
    marginTop:"50px"
}

export default Home
