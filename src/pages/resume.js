import React from 'react'
import Head from '../components/head'
import Layout from '../components/layout'

import resumeStyles from './resume.module.scss'


const Resume = () => {
    return (
        <Layout>
            <Head helmetTitle='Resume' />
            <div className={resumeStyles.container}>
                <div className={resumeStyles.backButton}>
                    <button>Back to About</button>
                </div>
            </div>
        </Layout>
    )
}

export default Resume