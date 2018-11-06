import React from 'react'
import { Link } from 'gatsby'

const Header = ( ) => (
  <div
    style={{
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.7rem 1.0875rem',
      }}
    >
    <ul
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        float: 'right'
      }}>
      <Link
        to="/about"
        style={{
          color: 'rgba(0,0,0,0.6)',
          textDecoration: 'none',
        }}
      >
        Profile
      </Link>
      <Link
        to="/about"
        style={{
          color: 'rgba(0,0,0,0.6)'
        }}>
        Work</Link>
        <Link
          to="/"
          style={{
            color: 'rgba(0,0,0,0.6)'
          }}>
          Insights</Link>
        <Link
          to="/about"
          style={{
            color: 'rgba(0,0,0,0.6)'
          }}>
          Contact</Link>
      </ul>

    </div>
  </div>
)

export default Header
