import React from 'react'
import Head from '../components/head'
import Layout from '../components/layout'

import resumeStyles from './resume.module.scss'


const Resume = () => {
    return (
        <Layout>
            <Head helmetTitle='Resume' />
            <main className={resumeStyles.main}>
                <div className={resumeStyles.pageWrapper}>
                    <button type='button'>
                        <a href='/resume'>
                            Back to About
                        </a>
                    </button>
                </div>

                <div>
                    <h1>Andres Urdaneta</h1>
                </div>

                <div className={resumeStyles.markdownWrapper}>

                </div>
            </main>
        </Layout>
    )
}

export default Resume