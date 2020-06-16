import React, { useState, useContext } from 'react'
import { Button, Container, ThemeProvider } from '@material-ui/core'
import Login from './Login'
import SignUp from './Signup'
import userContext from '../utils/userContext'

function Landing() {
  const [login, setLogin] = useState(0)
  const { user, setUser } = useContext(userContext)

  return !user ? (
    <div style={{ textAlign: 'center' }}>
      <img src={'logo.png'} style={{ marginTop: '10%' }} />
      {login ? <Login /> : <SignUp />}
      <h1>Landing</h1>

      <Button color='primary' variant='outlined' onClick={() => setLogin(0)}>
        Sign Up
      </Button>
      <Button color='primary' variant='outlined' onClick={() => setLogin(1)}>
        Log In
      </Button>
    </div>
  ) : (
    <div style={{ marginTop: '100px' }}>
      <h1> Logged In</h1>
    </div>
  )
}

export default Landing
