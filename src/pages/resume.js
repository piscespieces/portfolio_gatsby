import React from 'react'
import { graphql } from 'gatsby'
import Head from '../components/head'
import Layout from '../components/layout'

import resumeStyles from './resume.module.scss'

export const query = graphql`
    query {
        markdownRemark (
        fields: {
            slug: {
            eq: "resume"
            }
        }
        ) {
        frontmatter {
            title
        }
        html
        }
    }
`

const Resume = props => {
    console.log(props)
    return (
        <Layout>
            <Head helmetTitle='Resume' />
            <main className={resumeStyles.main}>
                <div className={resumeStyles.buttonContainer}>
                    <button className={resumeStyles.backButton} type='button'>
                        <a href='/'>
                            Back to About
                        </a>
                    </button>
                </div>

                <div className={resumeStyles.nameResumeHeader}>
                    <h1>Andres Urdaneta</h1>
                </div>

                <div className={resumeStyles.markdownWrapper}>
                    <div
                        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
                        className={resumeStyles.markdown}
                    >
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Resume