import React from 'react'

import FadeIn from 'react-fade-in';

import jToS from '../JuniorToSenior.png'
import advancedReactRedux from '../AdvancedReactRedux.png'
import machineLearning from '../MachineLearning.png'
import nodeJS from '../NodeJSCourse.png'

import Course from '../components/Course'
import mobileProps from '../mobileHOCs/mobileProps'


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
    },
    {
      title: "Learn and Understand NodeJS",
      image: nodeJS,
      url: "https://www.udemy.com/understand-nodejs/"
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
    if(this.props.isMobile){
      return (
        <FadeIn transitionDuration="600">
          <div className="centered">
            <h2 id="completeToggled" className="projectTitle">Completed Udemy Courses</h2>
              <FadeIn>
                <div>
                {this.renderCourses(this.completedCourses)}
                </div>
              </FadeIn>
            <h2 id="progressToggled" className="projectTitle">In Progress</h2>
              <FadeIn>
                <div>
                {this.renderCourses(this.inProgressCourses)}
                </div>
              </FadeIn>
          </div>
        </FadeIn>
      )
    } else {
      return (
        <FadeIn transitionDuration="600">
          <div className="centered">
            <h2 onClick={this.handleClick} id="completeToggled" className="projectTitle">Completed Udemy Courses</h2>
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

}

export default mobileProps(Learning)
