import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

//Components Called
import SearchBar from './components/search-bar';
import VideoList from "./components/video-list"

//My Api key for this project. will be deleted once project is done, so be sure to create a new one from google.
const API_KEY = 'AIzaSyAa6eCwuRMYNI4VAXLW5qKNAyKL6Di6r_4';
//Create a new component. This component should produce
// some html



class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      //only works when key and value pair are same name.
      this.setState({ videos })
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

//Take this component's generated HTML and
// put it in the DOM.

ReactDOM.render(<App />, document.querySelector('.container'));
