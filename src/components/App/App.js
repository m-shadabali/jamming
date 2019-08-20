import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/searchbar';
import SearchResults from '../SearchResults/searchresults';
import PlayList from '../Playlist/playlist';
 class App extends React.Component {
   constructor(props) {
     super(props);
        this.state = {
        serchResults: [{name: 'name1', artist: 'artist1', album: 'album1', id: 1 }, 
        {name: 'name2', artist: 'artist2', album: 'album2', id: 2 }, 
        {name: 'name3', artist: 'artist3', album: 'album3', id: 3 }],
        playlistName: 'Ali',
        playlistTracks: [
          {name: 'nameplaylist1', artist: 'artist1', album: 'album1', id : 4},
        {name: 'nameplaylist2', artist: 'artist', album: 'album1', id : 5},
        {name: 'nameplaylist3', artist: 'artist3', album: 'album3', id : 6},]
       
     };
     this.addTrack = this.addTrack.bind(this);
     this.removeTrack = this.removeTrack.bind(this);
     this.updatePlayListName = this.updatePlayListName.bind(this);
     this.savePlaylist = this.savePlaylist.bind(this);
     this.search = this.search.bind(this);

    }
addTrack(track){
 let tracks = this.state.playlistTracks;
 if(tracks.find(savedTrack => savedTrack.id === track.id)){
   return ;
 }

   tracks.push(track);
   this.setState({playlistTracks: tracks})

 


   }
   removeTrack(track) {
     let tracks = this.state.playlistTracks;
     tracks = tracks.filter(currentTrack => currentTrack.id !== track.id)
     this.setState({playlistTracks: tracks});
   }
   updatePlayListName(name){
    this.setState({playlistName: name});
  }
  savePlaylist(){
     const trackUris = this.state.playlistTracks.map(track => track.uri)
  }
  search(term){
    console.log(term);
  }
   render(){
     return (
       <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
           <SearchBar onSearch = {this.props.search}/>
         <div className="App-playlist">
         <SearchResults searchResults = {this.state.serchResults} onAdd = {this.addTrack}/>

          <PlayList playlistName =  {this.state.playlistName} 
          playlistTracks = {this.state.playlistTracks} 
          onRemove = {this.removeTrack} 
          onNameChange = {this.updatePlayListName}
          onSave = {this.savePlaylist}/>

         </div>
      </div>
    </div>
    )
   }
 }
export default App;
