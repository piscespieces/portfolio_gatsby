import React from "react"
import { Link } from "gatsby"

import Layout from '../components/layout'
import Head from '../components/head'

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <Layout>
      <Head helmetTitle='Home' />
      <h1>This is the IndexPage</h1>
      <p>I'm Andres, and I was born in Venezuela</p>
      <Link to="/contact">Contact Me</Link>
    </Layout>
  </>
)

export default IndexPage
