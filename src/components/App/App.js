import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/searchbar';
import SearchResult from '../SearchResult/searchresult';
import PlayList from '../Playlist/playlist';
 class App extends React.Component{
   render(){
     return (
       <div>
      <h1>Ja<span class="highlight">mmm</span>ing</h1>
      <div class="App">
           <SearchBar/>
         <div class="App-playlist">
         <SearchResult/>
          <PlayList/>
         </div>
      </div>
    </div>
    )
   }
 }
export default App;
