import React from 'react';
import TrackList from '../Playlist/playlist';
import './searchresult.css';
const SearchReasult = function(){
    return(
        <div className="SearchResults">
    <h2>Results</h2>
    <TrackList/>

  </div>)
}
export default SearchReasult;