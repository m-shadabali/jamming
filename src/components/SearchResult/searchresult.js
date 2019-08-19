import React from 'react';
import TrackList from '../TrackList/tracklist';
import './searchresult.css';


class SearchResult extends React.Component{
constructor(){
  super();
}

  render(){
    return(
   <div className="SearchResults">
  <h2>Results</h2>
 <TrackList tracks = {this.props.searchResults} />
</div>)

  }
}
    
export default SearchResult;