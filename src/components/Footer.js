import React from 'react'

import Resume from '../Z Vary Resume.pdf'

const Footer = () => {

  const links = [
    {
      url: Resume,
      text: "Resume",
      target: "_blank"
    },
    {
      url: "https://www.linkedin.com/in/zach-vary-382663163/",
      text: "LinkedIn"
    },
    {
      url: "https://www.github.com/zfv200",
      text: "GitHub"
    },
    {
      url: "https://medium.com/@zfv200",
      text: "Medium"
    }
  ]

  const renderLinks = () => {
    return links.map((link) => {
      return (
        <React.Fragment>
          <a target="_blank" href={link.url}>{link.text}</a>
          <text className="footer-text">  |  </text>
        </React.Fragment>
      )
    })
  }

  return (
    <div className="footer">
      <text className="footer-text">Zach Vary 2018  |  </text>
      {renderLinks()}
    </div>
  )
}

export default Footer

// <a href="https://www.linkedin.com/in/zach-vary-382663163/">LinkedIn</a>
// <text className="footer-text">  |  </text>
// <a href="www.github.com/zfv200">GitHub</a>
// <text className="footer-text">  |  </text>
// <a href="https://medium.com/@zfv200">Medium</a>
