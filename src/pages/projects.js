import React from 'react'
import Card from '../components/card'

import Layout from '../components/layout'
import Head from '../components/head'
import projectStyles from './projects.module.scss'

const ProjectsPage = () => (
    <>
        <Layout>
            <Head helmetTitle='Contact' />
            <main className={projectStyles.main}>
                <div className={projectStyles.projectWrapper}>
                    <div className={projectStyles.cardWrapper}>
                        <Card className={projectStyles.card1} />
                    </div>

                    <div className={projectStyles.cardWrapper}>
                        <Card className={projectStyles.card2} />
                    </div>
                </div>
            </main>
        </Layout>
    </>
)

export default ProjectsPage