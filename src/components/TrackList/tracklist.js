import React from 'react';
import './tracklist.css';
import Track from '../Track/track';
class TrackList extends React.Component{
    render(){
        return(
            <div className = "TrackList">
             {
                 
                this.props.tracks ? this.props.tracks.map((track) => {
                     return <Track track = {track.name} />
                 }) : <p>Hey</p>
             }


            </div>
        )
    }
}
export default TrackList;