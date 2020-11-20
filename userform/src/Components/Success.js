import React, { Component } from 'react'


class Success extends Component {


    render() {
        return(
          <div id="div">
             <nav className="nav-wrapper navstyle">
                <div className="container">
                   <h3 className="white-text center">Success</h3>
                </div>
              </nav>
                <div className="container">
                    <div className="row">
                        <div className="col s12 l10 offset-l1 ">
                            <h4 className="center-align">Thank you for your submission</h4>
                            <p  className="center-align">You will get an email shortly</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Success
