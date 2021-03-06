import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

//Components Called
import SearchBar from './components/search-bar';
import VideoList from "./components/video-list";
import VideoDetail from './components/video-detail';

//My Api key for this project. will be deleted once project is done, so be sure to create a new one from google.
const API_KEY = 'AIzaSyC47ww-CztlMigN76-VoU2cbKW9E1GZvhw';
//Create a new component. This component should produce
// some html



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      //only works when key and value pair are same name.
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       })
    })
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      //only works when key and value pair are same name.
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       })
    })
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => {this.setState({selectedVideo})}}
          videos={this.state.videos} />
      </div>
    );
  }
}

//Take this component's generated HTML and
// put it in the DOM.

ReactDOM.render(<App />, document.querySelector('.container'));
