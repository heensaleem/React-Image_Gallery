import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
     images : []
  }
   // Wait for the first render
  // Then do things, like call a server
   componentDidMount() {
     this.getImages();
   }

  getImages = () => {
    axios.get('/gallery')
    .then(response => {
      console.log(response.data)
       // Save this in state
      // Not spreading, because we want to replace all of tvShowList
      this.setState({
        images: response.data
      })
    }).catch(err => {
      console.log(err);
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <pre>{JSON.stringify(this.state.images)}</pre>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
  }
}

export default App;
