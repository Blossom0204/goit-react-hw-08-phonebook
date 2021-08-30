import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getIsLoggedIn } from '../redux/authorization/auth-selectors'

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontSize: 24,
    fontWeight: 350,
    color: '#684fa1',
  },
  activeLink: {
    color: '#1b0a42',
    fontSize: 28,
    fontWeight: 600,
  },
  span: {
    fontSize: 24,
    color: '#fff',
  },
}

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn)
  return (
    <nav>
      <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          PhoneBook
        </NavLink>
      )}
    </nav>
  )
}
export default Navigation
