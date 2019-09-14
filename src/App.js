import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import DreamsAndNightmaresEP from './dreamsAndNightmaresEp';
import BucketDumpster from './bucketDumpster';
import PackingMaterials from './packingMaterials';
import Epoch from './epoch';
import './App.css';

class App extends Component {
  static ScrollToTop() {
    window.scrollTo(0, 0);
    return null;
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Route component={App.ScrollToTop} />
          <Route exact path="/" component={Home} />
          <Route path="/dreams-and-nightmares-ep" component={DreamsAndNightmaresEP} />
          <Route path="/bucket-dumpster" component={BucketDumpster} />
          <Route path="/packing-materials" component={PackingMaterials} />
          <Route path="/epoch" component={Epoch} />
        </div>
      </Router>
    );
  }
}

export default App;
