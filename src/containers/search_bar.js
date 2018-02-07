// a search bar for users to input the search terms
// so that they can search for images with specific tags

// also use redux form to submit search terms
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchImages } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchImages(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form
        onSubmit={event => this.onFormSubmit(event)}
        className="input-group"
      >
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event)}
          className="form-control"
          placeholder="Type some tags that interest you"
        />
        <span className="input-group-btn">
          <button className="btn btn-secondary" type="submit">
            Search
          </button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  // this gets the action creator whenever gets called returns an action
  return bindActionCreators({ fetchImages }, dispatch);
}

// first params is state map function (null here)
export default connect(null, mapDispatchToProps)(SearchBar);
