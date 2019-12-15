import React from 'react'
import Head from '../components/head'
import Layout from '../components/layout'

import resumeStyles from './resume.module.scss'


const Resume = () => {
    return (
        <Layout>
            <Head helmetTitle='Resume' />
            <div className={resumeStyles.container}>
                <h1>This is the resume</h1>
            </div>
        </Layout>
    )
}

export default Resume