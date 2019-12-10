import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'



const Head = ({ helmetTitle }) => {
    const data = useStaticQuery(graphql`
        query { 
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <Helmet title={`${helmetTitle} | ${data.site.siteMetadata.title}`} />
    )
}

export default Head