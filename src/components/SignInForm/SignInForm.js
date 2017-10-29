import React from 'react'
import { connect } from 'react-redux'
import { signIn, signInByGoogle } from '../../state/auth'

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
      <form onSubmit={this.handleSubmit}>
        <h1>Zaloguj się</h1>
        <input
          type="text"
          name="email"
          onChange={this.handleChange}
          value={this.state.email}
        />

        <input
          type="password"
          name="password"
          onChange={this.handleChange}
          value={this.state.password}
        />

        <button>Sign in</button>

        <button onClick={this.handleLoginByGoogle}>Sign in by Google</button>

      </form>
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