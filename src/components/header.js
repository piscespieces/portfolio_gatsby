import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { FaHome, FaUserCircle, FaSuitcase, FaEnvelope } from 'react-icons/fa';

import headerStyles from './header.module.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <nav>
        <div>
          {/* <Link
            to="/"
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}>
            <FaHome /> HOME
          </Link> */}

          <Link
            to="/"
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}>
            <span>
              <FaUserCircle />
            </span> ABOUT
          </Link>

          {/* <Link
            to="/blog"
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}>
            BLOG
          </Link> */}

          <Link
            to="/contact"
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}>
            <span>
              <FaEnvelope />
            </span> CONTACT
          </Link>
        </div>
      </nav>
    </header>
  )
}


export default Header
