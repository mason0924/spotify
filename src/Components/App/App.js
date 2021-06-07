import React from 'react';
import SearchResults from '../SearchResults/SearchResults';
import SearchBar from '../SearchBar/SearchBar';
import Playlist from '../Playlist/Playlist';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [{
        name: 'Pour it up',
        artist: 'Riri',
        album: 'Unapologetic',
        id: 40477
      }, {
        name: 'H.E.R',
        artist: 'H.E.R',
        album: 'H.E.R',
        id: 40478
      }]
    }
  }

  render() {
    return (
      <div>
        <h1>Spotify Jam</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} / >
            <Playlist />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
