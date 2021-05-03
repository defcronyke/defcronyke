import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="main">
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
