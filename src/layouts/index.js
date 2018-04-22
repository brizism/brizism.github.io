import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import '../styles/main.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title + ' | Front-end Designer & Developer'}
      meta={[
        { name: 'description', content: 'Front-end designer & developer living in New York. My true passion is the intersection point between design and development, when something flat and static becomes a real, usable thing. I love what I do and I aspire to craft designs and experiences that can help solve problems and communicate both aesthetically and functionally.' },
        { name: 'keywords', content: 'portfolio, front-end designer, front-end web developer, web designer, visual designer, Briseida, Montiel' },
        { name: 'author', content: 'Briseida Montiel'}
      ]}
    />
    <Header/>
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
