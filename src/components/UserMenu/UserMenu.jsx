import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from '../../redux/authorization/auth-operation'
import { UserContainer, UserButton } from './UserMenu.styles'

export default function UserMenu() {
  const dispatch = useDispatch()

  return (
    <UserContainer>
      <UserButton type="submit" onClick={() => dispatch(logOut())}>
        Log out
      </UserButton>
    </UserContainer>
  )
}
