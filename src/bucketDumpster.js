import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './bucketDumpster.scss';

export default class BucketDumpster extends Component {
  render() {
    return (
      <div className="epoch">
        <div>
          <div className="epoch-title">
            <h1>Defcronyke - Bucket Dumpster</h1>
          </div>

          <Link to="/">
            <img src="/images/defcronyke-bucket_dumpster-album_cover.jpg" alt="A pile of snow completely filling in a small fenced in back yard, covering a table and a barbecue." />
          </Link>

          <div className="links">

            <h3><Link to="/">Defcronyke</Link> is a solo electronic music project by <a href="https://eternalvoid.net" target="_blank" rel="noopener noreferrer">Jeremy Carter</a> of the band <a href="https://telephonesound.com" target="_blank" rel="noopener noreferrer">Telephone Sound</a>. Based in <a href="https://goo.gl/maps/68jtLij9kX72" target="_blank" rel="noopener noreferrer">Ottawa, Ontario, Canada</a>.</h3>

            <h2>Bucket Dumpster, released in 2019:</h2>

            <iframe title="Bucket Dumpster by Defcronyke, embedded from YouTube." width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLA9w7gX4C1R0tDamHoKyDiEiprE20zzGL" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            {/* <iframe src="https://audiomack.com/embed/album/defcronyke/bucket-dumpster?background=1" scrolling="no" width="100%" height="400" scrollbars="no" frameBorder="0"/> */}
            {/* <iframe width="100%" height="450" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/678341928&color=%232e2c2d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"/> */}

            <ul>
              <li><a href="https://defcronyke.bandcamp.com/album/bucket-dumpster" target="_blank" rel="noopener noreferrer">Stream or buy on Bandcamp</a></li>
              <li><a href="https://www.youtube.com/playlist?list=PLA9w7gX4C1R0tDamHoKyDiEiprE20zzGL" target="_blank" rel="noopener noreferrer">Stream on YouTube</a></li>
              <li><a href="https://soundcloud.com/defcronyke/sets/bucket-dumpster" target="_blank" rel="noopener noreferrer">Stream on SoundCloud</a></li>
              <li><a href="https://audiomack.com/album/defcronyke/bucket-dumpster" target="_blank" rel="noopener noreferrer">Stream on Audiomack</a></li>
              <li>Buy on iTunes (Coming Soon)</li>
              <li>Buy on Amazon (Coming Soon)</li>
              {/* <li><a href="https://play.google.com/music/m/Bhwmiyixrcgrvbzglbjbuaryfgy?t=Packing_Materials_-_Defcronyke" target="_blank" rel="noopener noreferrer">Stream or buy on Google Play Music</a></li> */}<li>Stream or buy on Google Play Music (Coming Soon)</li>
              {/* <li><a href="https://play.google.com/store/music/album/Defcronyke_Packing_Materials?id=Bhwmiyixrcgrvbzglbjbuaryfgy" target="_blank" rel="noopener noreferrer">Buy on Google Play Store</a></li> */}<li>Buy on Google Play Store (Coming Soon)</li>
              <li>Stream on Apple Music (Coming Soon)</li>
              <li>Stream on Spotify (Coming Soon)</li>
              <li>Stream on Deezer (Coming Soon)</li>
              <li>Stream on Tidal (Coming Soon)</li>
              <li>Stream on KKBox (Coming Soon)</li>
              {/* <li><a href="https://archive.org/details/defcronyke-packing_materials" target="_blank" rel="noopener noreferrer">Stream or download on Archive.org</a></li> */}
              <li><a href="https://www.facebook.com/defcronykesound" target="_blank" rel="noopener noreferrer">Follow on Facebook</a></li>
              <li><a href="https://www.patreon.com/telephonesound" target="_blank" rel="noopener noreferrer">Support Defcronyke on Patreon</a></li>
              <li>Support Defcronyke by sending an <a href="https://en.wikipedia.org/wiki/Interac_e-Transfer" target="_blank" rel="noopener noreferrer">Interac eTransfer</a> or <a href="https://paypal.com" target="_blank" rel="noopener noreferrer">PayPal transfer</a> to: <a href="mailto:Jeremy@JeremyCarter.ca">Jeremy@JeremyCarter.ca</a></li>
              <li>Support Defcronyke by sending <a href="https://en.wikipedia.org/wiki/Bitcoin" target="_blank" rel="noopener noreferrer">Bitcoin</a> to BTC address: <a href="bitcoin:34PDZK6Tk3FCAfSDX35yS7eUqVJAC8EtpM?amount=0.0018">34PDZK6Tk3FCAfSDX35yS7eUqVJAC8EtpM</a></li>
            </ul>

            <h2>Buy the album with Bitcoin:</h2>

            <div className="bitcoin">
              <ol>
                <li>Send an email to <a href="mailto:Jeremy@JeremyCarter.ca">Jeremy@JeremyCarter.ca</a> and give us a heads-up that you&#39;ll be buying the album. You must do this before you send the BTC, for verification purposes. You don&#39;t need to wait for us to respond.</li>
                <li>Send 0.0018 BTC to this address: <a href="bitcoin:3JrQCNnJToMPceW3VdXVFMRLLiprWewhPG?amount=0.0018">3JrQCNnJToMPceW3VdXVFMRLLiprWewhPG</a></li>
                <li>Email the TX ID of your transaction to <a href="mailto:Jeremy@JeremyCarter.ca">Jeremy@JeremyCarter.ca</a>, from the same email address you used before.</li>
                <li>After we process your order, you will receive a link to a password protected .7z file with the .wav and .flac files in it by email. You can extract the .7z file using <a href="http://p7zip.sourceforge.net/" target="_blank" rel="noopener noreferrer">p7zip</a> on <a href="https://en.wikipedia.org/wiki/Linux" target="_blank" rel="noopener noreferrer">Linux</a> or <a href="https://www.7-zip.org/" target="_blank" rel="noopener noreferrer">7zip</a> on other platforms.</li>
              </ol>
            </div>

            <h3>Check out what Defcronyke is working on for the next album. New songs get posted to <a href="https://audiomack.com/artist/defcronyke" target="_blank" rel="noopener noreferrer">Audiomack</a> and <a href="https://soundcloud.com/defcronyke" target="_blank" rel="noopener noreferrer">SoundCloud</a> while working on the next album:</h3>

            <iframe title="All music by Defcronyke, embedded from Audiomack." src="https://audiomack.com/embed/playlist/defcronyke/all?background=1" scrolling="no" width="100%" height="400" scrollbars="no" frameBorder="0" />
            {/* <iframe width="100%" height="450" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/496325133&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"/> */}

            <h4>If you like this, check out <a href="https://eternalvoid.net" target="_blank" rel="noopener noreferrer">Jeremy</a>&#39;s band with <a href="https://prettyweird.ca" target="_blank" rel="noopener noreferrer">Daphne Volante</a>, Telephone Sound: <a href="https://telephonesound.com" target="_blank" rel="noopener noreferrer">telephonesound.com</a></h4>
            <h4>Part of <a href="https://eternalvoid.net" target="_blank" rel="noopener noreferrer">The Eternal Void Network</a>.</h4>

            <br /><br />

          </div>
        </div>
      </div>
    );
  }
}
