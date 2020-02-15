import React from "react"
import Footer from './components/footer'
import Header from './components/header'

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact Page</h1>
      <p>You can contact me through LinkenIn or Twitter</p>
      <p>Mail to me<a href="https://www.linkedin.com/in/laurikyttala/" target="_blank" rel="noopener noreferrer">@laurikyt</a> LinkeIn</p>
      <p>Want to tweet to me <a href="https://twitter.com/laurikyt" target="_blank" rel="noopener noreferrer">@laurikyt</a> on Twitter</p>
      <br></br>
      <Footer />
    </div>
  )
}

export default ContactPage
