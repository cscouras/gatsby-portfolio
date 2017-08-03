import React from 'react'
import PropTypes from 'prop-types'

const Card = props => {
  return (
    <div className="card">
      <h3 className="card-title"><a href={props.link} target="_blank" rel="noopener noreferrer">{props.title}</a></h3>
      <a href={props.link} target="_blank" rel="noopener noreferrer"><img className="thumbnail" src={props.imgsrc} alt={props.title} /></a>
        <div className="langList">
          {props.languages.map(lang => {
            return (
              <p key={lang}>{lang}</p>
            )
          })}
        </div>
    </div>
)}

Card.propTypes = {
    link: PropTypes.string,
    imgsrc: PropTypes.string,
    title: PropTypes.string,
    languages: PropTypes.array
}

 export default Card
