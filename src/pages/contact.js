import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'
import contactStyles from './contact.module.scss'

const ContactPage = () => (
   <>
      <Layout>
         <Head helmetTitle='Contact' />
         <main className={contactStyles.main}></main>
      </Layout>
   </>
)

export default ContactPage