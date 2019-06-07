import React from 'react'
import Project from '../components/Project'
import FadeIn from 'react-fade-in';

class Projects extends React.Component{

  state={
    toggled: false,
    collapsed: true
  }

  projects = [{
    title: "Ghostly Realty",
    stack: "React/Redux/TypeScript/Rails Api",
    bhlF: "https://github.com/zfv200/ghostlyrealty-frontend",
    ghlB: "https://github.com/zfv200/ghostlyrealty-backend",
    description: "The finest real estate app for spirits and spectres, allowing ghosts to find a new house to haunt since 2019!",
    demo: '',
    line1: "React/Redux Front End with Typescript, Auth/Sessions with JWT, advanced React features, and Jest/Enzyme tests",
    line2: "Implemented AWS S3 for cloud storage with an integrated custom IBM Watson Visual Recognition machine learning model",
    line3: "Personal Project used as a learning tool for TS, React updates, testing, docker/containers, security practices, and AWS"
  },
  {
    title: "Dream Collage",
    stack: "React/Redux/Rails Api",
    bhlF: "https://github.com/zfv200/dream-collage-frontend",
    ghlB: "https://github.com/zfv200/dream-rails-api",
    description: "This diy photo editor intelligently analyzes and visualizes entries in your dream journal with interactive collages",
    demo: '',
    line1: "Created a front-end single-page user interface with React, Redux, and Javascript",
    line2: "Implemented a number of node libraries and third-party APIs to create an interactive user experience",
    line3: "Persisted data with a customized Rails API back-end"
  },
  {
    title: "Hoppington Village",
    stack: "React/Rails API",
    bhlF: "https://github.com/melnock/mod-4-final-project-hoppington-village",
    ghlB: '',
    demo: "https://www.youtube.com/watch?v=NOLy9hjBR6U&feature=youtu.be",
    description: "Take care of your very own pet rabbit who needs rest, food, and new outfits!",
    line1: "Set up a full rails api back-end with MVC structure and a relational database",
    line2: "Implemented a full user authentication/authorization protocol with JWT",
    line3: "Used custom css to style, structure, and animate a front-end single-page React interface"
  },
  {
    title: "Squirrel Survive",
    stack: "Javascript/Rails",
    bhlF: "https://github.com/zfv200/GameAppFE",
    ghlB: "https://github.com/mray6288/game-app-backend",
    demo: "",
    description: "A lone squirrel and his trusty bazooka must survive waves of attacking aliens using a range of strategies",
    line1: "Used object-oriented vanilla JS to create a single-page game application",
    line2: "Manipulated the DOM dynamically with JavaScript’s native methods",
    line3: "Used asynchronous fetch requests to populate and persist user data"
  },
  {
    title: "Party With Flatiron",
    stack: "Ruby on Rails",
    bhlF: "https://github.com/zfv200/PartyWithFlatiron",
    ghlB: "",
    demo: "",
    description: "Create, attend, and find new events hosted by friends!",
    line1: "Used ruby on rails to create a fully CRUD-capable front-end app ",
    line2: "Incorporated SQLite database to persist user data",
    line3: "Used algorithms to develop custom views for unique users"
  }]

  renderProjects = () => {
    return this.projects.map((project)=>{
      return <Project triggerUpdate={this.triggerUpdate} toggled={this.state.toggled} collapsed={this.state.collapsed} {...project} />
    })
  }

  triggerUpdate = () => {
    let currentCollapsed = this.state.collapsed
    this.setState({
      collapsed: !currentCollapsed
    })
  }

  render(){
    return (
      <FadeIn transitionDuration="600">
        {this.renderProjects()}
      </FadeIn>
    )
  }
}

export default Projects
