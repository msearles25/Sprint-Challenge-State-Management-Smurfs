import React from "react";
import "./App.css";

import SmurfList from './smurf/SmurfList';

import { connect } from 'react-redux';

// action
import { fetchSmurf } from './actions/smurfActions';
import AddSmurfs from "./smurf/AddSmurf";

const App = props => {

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <button onClick={props.fetchSmurf}>Get the smurfs!</button>
        <AddSmurfs />
        <SmurfList />
      </div>
    );
}


const mapStateToProps = state => {
  return {
      smurfs: state.smurfs
  }
}

export default connect(
  mapStateToProps,
  { fetchSmurf }
)(App);
