import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import ImageDisplayer from '../containers/image_displayer';

// wrap two containers in a component
export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ImageDisplayer />
      </div>
    );
  }
}
