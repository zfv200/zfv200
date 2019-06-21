import React from 'react'

function mobileProps(WrappedComponent, type){
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
          width: '309px',
          height: '240px'
        }
      } else {
        return {
          width: '309px',
          height: '240px'
        }
      }
    }

    browserStyle = () => {
      if(type==='project'){
        return {
          width: "900px",
          height: "500px"
        }
      } else if (type==='course') {
        return {
          width: "495px",
          height: "169px"
        }
      } else {
        return {}
      }
    }


    render(){
      const { width } = this.state
      const isMobile = width <= 600

      return (
        isMobile ?
        <WrappedComponent {...this.props} isMobile={isMobile} style={this.mobileStyle()}/>
        :
        <WrappedComponent {...this.props} isMobile={isMobile} style={this.browserStyle()}/>
      )
    }
  }

  return baseResizer
}

export default mobileProps
