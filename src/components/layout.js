import React from "react"

import Header from "./header"
import Footer from "./footer"
import "../stylesheets/layout.scss"
import layoutStyles from './layoutComponent.module.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={layoutStyles.container}>

        <div className={layoutStyles.content}>
          {children}
        </div>

      </div>
      <Footer />
    </>
  )
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  // return (
  //   <>
  //     <Header siteTitle={data.site.siteMetadata.title} />
  //     <div
  //       style={{
  //         margin: `0 auto`,
  //         maxWidth: 960,
  //         padding: `0px 1.0875rem 1.45rem`,
  //         paddingTop: 0,
  //       }}
  //     >
  //       <main>{children}</main>
  //       <footer>
  //         © {new Date().getFullYear()}, Built with
  //         {` `}
  //         <a href="https://www.gatsbyjs.org">Gatsby</a>
  //       </footer>
  //     </div>
  //   </>
  // )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
