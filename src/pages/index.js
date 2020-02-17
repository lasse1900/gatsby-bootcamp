import React from "react"
import Layout from '../components/layout'
import Head from '../components/head'
import { Link } from 'gatsby'

const IndexPage = () => {

  return (
    <Layout>
      <Head title="Home"/>
      <h1>Hi</h1>
      <h2>I'm Lauri software developer / job seeker living in Vantaa. </h2>
      <p>If you want to see my projects here's the  <Link to="/projects" ><b>link</b></Link></p>
    </Layout>
  )
}

export default IndexPage
