import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PLComponent = styled.li`
  display: inline-block;
  float: left;
  margin-left: ${props => (props.index === 0 ? '0px' : '10px')};
  height: 100%;
  width: auto;
`;

const ClickablePhoto = styled.button`
  position: relative;
  display: inline-block;
  vertical-align: bottom;
  opacity: ${props => (props.indexOfDisplayedPhoto === props.index ? '1' : '0.5')};
  cursor: default;
  overflow: hidden;
  background: transparent;
  border-width: 0px;
  margin: 0px;
  padding: 0px;
  cursor: pointer;
`;

const MiniPhoto = styled.img`
  width: 100px;
  height: 67px;
`;

const PhotoListComponent = ({ photo, index, indexOfDisplayedPhoto }) => (
  <PLComponent index={index}>
    <ClickablePhoto indexOfDisplayedPhoto={indexOfDisplayedPhoto} index={index}>
      <MiniPhoto src={photo.photo_url} />
    </ClickablePhoto>
  </PLComponent>
);

PhotoListComponent.propTypes = {
  photo: PropTypes.instanceOf(Object).isRequired,
  index: PropTypes.number.isRequired,
  indexOfDisplayedPhoto: PropTypes.number.isRequired,
};

export default PhotoListComponent;
