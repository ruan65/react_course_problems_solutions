import React, {Component} from 'react'

class UserInput extends Component {

  render() {
    
    const style = {
      border: '1px solid blue',
      width: '350px',
      padding: '100px'
    }
    
    return (
      <div style={style}>
        <input type='text' onChange={this.props.newName} defaultValue={this.props.name}/>
      </div>
    )
  }
}

export default UserInput