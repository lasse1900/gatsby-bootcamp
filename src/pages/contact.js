import React from "react"
import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Contact"/>
        <h1>Contact Page</h1>
        <p>You can contact me through LinkenIn or Twitter</p>
        <p>Mail to me<a href="https://www.linkedin.com/in/laurikyttala/" target="_blank" rel="noopener noreferrer">@laurikyt</a> on LinkeIn</p>
        <p>Want to tweet to me <a href="https://twitter.com/laurikyt" target="_blank" rel="noopener noreferrer">@laurikyt</a> on Twitter</p>
      </Layout>
    </div>
  )
}

export default ContactPage
