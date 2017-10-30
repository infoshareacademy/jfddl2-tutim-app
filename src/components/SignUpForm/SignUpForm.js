import React from 'react'
import {connect} from 'react-redux'

import {signUp} from '../../state/auth'
import {FormControl, Button, Grid, FormGroup} from 'react-bootstrap'

class SignUpForm extends React.Component {

  state = {
    email: '',
    password: '',
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  handleSubmit = event => {
    event.preventDefault()
    this.props.signUpHelper(this.state.email, this.state.password)
  }

  render() {
    return (
      <Grid>
        <form onSubmit={this.handleSubmit}>
          <h1>Zarejestruj się</h1>
          <FormGroup>
            <FormControl
              placeholder="adres email"
              type="text"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              placeholder="hasło"
              type="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </FormGroup>
          <FormGroup>
            <Button bsStyle="warning"
            type="submit"
            >Sign up</Button>
          </FormGroup>
        </form>
      </Grid>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signUpHelper: (email, password) => dispatch(signUp(email, password))
})

export default connect(
  null,
  mapDispatchToProps
)(SignUpForm)