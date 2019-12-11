import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

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
          <Link
            to="/"
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}>
            HOME
          </Link>

          <Link
            to="/about"
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}>
            ABOUT
          </Link>

          <Link
            to="/blog"
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}>
            BLOG
          </Link>

          <Link
            to="/contact"
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}>
            CONTACT
          </Link>
        </div>
      </nav>
    </header>
  )
}


export default Header
