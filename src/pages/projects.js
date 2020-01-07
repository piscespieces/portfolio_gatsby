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
                        <a
                            href="https://wyn-shipship.herokuapp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Card className={projectStyles.card1} />
                        </a>
                        <div className={projectStyles.desc}>
                            <h2>Ship Ship</h2>
                            Site displays understandment of REST from the EasyPost API and demonstrate a solid foundation of Rails database of user information.
                            <br />
                            <em>Programmed/design by Andres Urdaneta, Eric Oyanadel and Brendan Guralsky © 2019</em>
                        </div>
                    </div>

                    <div className={projectStyles.cardWrapper}>
                        <a
                            href="https://piscespieces.github.io/lonely_chatroom/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Card className={projectStyles.card2} />
                        </a>
                        <div className={projectStyles.desc}>
                            <h2>Lonely Chatroom</h2>
                            Vanilla JavaScript App that fetches from the Chuck Norris API and through the user interface the user can get random jokes by Chuck Norris
                            <br />
                            <em>Programmed/design by Andres Urdaneta © 2019</em>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    </>
)

export default ProjectsPage