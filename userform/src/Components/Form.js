import React, { Component } from 'react'


class Form extends Component {
    handleSubmit = e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { handleChange, values } = this.props;
        return(
          <div id="div">
             <nav className="nav-wrapper navstyle">
                <div className="container">
                   <h3 className="white-text center">Fill In Your Details</h3>
                </div>
              </nav>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m6  offset-m3 ">
                            <form onSubmit={this.handleSubmit}>
                                <div className="input-field">
                                    <input type="text" 
                                     id="firstname" 
                                     onChange={handleChange("firstName")} 
                                     defaultValue ={values.firstName}
                                     required>
                                     </input>
                                     <label htmlFor="firstname">First Name</label>
                                 </div>

                                 <div className="input-field">
                                     <input type="text" 
                                     id="lastname" onChange={handleChange("lastName")} 
                                     defaultValue ={values.lastName}
                                     required>
                                     </input>
                                     <label htmlFor="lastname">Last Name</label>
                                </div>

                                <div className="input-field">
                                    <input type="email" 
                                    id="email" 
                                    onChange={handleChange("email")} 
                                    defaultValue ={values.email} 
                                    required>
                                    </input>
                                    <label htmlFor="email">Email</label>
                                </div>
                                 
                                <div className="input-field">
                                    <input type="text" 
                                    id="occupation" 
                                    onChange={handleChange("occupation")} 
                                    defaultValue ={values.occupation}
                                    required>
                                    </input>
                                    <label htmlFor="occupation">Occupation</label>
                                </div>
                                    
                                <div className="input-field">
                                     <input type="text" 
                                      id="city" 
                                      onChange={handleChange("city")} 
                                      defaultValue ={values.city} 
                                      required>
                                      </input>
                                      <label htmlFor="city">City</label>
                                 </div>  
                                 
                                <div className="input-field">
                                    <input type="text" 
                                    id="bio" 
                                    onChange={handleChange("bio")} 
                                    defaultValue ={values.bio}
                                    required>
                                    </input>
                                    <label htmlFor="bio">Bio</label>
                                </div>

                                <div className="input-field">
                                    <input type="text" 
                                    id="nextofkin" 
                                    onChange={handleChange("nextOfKin")} 
                                    defaultValue ={values.nextOfKin}
                                    required>
                                    </input>
                                    <label htmlFor="nextofkin">Next Of Kin</label>
                                </div>

                                <div className="input-field">
                                <input type="text" 
                                    id="date"
                                    className="datepicker" 
                                    onChange={handleChange("DOB")} 
                                    defaultValue ={values.DOB} 
                                    required>
                                    </input>
                                <label htmlFor="date">Date Of Birth</label>
                                </div>

                                <div className="input-field center">
                                   <button className="btn">
                                       Continue
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form
