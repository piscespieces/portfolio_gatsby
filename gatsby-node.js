/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

// REQUIRED FOR MARKDOWN POSTS
// exports.onCreateNode = ({ node, actions }) => {
//     const { createNode, createNodeField } = actions
//     // Transform the new node here and create a new node or
//     // create a new node field.
//     if (node.internal.type === 'MarkdownRemark') {
//         const slug = path.basename(node.fileAbsolutePath, '.md')

//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug
//         })
//     }
// }

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve('./src/templates/blogTemplate.js')
    const res = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    res.data.allContentfulBlogPost.edges.forEach(edge => {
        createPage({
            path: `/blog/${edge.node.slug}`,
            component: blogPostTemplate,
            context: {
                slug: edge.node.slug
            }
        })
    })
}
