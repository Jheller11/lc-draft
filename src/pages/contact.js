import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <h3>Contact</h3>
    <Link to="/">Home</Link>
  </Layout>
)

export default Contact
