import React from 'react'

class Clock extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }
  
  componentDidMount() {
    console.log("Did mount.......")
    
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }
  
  componentWillUnmount() {
    
    console.log("Will Unmount.........")
    
    clearInterval(this.timerID)
  }
  
  tick() {
    this.setState({date: new Date()})
  }
  
  render() {
    return <h1>It is {this.state.date.toLocaleString()}</h1>
  }
}

export default Clock