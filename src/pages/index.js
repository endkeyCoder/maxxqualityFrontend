import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Apresentation from '../sections/Apresentation';
import Techs from '../sections/Techs';
import Contact from '../sections/Contact';


const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Maxx Quality" />
      <Apresentation />
      <Techs />
      <Contact />
    </Layout>
  )
}

export default IndexPage
