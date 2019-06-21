import React from 'react'

import mobileProps from '../mobileHOCs/mobileProps'

const Course = (props) => {

  return (
    <div>
      <a href={props.url}>
        <img src={props.image} style={props.style}/>
      </a>
    </div>
  )
}

export default mobileProps(Course, 'course')
