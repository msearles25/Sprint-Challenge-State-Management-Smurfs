import React, { useState } from 'react';

import { addSmurf } from '../actions/smurfActions';

const AddSmurfs = () => {
    const [smurf, setSmurf] = useState({
        name: '',
        age: '',
        height: ''
    })
    
    const handleChange = e => {
        setSmurf({
            ...smurf,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        addSmurf(smurf)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                name='name'
                placeholder='Smurf name' 
                value={smurf.name}
                onChange={handleChange}
            /> 
            <br />
            <input 
                name='age'
                placeholder='Smurf age' 
                type='number'
                value={smurf.age}
                onChange={handleChange}
            /> 
            <br />
            <input 
                name='height'
                placeholder='Smurf height' 
                value={smurf.height}
                onChange={handleChange}
            /> 
            <br />
            <button type='submit'>Add a smurf</button>
        </form>
    )
}

export default AddSmurfs;