import React from "react"
import Layout from '../components/layout'
import Head from '../components/head'
import headerStyles from '../components/header.module.scss'

const ProjectPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Projects" />
        <h1>Project Page</h1>
        <p>Here are some links to my works.</p>
        <ol>
          <li className={headerStyles.navList}>
            <a href="https://lutpub.lut.fi/handle/10024/72533" target="_blank" rel="noopener noreferrer">Thesis</a>
          </li>
          <li className={headerStyles.navList}>
            <a href="https://github.com/Lasseboy59" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
          <li className={headerStyles.navList}>
            <a href="https://dance-calendar-test.herokuapp.com/" target="_blank" rel="noopener noreferrer">Dance Calendar App</a>
          </li>
          <li className={headerStyles.navList}>
            <a href="http://laurishostingpackage-com.stackstaging.com/content/10-API_a/" target="_blank" rel="noopener noreferrer">Weather App</a>
          </li>
          <li className={headerStyles.navList}>
            <a href="http://laurishostingpackage-com.stackstaging.com/content/10-API_b/" target="_blank" rel="noopener noreferrer">PostCode Finder</a>
          </li>
          <li className={headerStyles.navList}>
            <a href="http://contactmemo.apphb.com/" target="_blank" rel="noopener noreferrer">Contact Memo</a>
          </li>
        </ol>
      </Layout>
    </div>
  )
}

export default ProjectPage