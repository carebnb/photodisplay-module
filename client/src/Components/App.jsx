import React from 'react';
import axios from 'axios';
import { StyledContainer } from '../Styles/style';
import PhotosContainer from './PhotosContainer';
import SaveButton from './SaveButton';
import ShareButton from './ShareButton';
import ViewPhotosButton from './ViewPhotosButton';
import ShareModal from './ShareModal';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { photos: [], isContainerHovered: false, shareModalIsVisible: false };

    this.onContainerMouseOver = this.onContainerMouseOver.bind(this);
    this.onContainerMouseOut = this.onContainerMouseOut.bind(this);
    this.showShareModal = this.showShareModal.bind(this);
    this.hideShareModal = this.hideShareModal.bind(this);
  }

  componentDidMount() {
    axios.get('/photos/?listingid=7')
      .then((photoList) => {
        this.setState({ photos: photoList.data });
      })
      .catch((err) => {
        throw err;
      });
  }

  onContainerMouseOver() {
    this.setState({
      isContainerHovered: true,
    });
  }

  onContainerMouseOut() {
    this.setState({
      isContainerHovered: false,
    });
  }

  showShareModal(isVisible) {
    this.setState({ shareModalIsVisible: isVisible });
  }

  hideShareModal(isNotVisible) {
    this.setState({ shareModalIsVisible: isNotVisible });
  }

  render() {
    const {
      photos,
      index,
      isContainerHovered,
      shareModalIsVisible,
    } = this.state;
    return (
      <StyledContainer
        onMouseOver={this.onContainerMouseOver}
        onFocus={this.onContainerMouseOver}
        onMouseOut={this.onContainerMouseOut}
        onBlur={this.onContainerMouseOut}
      >
        <ShareModal
          hideShareModal={this.hideShareModal}
          shareModalIsVisible={shareModalIsVisible}
        />
        <PhotosContainer
          isContainerHovered={isContainerHovered}
          photos={photos}
          index={index}
        />
        <ShareButton showShareModal={this.showShareModal} />
        <SaveButton />
        <ViewPhotosButton />
      </StyledContainer>
    );
  }
}

export default App;
