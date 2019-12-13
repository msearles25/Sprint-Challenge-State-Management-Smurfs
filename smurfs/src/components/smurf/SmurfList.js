import React from 'react';

import Smurf from './Smurf';

// redux
import { connect } from 'react-redux';

const SmurfList = props => {
    return (
        <div>
            {console.log(props.smurfs)}
            <p>Hello from list</p>
            {props.smurfs.map(smurf => (
                <Smurf smurf={smurf}/>
            // <p>{smurf}</p>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(
    mapStateToProps
)(SmurfList);