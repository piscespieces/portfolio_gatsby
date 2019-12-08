import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => (
   <>
      <Layout>
         <h1>This is the AboutPage</h1>
         <h2>Bio</h2>
         <p>I was born in Venezuela, and now I'm pursuing a career in Tech</p>
         <Link to="/contact">Contact me</Link>
      </Layout>
   </>
)

export default AboutPage