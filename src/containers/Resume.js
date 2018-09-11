import React from 'react'
import { Document, Page } from 'react-pdf'

class Resume extends React.Component {
  render(){
    return (
      <div>
        <h1>Technical Experience</h1>
        <h3>Languages</h3>
        <ul>
          <li>Ruby</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Redux</li>
          <li>SQL</li>
          <li>Ruby on Rails</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <h1>Work Experience</h1>
        <div>
          <p>Flatiron School</p>
          <p>Mastered Flatiron curriculum in order to effectively work one-on-one with students tackling complex problems, frameworks,
projects, and algorithms</p>
          <p>Gave 1-2 hour long in depth lectures on technical topics in web development and back-end architecture</p>
          <p>Designed and deployed new programs for the Flatiron curriculum</p>
        </div>
        <div>
          // <p>St. Mazie's Bar & Supper Club</p>
          <p>Responsible for the efficient flow of cocktails, craft beer/wine, and meals to bar patrons as well as dining guests, maintained a clean, orderly, and well-stocked working space, and provided a fun, relaxed, and welcoming environment for all guests.</p>
        </div>
        <div>
          <p>Stribling & Associates</p>
          <p>Maintained listings on a real estate website, working with databases, internet archives, and various media to provide technical support and upkeep on several different websites. </p>
        </div>
        <h1>Education</h1>
        <div>
          <p>Flatiron School</p>
          <p>Full Stack Web Development, Ruby on Rails and JavaScript/React immersive in-person program
</p>
        </div>
        <div>
          <p>New York University</p>
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
