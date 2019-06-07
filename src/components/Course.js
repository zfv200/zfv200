import React from 'react'

const Course = (props) => {

  return (
    <div>
      <a href={props.url}>
        <img src={props.image} className="coursePic"/>
      </a>
    </div>
  )
}

export default Course
