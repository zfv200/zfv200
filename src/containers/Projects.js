import React from 'react'
import Project from '../components/Project'
import FadeIn from 'react-fade-in';

class Projects extends React.Component{

  state={
    projects: [{
      title: "Dream Collage",
      stack: "React/Redux/Rails Api",
      ghlF: "https://github.com/zfv200/dream-collage-frontend",
      ghlB: "https://github.com/zfv200/dream-rails-api",
      description: "Generate custom collages based on an interpretive analysis of your dream journal.",
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
      line1: "Set up a full rails api back-end with MVC structure and Postgresql Database",
      line2: "Implemented a full user authentication with JWT",
      line3: "Used custom css to style, structure, and animate front-end"
    },
    {
      title: "Squirrel Survive",
      stack: "Javascript/Rails",
      bhlF: "https://github.com/zfv200/GameAppFE",
      ghlB: "https://github.com/mray6288/game-app-backend",
      demo: "",
      description: "Help your squirrel survive the waves of aliens, using only your trusty bazooka!",
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
  }

  renderProjects = () => {
    return this.state.projects.map((project)=>{
      return <Project {...project} />
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
