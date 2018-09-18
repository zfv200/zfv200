import React from 'react'
import FadeIn from 'react-fade-in';

class About extends React.Component{

  summary = () => {
    return (
      <p>Dedicated Full Stack Web Developer with a commitment to collaborative learning, education, development and production.
Integrating experience in Javascript, React, Ruby/Rails with a background in philosophy, I am happiest when working with a
team of driven and creative developers committed to reaching new heights with software and web
technology.</p>
    )
  }

  render(){
    return(
      <FadeIn>
        <div className="summary">
          {this.summary()}
        </div>
      </FadeIn>
    )
  }
}

export default About
