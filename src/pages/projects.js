import React from "react"
import Layout from '../components/layout'
import Head from '../components/head'

const ProjectPage = () => {
  return (
    <div>
      <Layout>
        <Head title="About"/>
        <h1>Project Page</h1>
        <p>Here are some links to my project works.</p>
        <a href="https://dance-calendar-test.herokuapp.com/" target="_blank" rel="noopener noreferrer">
        Helsinki University Fullstack Course project work</a>
      </Layout>
    </div>
  )
}

export default ProjectPage