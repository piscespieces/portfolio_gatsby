import React from 'react'
import { FaMailBulk } from 'react-icons/fa';

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
               <h2><span><FaMailBulk /></span> aeum3893@gmail.com</h2>
               <ul>
                  <li><a href="https://linkedin.com/in/andres-urd">LinkedIn</a></li>
                  <li><a href="https://github.com/piscespieces">Github</a></li>
                  <li><a href="https://www.instagram.com/andreseurd/">Instagram</a></li>
               </ul>
            </div>
         </main>
      </Layout>
   </>
)

export default ContactPage