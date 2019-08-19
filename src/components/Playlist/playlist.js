import React from 'react';
import TrackList from '../TrackList/tracklist';
import './playlist.css';
 const PlayList = function(){
     return(
         <div className="Playlist">
     <input value="New Playlist"/>
      <TrackList/>
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
   </div>)
 }
 export default PlayList;