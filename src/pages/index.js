import React from "react"
import Layout from '../components/layout'
import Head from '../components/head'
import { Link } from 'gatsby'
import photo from '../pics/mokkilaituri.jpeg'

const IndexPage = () => {

  return (
    <Layout>
      <Head title="Home" />
      <h1>Hi</h1>
      <h3>I'm Lauri software developer & tester living in Vantaa. Currently I'm lookin for new challengies.</h3>
      <p>If you want to see my projects here's the  <Link to="/projects" ><b>link</b></Link></p>
      <img src={photo} alt="myPhoto" />
    </Layout>
  )
}

export default IndexPage
