import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'
import contactStyles from './contact.module.scss'

const ContactPage = () => (
   <>
      <Layout>
         <Head helmetTitle='Contact' />
         <main className={contactStyles.main}>
            <div className={contactStyles.contactWrapper}>
               <h1>I would love to hear from you</h1>
            </div>
         </main>
      </Layout>
   </>
)

export default ContactPage