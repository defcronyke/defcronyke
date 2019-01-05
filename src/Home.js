import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="main">
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
        </div>
      </div>
    );
  }
}
