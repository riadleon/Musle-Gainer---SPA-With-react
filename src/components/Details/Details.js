import React, { useState } from 'react';
import Exercise from '../Exercise/Exercise';

const Details = ({addToExerciseTime}) => {
    
    return (
        <div>
             <div className="text">
                    <h3>Add a Break</h3>
                </div>

                <div className="break">


                    <button className='btn'>10s</button>
                    <button className='btn'>20s</button>
                    <button className='btn'>30s</button>
                    <button className='btn'>40s</button>
                    <button className='btn'>50s</button>



                </div>
                <div className="time-details">
                    <h3>Exercies Details</h3>
                    <div className="input-field">
                        <div className="timeRequired">
                            <label htmlFor="">Exercise Time:  </label>
                            <input type="text" />
                        </div>
                        <div className="breakRequired">
                            <label htmlFor="">Break Time:</label>
                            <input type="text" />
                        </div>
                    </div>
                </div>

                <button className='btn-activity'>Activity Completed</button>
        </div>
    );
};

export default Details;