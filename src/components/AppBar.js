import React from 'react'
import { useSelector } from 'react-redux'
import Navigation from './Navigation'
import UserMenu from './UserMenu/UserMenu'
import AuthNav from './AuthNav'
import { getIsLoggedIn } from '../redux/authorization/auth-selectors'

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn)
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  )
}
