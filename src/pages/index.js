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
            <p>My name is <strong>Andres Urdaneta</strong>. Originaly from Venezuela, but based in Miami🌴, FL.
            <br />
              <br />
              I’m a creative, ambitious, and passionate Software Developer at&nbsp;
              <a
                id={indexStyles.carecloud}
                href='https://www.carecloud.com'
                target='_blank'
              >
                CareCloud
              </a>.
              I build apps using&nbsp;
              <strong id={indexStyles.react}>
                React
              </strong>,&nbsp;
              <strong id={indexStyles.node}>
                Node
              </strong>,&nbsp;
              <strong id={indexStyles.ruby}>
                Ruby On Rails
              </strong>,&nbsp;
              <strong id={indexStyles.graphql}>
                GraphQL
              </strong>,&nbsp;
              <strong id={indexStyles.mongo}>
                MongoDB
              </strong>,&nbsp;
              <strong id={indexStyles.postgresql}>
                PostgreSQL
              </strong>.
              <br />
              <br />
              I’m also a&nbsp;
              <a
                id={indexStyles.soundcloud}
                href='https://soundcloud.com/sadhanapisces'
                target='_blank'
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
      </Layout>
    </>
  )
}

export default IndexPage
