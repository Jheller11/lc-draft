import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <Link to="/">Home</Link>
  </Layout>
)

export default NotFoundPage
