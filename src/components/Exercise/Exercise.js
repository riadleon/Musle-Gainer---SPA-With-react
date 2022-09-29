import React from 'react';

const Exercise = ({exercise}) => {
const {name , img, about , timeCount} = exercise;
    return (
        <div className='exercise'>
            <img src={img} alt="" />
            <h3>Name:{name}</h3>
            <p>About:{about}</p>
            <h3>Time Required:{timeCount}</h3>
        </div>
    );
};

export default Exercise;