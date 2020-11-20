import React, { Component } from 'react'


export class Confirm extends Component {
    handleSubmit = e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: {firstName, lastName, email, occupation, city, bio, nextOfKin, DOB }} = this.props;
        return(
          <div id="div">
             <nav className="nav-wrapper navstyle">
                <div className="container">
                   <h3 className="white-text center">Confirm Details</h3>
                </div>
              </nav>
                <div className="container">
                    <div className="row">
                        <div className="col s12 l6 offset-l3 center">
                            <ul>
                                <li><strong>First Name</strong></li>
                                <li>{firstName}</li>
                            </ul>
                            <ul>
                                <li> <strong>Last Name</strong></li>
                                <li>{lastName}</li>
                            </ul>
                            <ul>
                                <li><strong>Email</strong></li>
                                <li>{email}</li>
                            </ul>
                            <ul>
                                <li><strong>Occupation</strong></li>
                                <li>{occupation}</li>
                            </ul>
                            <ul>
                                <li><strong>City</strong></li>
                                <li>{city}</li>
                            </ul>
                            <ul>
                                <li><strong>Bio</strong></li>
                                <li>{bio}</li>
                            </ul>
                            <ul>
                                <li><strong>Next Of Kin</strong></li>
                                <li>{nextOfKin}</li>
                            </ul>
                            <ul>
                                <li><strong>Date Of Birth</strong></li>
                                <li>{DOB}</li>
                            </ul>
                            <div className="input-field">
                                   <button className="btn" onClick={this.back}>Back</button>
                            </div>
                            <div className="input-field ">
                                   <button className="btn" onClick={this.handleSubmit}>Confirm</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Confirm
