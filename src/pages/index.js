import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Head from '../components/head'

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
        <h1>This is the IndexPage</h1>
        <Img fluid={props.data.file.childImageSharp.fluid} />
        <p>I'm Andres, and I was born in Venezuela</p>
      </Layout>
    </>
  )
}

export default IndexPage
