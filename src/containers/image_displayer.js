// container that shows the images, need to have access to application state
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import ImageContainer from '../components/image_container';

class ImageDisplayer extends Component {
  constructor(props) {
    super(props);
    this.renderOneRow = this.renderOneRow.bind(this);
    this.renderOneImage = this.renderOneImage.bind(this);
  }

  render() {
    return <div>{_.chunk(this.props.images, 4).map(this.renderOneRow)}</div>;
  }

  renderOneRow(row, rowNum, array) {
    return (
      <div className="row" key={rowNum % array.length}>
        {row.map(this.renderOneImage)}
      </div>
    );
  }

  renderOneImage(image, index) {
    return (
      <div className="col-md-3" key={index}>
        <ImageContainer imgUrl={image.media.m} title={image.title} />
      </div>
    );
  }
}

function mapStateToProps({ images }) {
  // connect reducer to container
  // same as: return { weather : weather };
  return { images };
}

export default connect(mapStateToProps)(ImageDisplayer);
