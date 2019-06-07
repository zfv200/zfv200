import React from 'react'

import FadeIn from 'react-fade-in';

import jToS from '../JuniorToSenior.png'
import advancedReactRedux from '../AdvancedReactRedux.png'
import machineLearning from '../MachineLearning.png'

import Course from '../components/Course'


class Learning extends React.Component {

  state={
    completeToggled: false,
    progressToggled: false
  }

  completedCourses = [
    {
      title: "The Complete Junior to Senior Web Developer Roadmap (2019)",
      image: jToS,
      url: "https://www.udemy.com/course/the-complete-junior-to-senior-web-developer-roadmap/"
    },
    {
      title: "Advanced React and Redux",
      image: advancedReactRedux,
      url: "https://www.udemy.com/course/react-redux-tutorial/"
    }
  ]

  inProgressCourses = [
    {
      title: "Machine Learning with Javascript",
      image: machineLearning,
      url: "https://www.udemy.com/machine-learning-with-javascript/"
    }
  ]

  handleClick = (event) => {
    let currentState = this.state[event.target.id]
    this.setState({
      completeToggled: false,
      progressToggled: false
    })
    this.setState({
      [event.target.id]: !currentState
    })
  }

  renderCourses = (courseType) =>{
    return courseType.map((course)=>{
      return <Course {...course}/>
    })
  }

  render(){
    return (
      <FadeIn transitionDuration="600">
        <div className="centered">
        <h2 onClick={this.handleClick} id="completeToggled" className="projectTitle">Completed Courses</h2>
          {this.state.completeToggled ?
          <FadeIn>
          <div>
            {this.renderCourses(this.completedCourses)}
          </div>
          </FadeIn>
          : null}
        <h2 onClick={this.handleClick} id="progressToggled" className="projectTitle">In Progress</h2>
          {this.state.progressToggled ?
          <FadeIn>
          <div>
            {this.renderCourses(this.inProgressCourses)}
          </div>
          </FadeIn>
          : null}
        </div>
      </FadeIn>
    )
  }

}

export default Learning