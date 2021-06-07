import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      searchResults: [{name: 'Focus', artist: 'HER', album: 'HER', id: 1},
        { name: 'C-Side', artist: 'HIM', album: 'HIM', id: 2},
        { name: 'Pour it up', artist: 'Riri', album: 'Unapologetic', id: 3 }],
      playlistName: 'Soft Playlist',
      playlistTracks: [{ name: 'Playlist - Focus', artist: 'Playlist - HER', album: 'Playlist - HER', id: 4 },
        { name: 'Playlist - C-Side', artist: 'Playlist - HIM', album: 'Playlist - HIM', id: 5 }]
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    let tracksInfo = this.state.playlistTracks;
    if (tracksInfo.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    tracksInfo.push(track);
    this.setState({playlistTracks: tracksInfo});
  }

  removeTrack(track) {
    let tracksInfo = this.state.playlistTracks;
    tracksInfo = tracksInfo.filter(savedTrack => savedTrack.id !== track.id);

    this.setState({ playlistTracks: tracksInfo });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  render() {
    return (
      <div>
        <h1>Spotify Jam!</h1>
        <div className="App">
        <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} 
              playlistTracks={this.state.playlistTracks} 
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;