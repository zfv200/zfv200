import React from 'react'

function imageResizer(WrappedComponent, type){
  class baseResizer extends React.Component{

    state={
      width: window.innerWidth
    }

    componentWillMount(){
      window.addEventListener('resize', this.handleWindowSizeChange)
    }

    componentWillUnmount(){
      window.removeEventListener('resize', this.handleWindowSizeChange)
    }

    handleWindowSizeChange = () => {
      this.setState({
        width: window.innerWidth
      })
    }

    mobileStyle = () => {
      if(type==='project'){
        return {
          width: '425px',
          height: '260px'
        }
      } else {
        return {
          width: '425px',
          height: '260px'
        }
      }
    }

    browserStyle = () => {
      if(type==='project'){
        return {
          width: "900px",
          height: "500px"
        }
      } else {
        return {
          width: "495px",
          height: "169px"
        }
      }
    }


    render(){
      const { width } = this.state
      const isMobile = width <= 600

      return (
        isMobile ?
        <WrappedComponent {...this.props} style={this.mobileStyle()}/>
        :
        <WrappedComponent {...this.props} style={this.browserStyle()}/>
      )
    }
  }

  return baseResizer
}

export default imageResizer
