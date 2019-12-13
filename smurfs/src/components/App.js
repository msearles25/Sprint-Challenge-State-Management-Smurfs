import React, { useEffect } from "react";
import "./App.css";

import SmurfList from './smurf/SmurfList';

import { connect } from 'react-redux';

// action
import { fetchSmurf } from './actions/smurfActions';
import AddSmurfs from "./smurf/AddSmurf";

const App = props => {
  
    useEffect(() => {
      props.fetchSmurf();
    }, [])

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        
        <AddSmurfs />

        <button onClick={props.fetchSmurf}>Get updated list</button>
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
