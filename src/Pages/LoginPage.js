import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button'

import { TextField } from '@material-ui/core'
import { logIn } from '../redux/authorization/auth-operation'
import { TitleForm, LoginForm, LoginBtn } from './LoginPage.styles'

export default function LoginPage() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value)
      case 'password':
        return setPassword(value)
      default:
        return
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(logIn({ email, password }))
    setEmail('')
    setPassword('')
  }

  return (
    <>
      <TitleForm>Log in</TitleForm>

      <LoginForm onSubmit={handleSubmit} autoComplete="off">
        <TextField
          id="outlined-basic"
          label="E-Mail"
          placeholder="E-mail"
          variant="outlined"
          autoComplete="all"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          margin="dense"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        <TextField
          id="outlined-basic"
          label="Password"
          placeholder="Password"
          variant="outlined"
          margin="dense"
          autoComplete="all"
          error={password.length < 1 || password.length > 5 ? false : true}
          helperText={
            password.length < 1 || password.length > 5
              ? ''
              : 'need more symbols'
          }
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <LoginBtn>
          <Button variant="outlined" color="primary" type="submit">
            Log in
          </Button>
        </LoginBtn>
      </LoginForm>
    </>
  )
}
