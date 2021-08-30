import React from 'react'
import { TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../redux/authorization/auth-operation'
import { TitleForm, RegForm, RegBtn } from './RegistrationPage.styles'

export default function RegisterPage() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value)
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
    dispatch(register({ name, email, password }))
    setName('')
    setEmail('')
    setPassword('')
  }

  return (
    <>
      <TitleForm>Register</TitleForm>

      <RegForm onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          margin="dense"
          size="medium"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />

        <TextField
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          margin="dense"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <TextField
          error={password.length < 1 || password.length > 5 ? false : true}
          helperText={
            password.length < 1 || password.length > 5
              ? ''
              : 'need more symbols'
          }
          id="outlined-basic"
          label="Password"
          variant="outlined"
          margin="dense"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <RegBtn>
          <Button variant="outlined" color="primary" type="submit">
            Register
          </Button>
        </RegBtn>
      </RegForm>
    </>
  )
}
