import React from 'react'
import { connect } from 'react-redux'
import { signIn, signInByGoogle } from '../../state/auth'
import {FormControl, Button, Grid, FormGroup} from 'react-bootstrap'

class SignInForm extends React.Component {

  state = {
    email: '',
    password: '',
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  handleSubmit = event => {
    event.preventDefault()
    this.props.signInHelper(this.state.email, this.state.password)
  }

  handleLoginByGoogle = event => {
    event.preventDefault()
    this.props.signInByGoogleHelper()
  }

  render() {
    return (
      <Grid>
      <form onSubmit={this.handleSubmit}>
        <h1>Zaloguj się</h1>
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
        <Button bsStyle="primary"
        type="submit"
        >Sign in</Button>
        <span>   </span>
        <Button bsStyle="danger" onClick={this.handleLoginByGoogle}>Sign in by Google</Button>
        </FormGroup>
      </form>
      </Grid>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signInHelper: (email, password) => dispatch(signIn(email, password)),
  signInByGoogleHelper: () => dispatch(signInByGoogle())
})

export default connect(
  null,
  mapDispatchToProps
)(SignInForm)