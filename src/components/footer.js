import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss'
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaSoundcloud } from 'react-icons/fa';

const Footer = () => {
   const data = useStaticQuery(graphql`
      query {
         site {
            siteMetadata {
               author
            }
         }
      }
   `)

   return (
      <footer className={footerStyles.footer}>
         <div className={footerStyles.contactIconsWrapper}>
            <a href='https://linkedin.com/in/andres-urd'
               target='_blank'
               rel="noopener noreferrer"
            >
               <FaLinkedin />
            </a>
            <a
               href='https://github.com/piscespieces'
               target='_blank'
               rel="noopener noreferrer"
            >
               <FaGithub />
            </a>
            <a
               href='https://www.instagram.com/andreseurd/'
               target='_blank'
               rel="noopener noreferrer"
            >
               <FaInstagram />
            </a>
            <a
               href='https://twitter.com/_andresur'
               rel="noopener noreferrer"
            >
               <FaTwitter />
            </a>
            <a
               href='https://soundcloud.com/sadhanapisces'
               rel="noopener noreferrer"
            >
               <FaSoundcloud />
            </a>
         </div>
         <div className={footerStyles.design}>
            <p>Designed by {data.site.siteMetadata.author} © 2019</p>
         </div>
      </footer>
   )
}

export default Footer
