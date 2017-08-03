import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

import './flexstyles.css'

const TemplateWrapper = ({
  children
}) => (
    <div>
      <Helmet
        title="Chris Scouras - Front End Web Developer"
        meta={[
          { name: 'description', content: 'Chris Scouras\'s Front End Web Portfolio' },
          { name: 'keywords', content: 'portfolio, web development, front end' },
        ]}
      />
    <main className="site">
      <Header />
      <div className="wrapper-content"
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        {children()}
      </div>
      <Footer />
      </main>
    </div>
  )

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
