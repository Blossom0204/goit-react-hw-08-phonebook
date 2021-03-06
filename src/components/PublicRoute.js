import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { getIsLoggedIn } from '../redux/authorization/auth-selectors'

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/contacts',
  ...routeProps
}) {
  const isLoggedIn = useSelector(getIsLoggedIn)
  const shouldRedirect = isLoggedIn && restricted
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  )
}
