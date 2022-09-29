import React from 'react';
import './Exercise.css'

const Exercise = ({exercise}) => {
const {name , img, about , timeCount} = exercise;
    return (
        <div className='exercise'>
            <img src={img} alt="" />
            <div className="exercise-info">
            <h3 className='exercise-name'>Name:{name}</h3>
            <p className='about'>About:{about}</p>
            <h3>Time Required:{timeCount}</h3>
            </div>
            <button className='btn-details'>
                <p className='btn-text'>Add to list</p>
            </button>
            
            
        </div>
    );
};

export default Exercise;