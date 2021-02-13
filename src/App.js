import React, {Component} from 'react';

import './App.css';
import Menu from './Menu/Menu';
import Dog from './Dog/Dog';

class App extends Component {
  state = {
    actionClickedCounter: 0,
    dogs: [
      {
        name: "Bowser",
        age: 7
      },
      {
        name: "Jessie",
        age: 2
      },
      {
        name: "Felix",
        age: 3
      }
    ]
  };

  buttonClickHandler = () => {
    console.log("Action button clicked");
    var tempState = this.state.actionClickedCounter;
    tempState++;
    this.setState(
      {
        actionClickedCounter: tempState
      }
    );
  };

  renderDoggos = () => {
    console.log("render doggos");
    this.state.dogs.forEach(dog => {
      console.log(dog["name"]);
      console.log(dog["age"]);
    })
  };

  render() {
    this.renderDoggos();
    return (
      <div className="App">
       <Menu />
       <h3>hello, React Component world of dogs.</h3>
       <button type="button" className="btn btn-primary" onClick={this.buttonClickHandler}>Action Clicked: {this.state.actionClickedCounter}</button>
       <Dog name="Max" age="6" />
       <Dog name="Kirby" age="8">I am a sweet dog.</Dog>
       <Dog name="Lola" age="6" />
      </div>
    );
  };
};

export default App;
