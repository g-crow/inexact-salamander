import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#666666',
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
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
        <ul
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            float: 'right'
          }}>
          <Link
            style={{
              color: 'white'
            }}>
            Contact</Link>
        </ul>
      </h1>
    </div>
  </div>
)

export default Header
