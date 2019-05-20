import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPhoto = styled.div`
  grid-column-start: ${(props) => {
    if (props.index === 0) {
      return '1';
    }
    if (props.index === 1 || props.index === 3) {
      return '2';
    }
    return '3';
  }};
  grid-column-end: ${(props) => {
    if (props.index === 0) {
      return '2';
    }
    if (props.index === 1 || props.index === 3) {
      return '3';
    }
    return '4';
  }};
  grid-row-start: ${(props) => {
    if (props.index <= 2) {
      return '1';
    }
    return '2';
  }};
  grid-row-end:${(props) => {
    if (props.index === 0 || props.index === 3 || props.index === 4) {
      return '3';
    }
    return '2';
  }};
  border: 1px solid #484848;
`;

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
`;

class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { photo, index } = this.props;
    return (
      <StyledPhoto index={index}>
        <StyledImage src={photo.photo_url} alt="home interior" index={index} />
      </StyledPhoto>
    );
  }
}

Photo.propTypes = {
  photo: PropTypes.shape({ photo_url: '' }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Photo;

// const url = `https://s3-us-west-1.amazonaws.com/fec-carebnb/${photo.photo_url}`;
// The above url will replace the direct url once deployed
// This is commented for development to reduce num of get requests to AWS
