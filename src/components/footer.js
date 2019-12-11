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
            <a href='www.linkedin.com/in/andres-urd' target='_blank'>
               <FaLinkedin />
            </a>
            <a href='https://github.com/piscespieces' target='_blank'>
               <FaGithub />
            </a>
            <a href='https://www.instagram.com/andreseurd/' target='_blank'>
               <FaInstagram />
            </a>
            <a href='https://twitter.com/_andresur'>
               <FaTwitter />
            </a>
            <a href='https://soundcloud.com/sadhanapisces'>
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
