import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Head from '../components/head'
import indexStyles from './index.module.scss'

export const query = graphql`
query {
  file (
    relativePath: {eq: "images/UrdanetaAndres.jpg"}
  ) {
    childImageSharp {
      fluid (
        maxWidth: 1000
      ) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const IndexPage = (props) => {
  console.log(props)
  return (
    <>
      <Layout>
        <Head helmetTitle='Home' />
        <div className={indexStyles.container}>
          <div className={indexStyles.content}>
            <div className={indexStyles.imageWrapper}>
              <div className={indexStyles.imageContainer}>
                <Img fluid={props.data.file.childImageSharp.fluid} className={indexStyles.image} />
              </div>
            </div>

            <div className={indexStyles.textWrapper}>
              <h1>
                <span>
                  Nice
                </span>
                <span>
                  to
                </span>
                <span>
                  meet
                </span>
                <span>
                  you
                </span>
              </h1>
              <div className={indexStyles.textContainer}>
                <p>My name is <strong>Andres Urdaneta</strong>. Originally from Venezuela, but based in Miami🌴, FL.
                <br />
                  <br />
                  I’m a creative, ambitious, and passionate Software Developer.
                  I build mobile and web apps using different programming languages like&nbsp;
                  <strong id={indexStyles.javascript}>
                    JavaScript
                  </strong>,&nbsp;
                  <strong id={indexStyles.ruby}>
                    Ruby
                  </strong>...
                  <br />
                  <br />
                  I’m also a&nbsp;
                  <a
                    id={indexStyles.soundcloud}
                    href='https://soundcloud.com/sadhanapisces'
                    target='_blank'
                    rel="noopener noreferrer"
                  >
                    musician
                  </a> with audio engineering skills.&nbsp;
                  <br />
                  <br />
                  <span id={indexStyles.resume}>
                    For more details, check out&nbsp;
                    <strong>
                      <Link to='/resume'>my resume.</Link>
                    </strong>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
