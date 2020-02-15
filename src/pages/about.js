import React from "react"
import { Link } from 'gatsby'
import Footer from './components/footer'

const BlogPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>I'm a software developer looking for permanent ot parttime job.</p>
      <p>I'm living at Vantaa and I have a car in case needed.</p>
      <p>Need a developer? <Link to="/contact" >Contact me</Link></p>
      <br />
      <Footer />
    </div>
  )
}

export default BlogPage