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
                        <a href="https://piscespieces.github.io/lonely_chatroom/">
                            <Card className={projectStyles.card1} />
                        </a>
                    </div>

                    <div className={projectStyles.cardWrapper}>
                        <a href="https://wyn-shipship.herokuapp.com/">
                            <Card className={projectStyles.card2} />
                        </a>
                    </div>
                </div>
            </main>
        </Layout>
    </>
)

export default ProjectsPage