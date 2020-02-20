import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import photo from '../pics/Lauri.jpg'

const BlogPage = () => {
  return (
    <div>
      <Layout>
        <Head title="About" />
        <h1>About Page</h1>
        <p>I'm a software developer looking for permanent ot parttime job.</p>
        <p>I'm living at Vantaa and I have a car in case needed.</p>
        <p>Need a developer? <Link to="/contact" >Contact me</Link></p>
        <img src={photo} width={200} height={300} alt="ownPhoto" />
      </Layout>
    </div>
  )
}

export default BlogPage