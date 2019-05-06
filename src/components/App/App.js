import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'

class App extends Component {

  state = {
    imageList : []
  }

  componentDidMount() {
    this.getImages();
  }

  getImages = () => {
    axios.get('/gallery')
    .then(response => {
      console.log(response.data);
      this.setState({
        imageList : response.data
      })
    }).catch((error) => {
      console.log('Error in getImage', error);
    })
  }

  clickLike = (likeId) => {
    axios.put(`/gallery/like/${likeId}`)
    .then(response => {
      this.getImages();
    }).catch((error) => {
      console.log('Error in clickLike', error);
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> My Gallery </h1>
        </header>
        <br/>
        {/*<pre>{JSON.stringify(this.state.imageList)}</pre>*/}
        
        <GalleryList clickLike = {this.clickLike} images = {this.state.imageList}/>
      </div>
    );
  }
}

export default App;