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
                    <div>
                        <Card />
                    </div>

                    <div>
                        <h1>Project container 2</h1>
                    </div>

                    <div>
                        <h1>Project container 3</h1>
                    </div>
                </div>
            </main>
        </Layout>
    </>
)

export default ProjectsPage