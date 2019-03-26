import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <Link to="/contact">Contact</Link>
    <Link to="/services">Services</Link>
  </Layout>
)

export default IndexPage
