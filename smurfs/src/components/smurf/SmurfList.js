import React from 'react';

import Smurf from './Smurf';

// redux
import { connect } from 'react-redux';

const SmurfList = props => {
    return (
        <div>
            {console.log(props)}
            {props.loading && <p>loading smurfs...</p>}
            {!props.loading && props.smurfs.map(smurf => (
                <Smurf smurf={smurf} key={smurf.id}/>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        loading: state.loading
    }
}

export default connect(
    mapStateToProps
)(SmurfList);