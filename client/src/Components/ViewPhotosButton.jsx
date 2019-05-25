import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  position: absolute;
  margin: 29% 0% 0% 89%;
  border-radius: 4px;
  background-color: white;
  color: #484848;
  height: 32px;
  width: 112px;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  font-family: Roboto, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
`;

class ViewPhotosButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { viewPhotosButtonClicked: false };

    this.onViewPhotosButtonClick = this.onViewPhotosButtonClick.bind(this);
  }

  onViewPhotosButtonClick(event) {
    event.preventDefault();
    const { showPhotoSlideshow } = this.props;
    showPhotoSlideshow(true);
  }

  render() {
    const { viewPhotosButtonClicked } = this.state;

    return (
      <StyledButton
        type="button"
        viewPhotosButtonClicked={viewPhotosButtonClicked}
        onClick={this.onViewPhotosButtonClick}
      >
        <StyledDiv>View Photos</StyledDiv>
      </StyledButton>
    );
  }
}

ViewPhotosButton.propTypes = {
  showPhotoSlideshow: PropTypes.func.isRequired,
};

export default ViewPhotosButton;
