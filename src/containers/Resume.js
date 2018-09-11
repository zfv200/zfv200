import React from 'react'
// import { Document, Page } from 'react-pdf'
import FadeIn from 'react-fade-in';


class Resume extends React.Component {

  state={
    techToggled: false,
    workToggled: false
  }

  handleClick = (event) => {
    let currentState = this.state[event.target.id]
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
          <h3 className="stack">Languages</h3>
            <p>Ruby</p>
            <p>Javascript</p>
            <p>React</p>
            <p>Redux</p>
            <p>SQL</p>
            <p>Ruby on Rails</p>
            <p>HTML</p>
            <p>CSS</p>
        </div>
        </FadeIn>
        : null}
        <h2 onClick={this.handleClick} id="workToggled" className="projectTitle">Work Experience</h2>
        {this.state.workToggled ?
        <FadeIn>
        <div>
        <div className="resume-tile">
          <p className="stack">Flatiron School</p>
          <li>Mastered Flatiron curriculum in order to effectively work one-on-one with students tackling complex problems, frameworks,
projects, and algorithms</li>
          <li>Gave 1-2 hour long in depth lectures on technical topics in web development and back-end architecture</li>
          <li>Designed and deployed new programs for the Flatiron curriculum</li>
        </div>
        <div className="resume-tile">
          <p className="stack">St. Mazie's Bar & Supper Club</p>
          <li>Responsible for the efficient flow of cocktails, craft beer/wine, and meals to bar patrons as well as dining guests, maintained a clean, orderly, and well-stocked working space, and provided a fun, relaxed, and welcoming environment for all guests.</li>
        </div>
        <div className="resume-tile">
          <p className="stack">Stribling & Associates</p>
          <li>Maintained listings on a real estate website, working with databases, internet archives, and various media to provide technical support and upkeep on several different websites. </li>
        </div>
        <h2>Education</h2>
        <div className="resume-tile">
          <p className="stack">Flatiron School</p>
          <p>Full Stack Web Development, Ruby on Rails and JavaScript/React immersive in-person program
</p>
        </div>
        <div className="resume-tile">
          <p className="stack">New York University</p>
          <p>Graduated in May 2013, receiving a B.A. in Individualized Study with a focus on Philosophy and create writing</p>
          <p>Earned the NYU Founder’s Day Award as a Senior for “outstanding scholarship”</p>
          <p>Overall GPA: 3.57/4.0 at the Gallatin School of Individualized Study at NYU
</p>
        </div>
      </div>
      </FadeIn>
      : null}
      </div>
      </FadeIn>
    )
  }
}

export default Resume

// class Resume extends React.Component {
//   state = {
//     pageNumber: 1,
//   }
//
//   render() {
//     const { pageNumber } = this.state;
//
//     return (
//       <div className="resume">
//         <Document file="ZVaryResume.pdf">
//           <Page pageNumber={pageNumber} />
//         </Document>
//       </div>
//     );
//   }
// }

// export default Resume
