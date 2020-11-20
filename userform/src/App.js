import React, { Component } from 'react'
import Form from './Components/Form'
import Confirm from './Components/Confirm'
import Success from './Components/Success'


export class App extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
    nextOfKin: "",
    DOB: "",
  }

  nextStep = () =>{
    const { step }= this.state;
    this.setState({
      step: step + 1
    });
  }

  prevStep = () =>{
    const { step }= this.state;
    this.setState({
      step: step - 1
    });
  }

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    })
  }
  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio, nextOfKin, DOB } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio, nextOfKin, DOB };
  switch(step){
    case 1:
      return(
        <Form
        handleChange = {this.handleChange}
        nextStep = {this.nextStep}
        values = {values}
        />
      )
      case 2:
        return(
          <Confirm
          handleChange = {this.handleChange}
          nextStep = {this.nextStep}
          prevStep={this.prevStep}
          values = {values}
          />
        )
        case 3:
          return (
            <Success/>
          )
  }
  }
}

export default App
