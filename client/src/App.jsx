import React from 'react';
import PhotosContainer from './PhotosContainer';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <PhotosContainer />
      </div>
    );
  }
}

export default App;
