import React from 'react'

import imageResizer from '../mobileHOCs/imageResizer'

const Course = (props) => {

  return (
    <div>
      <a href={props.url}>
        <img src={props.image} style={props.style}/>
      </a>
    </div>
  )
}

export default imageResizer(Course, 'course')
