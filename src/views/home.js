import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Corporate Infrastructure Assistant</title>
        <meta
          property="og:title"
          content="Corporate Infrastructure Assistant"
        />
      </Helmet>
    </div>
  )
}

export default Home
