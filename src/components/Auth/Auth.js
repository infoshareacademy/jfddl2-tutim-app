import React from 'react'
import { connect } from 'react-redux'

// import SignInForm from '../SignInForm'
// import SignUpForm from '../SignUpForm'

const Auth = props => (
  <div>

  </div>
)

const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(
  mapStateToProps
)(Auth)