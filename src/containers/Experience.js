import React from 'react'
// import { Document, Page } from 'react-pdf'
import FadeIn from 'react-fade-in';
import ResumeTile from '../components/ResumeTile'


class Experience extends React.Component {

  state={
    techToggled: false,
    workToggled: false,
    eduToggled: false,
  }

  info = {
    workComps: [{
      title: "Flatiron School",
      bpoints: ["Mastered Flatiron curriculum in order to effectively work one-on-one with students tackling complex problems, frameworks, projects, and algorithms",
      "Gave 1-2 hour long in depth lectures on technical topics in web development and back-end architecture",
      "Designed and deployed new programs for the Flatiron curriculum"
      ]
    },
    {
      title: "St. Mazie's Bar & Supper Club",
      bpoints: [
        "Responsible for the efficient flow of cocktails, craft beer/wine, and meals to bar patrons as well as dining guests, maintained a clean, orderly, and well-stocked working space, and provided a fun, relaxed, and welcoming environment for all guests"
      ]
    },
    {
      title: "Stribling & Associates",
      bpoints: [
        "Maintained listings on a real estate website, working with databases, internet archives, and various media to provide technical support and upkeep on several different websites"
      ]
    }],
    eduComps: [{
      title: "Flatiron School",
      bpoints: [
        "Full Stack Web Development, Ruby on Rails and JavaScript/React immersive in-person program",
      ]
    },
    {
      title: "New York University",
      bpoints: [
        "Graduated in May 2013, receiving a B.A. in Individualized Study with a focus on Philosophy and create writing",
        "Earned the NYU Founder’s Day Award as a Senior for “outstanding scholarship”",
        "Overall GPA: 3.57/4.0 at the Gallatin School of Individualized Study at NYU"
      ]
    }],
    languages: [
      "Ruby", "Javascript", "React", "Redux", "Ruby on Rails", "TypeScript", "SQL", "HTML", "CSS"
    ]
  }



  renderWork = (type) => {
    return this.info[type].map((entry)=>{
      return <ResumeTile {...entry}/>
    })
  }

  renderLanguages = () => {
    return this.info.languages.map((language)=>{
      return <p>{language}</p>
    })
  }

  handleClick = (event) => {
    let currentState = this.state[event.target.id]
    this.setState({
      techToggled: false,
      workToggled: false,
      eduToggled: false
    })
    this.setState({
      [event.target.id]: !currentState
    })
  }

  render(){
    return (
      <FadeIn transitionDuration="600">
      <div className="centered">
        <h2 onClick={this.handleClick} id="techToggled" className="projectTitle">Technical Experience</h2>
        {this.state.techToggled ?
        <FadeIn>
        <div>
          {this.renderLanguages()}
        </div>
        </FadeIn>
        : null}
        <h2 onClick={this.handleClick} id="workToggled" className="projectTitle">Work Experience</h2>
        {this.state.workToggled ?
          <FadeIn>
            <div>
              {this.renderWork("workComps")}
            </div>
          </FadeIn>
        : null}
      <h2 onClick={this.handleClick} id="eduToggled" className="projectTitle">Education</h2>
        {this.state.eduToggled ?
        <FadeIn>
          <div>
            {this.renderWork("eduComps")}
          </div>
        </FadeIn>
        : null}
      </div>
      </FadeIn>
    )
  }
}

export default Experience
