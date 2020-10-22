import { Helmet } from 'react-helmet'
import React from 'react'

function withHelmet(title) {
  return Component => props => (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet" />
        <title>{title}</title>
      </Helmet>
      <Component {...props} />
    </>
  )
}

export default withHelmet