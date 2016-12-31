import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search-bar';

const API_KEY = 'AIzaSyAa6eCwuRMYNI4VAXLW5qKNAyKL6Di6r_4';
//Create a new component. This component should produce
// some html

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

//Take this component's generated HTML and
// put it in the DOM.

ReactDOM.render(<App />, document.querySelector('.container'));
