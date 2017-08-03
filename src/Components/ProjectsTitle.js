import React from 'react'
import PropTypes from 'prop-types'

const ProjectsTitle = ({title}) =>
      <h3 className="projectsTitle"><span>{title}</span></h3>


ProjectsTitle.propTypes = {
  title: PropTypes.array
}

export default ProjectsTitle
