import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => (
   <>
      <Layout>
         <Head helmetTitle='Contact' />
         <h1>This is the ContactPage</h1>
         <p>Contact me on Twitter&nbsp;
         <a href="https://twitter.com/_andresur" target="_blank">@_andresur</a>
         </p>
      </Layout>
   </>
)

export default ContactPage