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
          <div className={indexStyles.textContainer}>
            <p>This is me</p>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
