import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="main">

			<br /> <br />

			<iframe title="autonomous backchannel deck - next defcronyke album (SoundCloud embedded player)" width="100%" height="450" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1338549538&color=%23805450&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" /><div style={{'fontSize': '10px;', 'color': '#cccccc;', 'lineBreak': 'anywhere;', 'wordBreak': 'normal;', 'overflow': 'hidden;', 'whiteSpace': 'nowrap;', 'textOverflow': 'ellipsis;', 'fontFamily': 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;', 'fontWeight': '100;'}}><a href="https://soundcloud.com/defcronyke" title="defcronyke" target="_blank" rel="noopener noreferrer" style={{'color': '#cccccc;', 'textDecoration': 'none;'}}>defcronyke</a> · <a href="https://soundcloud.com/defcronyke/sets/autonomous-backchannel-deck" title="autonomous backchannel deck" target="_blank" rel="noopener noreferrer" style={{'color': '#cccccc;', 'textDecoration': 'none;'}}>autonomous backchannel deck</a></div>

			{/* <iframe title="autonomous backchannel deck - next defcronyke album (audius embedded player)" src="https://audius.co/embed/playlist/LMkOQ?flavor=card" width="100%" height="480" allow="encrypted-media" style={{'border': 'none;'}} /> */}

			<br />      <br />  <br />      <br />
			<br />      <br />  <br /><br /><br />
			<br />      <br />              <br />
			<br /><br /><br />				
			<br />      <br />
			<br />      <br />
			<br />      <br />

          <Link to="/dreams-and-nightmares-ep">
            <img
              src="./images/defcronyke-dreams-and-nightmares-ep.jpg"
              alt="The cover art of the album Dreams and Nightmares EP by Defcronyke, which links to The official web page for the album."
            />
          </Link>
          <Link to="/bucket-dumpster">
            <img
              src="./images/defcronyke-bucket_dumpster-album_cover.jpg"
              alt="The cover art of the album Bucket Dumpster by Defcronyke, which links to The official web page for the album."
            />
          </Link>
          <Link to="/packing-materials">
            <img
              src="./images/defcronyke-packing_materials-album-cover.jpg"
              alt="The cover art of the album Packing Materials by Defcronyke, which links to The official web page for the album."
            />
          </Link>
          <Link to="/epoch">
            <img
              src="./images/defcronyke-epoch-album-cover.jpg"
              alt="The cover art of the album Epoch by Defcronyke, which links to The official web page for the album."
            />
          </Link>
          <iframe title="Defcronyke songs recommended by Defcronyke, embedded from Audius." src="https://audius.co/embed/playlist?id=47059&ownerId=167296&flavor=card" width="100%" height="480" allow="encrypted-media" style={{'border': 'none'}} />
        </div>
      </div>
    );
  }
}
