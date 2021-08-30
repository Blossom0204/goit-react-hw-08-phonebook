import React from 'react'
import { NavLink } from 'react-router-dom'

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
}

export default function AuthNav() {
  return (
    <>
      <NavLink
        to="/register"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Log in
      </NavLink>
    </>
  )
}
