import React from 'react'

const ResumeTile = (props) => {

  const renderPoints = () => {
    return props.bpoints.map((point)=>{
      return <li>{point}</li>
    })
  }

  return(
    <div className="resume-tile">
      <p className="stack">{props.title}</p>
      {renderPoints()}
    </div>
  )
}

export default ResumeTile


// <div className="resume-tile">
//   <p className="stack">Flatiron School</p>
//   <li>Mastered Flatiron curriculum in order to effectively work one-on-one with students tackling complex problems, frameworks,
// projects, and algorithms</li>
//   <li>Gave 1-2 hour long in depth lectures on technical topics in web development and back-end architecture</li>
//   <li>Designed and deployed new programs for the Flatiron curriculum</li>
// </div>
