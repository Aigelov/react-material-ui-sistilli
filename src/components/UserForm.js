import React, {Component} from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

class UserForm extends Component {
  state = {
    step: 1,
    firstName: 'Galym',
    lastName: 'Aigelov',
    email: 'aigelov@gmail.com',
    occupation: 'Kazakhstan',
    city: 'Astana',
    bio: 'This is my bio'
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  // Proceed to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  // Fields change handler
  changeHandler = input => event => {
    this.setState({
      [input]: event.target.value
    })
  }

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            changeHandler={this.changeHandler}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            changeHandler={this.changeHandler}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return (
          <Success
            prevStep={this.prevStep}
          />
        )
      default:
        return <h2>Default case</h2>;
    }
  }
}

export default UserForm;
