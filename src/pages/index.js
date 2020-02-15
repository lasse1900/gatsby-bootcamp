import React from "react"
import { Link } from "gatsby"
import Footer from './components/footer'
import Header from './components/header'

const IndexPage = () => {
  return (
    <div>
    <Header />
      <h1>Hello</h1>
      <h2>I'm Lauri software developer / job seeker living in Vantaa. </h2>
      <p>Need a developer? <Link to="/contact">Contact me!</Link></p>
      <br />
      <Footer />
    </div>
  )
}

export default IndexPage
