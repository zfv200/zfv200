import React from 'react'
import { Document, Page } from 'react-pdf'

class Resume extends React.Component {
  render(){
    return (
      <div className="centered">
        <h2>Technical Experience</h2>
        <h3 className="stack">Languages</h3>
            <p>Ruby</p>
            <p>Javascript</p>
            <p>React</p>
            <p>Redux</p>
            <p>SQL</p>
            <p>Ruby on Rails</p>
            <p>HTML</p>
            <p>CSS</p>
        <h2>Work Experience</h2>
        <div className="resume-tile">
          <p className="stack">Flatiron School</p>
          <p>Mastered Flatiron curriculum in order to effectively work one-on-one with students tackling complex problems, frameworks,
projects, and algorithms</p>
          <p>Gave 1-2 hour long in depth lectures on technical topics in web development and back-end architecture</p>
          <p>Designed and deployed new programs for the Flatiron curriculum</p>
        </div>
        <div className="resume-tile">
          <p>St. Mazie's Bar & Supper Club</p>
          <p>Responsible for the efficient flow of cocktails, craft beer/wine, and meals to bar patrons as well as dining guests, maintained a clean, orderly, and well-stocked working space, and provided a fun, relaxed, and welcoming environment for all guests.</p>
        </div>
        <div className="resume-tile">
          <p className="stack">Stribling & Associates</p>
          <p>Maintained listings on a real estate website, working with databases, internet archives, and various media to provide technical support and upkeep on several different websites. </p>
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
