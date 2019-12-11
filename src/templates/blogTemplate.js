import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import Head from '../components/head'

// export const query = graphql`
//     query (
//         $slug: String!
//     ) {
//         markdownRemark (
//         fields: {
//             slug: {
//             eq: $slug
//             }
//         }
//         ) {
//         frontmatter {
//             title
//             date
//         }
//         html
//         }
//     }
// `

export const query = graphql`
    query ($slug: String) {
        contentfulBlogPost (slug: { eq: $slug }) {
            title
            publishedDate (fromNow: true)
            body {
                json
            }
            topImage { 
                resize (width: 2000, height: 550) {
                    src
                }
            }
        }
    }
`

const Blog = props => {
    return (
        <Layout>
            <Head helmetTitle={props.data.contentfulBlogPost.title} />
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            <img
                src={props.data.contentfulBlogPost.topImage.resize.src}
                alt={props.data.contentfulBlogPost.title}
            />
            {documentToReactComponents(props.data.contentfulBlogPost.body.json)}
            {/* <div dangerouslySetInnerHTML={{ __html: props.data.contentfulBlogPost.html }}></div> */}
        </Layout>
    )
}

export default Blog