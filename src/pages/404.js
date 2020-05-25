import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Não Encontrado" />
    <h1>Não encontrado</h1>
    <p>A página que procura não existe, por favor acesse <a href="https://www.maxxquality.com.br">www.maxxquality.com.br</a></p>
  </Layout>
)

export default NotFoundPage
