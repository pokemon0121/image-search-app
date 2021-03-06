import React, { Component } from 'react';

export default class ImageContainer extends Component {
  render() {
    return (
      <div>
        <img src={this.props.imgUrl} className="img-thumbnail" alt="" />
        <p className="text-center text-truncate">{this.props.title}</p>
      </div>
    );
  }
}
