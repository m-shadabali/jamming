import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/searchbar';
import SearchResult from '../SearchResult/searchresult';
import PlayList from '../Playlist/playlist';
 class App extends React.Component {
   constructor(props) {
     super(props);
        this.state = {
       serchResults: [{name: 'name1', artist: 'artist1', album: 'album1',id: 1 }],
         playlistName: 'Ali',
         playlistTracks: [{name: 'name2', artist: 'artist', album: 'album1', id : 2}]
       
     }
   }
   render(){
     return (
       <div>
      <h1>Ja<span class="highlight">mmm</span>ing</h1>
      <div class="App">
           <SearchBar/>
         <div class="App-playlist">
         <SearchResult searchResults = {this.state.serchResults}/>
          <PlayList name = {this.state.name} playlist = {this.state.playlistTracks}/>
         </div>
      </div>
    </div>
    )
   }
 }
export default App;
