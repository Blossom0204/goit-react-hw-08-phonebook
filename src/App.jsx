import React, { useEffect, Suspense, lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Switch } from 'react-router-dom'
import { fetchCurrentUser } from './redux/authorization/auth-operation'
import AppBar from './components/AppBar'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import { getIsFetchingCurrent } from './redux/authorization/auth-selectors'
import Loader from './components/Loader/Loader'

const HomePage = lazy(() => import('./Pages/HomePage'))
const RegisterPage = lazy(() => import('./Pages/RegisterPage'))
const LoginPage = lazy(() => import('./Pages/LoginPage'))
const ContactPage = lazy(() => import('./Pages/ContactPage'))

function App() {
  const dispatch = useDispatch()
  const isFetchingCurrent = useSelector(getIsFetchingCurrent)

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch])

  return (
    !isFetchingCurrent && (
      <>
        <AppBar />
              <Suspense fallback={<Loader />}>
            <Switch>
              <PublicRoute path="/" exact>
                <HomePage />
              </PublicRoute>
              <PublicRoute path="/register" restricted>
                <RegisterPage />
              </PublicRoute>
              <PublicRoute path="/login" restricted redirectTo="/contacts">
                <LoginPage />
              </PublicRoute>
              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactPage />
              </PrivateRoute>
            </Switch>
          </Suspense>
        </>
      
    )
  );
}

export default App
