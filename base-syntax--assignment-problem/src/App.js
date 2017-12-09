import React, {Component} from 'react';
import './App.css';

import UserInput from './components/UserInput'
import UserOutput from './components/UserOutput'
import Clock from './components/Clock'


const people = {
  users: [
    {name: "Jango", lastName: "Cordoba"},
    {name: "Berta", lastName: "Moison"},
    {name: "Huanita", lastName: "Dribbla"},
    {name: "Xamarin", lastName: "Jacobson"}
  ]
}

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = Object.assign({}, people)
  }
  
  // state = Object.assign({}, people)
  
  changeNameHandler = (event) => {
    
    people.users[0].name = event.target.value
    
    this.setState(Object.assign({}, people))
    
    
  }
  
  render() {
    return (
      <div className="App">
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event
          </li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and
            stylesheets
          </li>
        </ol>
        <Clock />
        <br/>
        <UserInput newName={this.changeNameHandler} name={this.state.users[0].lastName}/>
        <br/>
        <div className='userCardsFrame'>
          <UserOutput
            name={this.state.users[0].name}
            lastName={this.state.users[0].lastName}
          />
          <br/>
          <UserOutput name={this.state.users[1].name} lastName={this.state.users[1].lastName}/>
          <br/>
          <UserOutput name={this.state.users[2].name} lastName={this.state.users[2].lastName}/>
          <br/>
          <UserOutput name={this.state.users[3].name} lastName={this.state.users[3].lastName}/>
        </div>
      
      </div>
    );
  }
}

export default App
