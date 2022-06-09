import React from 'react'
import PropTypes from 'prop-types'

export default (WrappedComponent) => {
   
  const hocComponent = ({ ...props }) => <WrappedComponent name="gaurav12345" />

  hocComponent.propTypes = {
  }

  return hocComponent
}
