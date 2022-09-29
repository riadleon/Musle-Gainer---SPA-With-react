import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons'

import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Gym.css'

const Gym = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetch('Gym.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, []);
    return (
        <div className='gym-container'>
            <div className="exercises-container">

                {
                    exercises.map(exercise => <Exercise
                        key={exercise.id}
                        exercise={exercise}
                    ></Exercise>)
                }
            </div>
            <div className="details-container">
                <div className="p-details">
                    <h3>Riad Shalahin Leon</h3>
                    <div className="location">
                        <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>
                        <p>Dhaka, Bangladesh</p>
                    </div>
                    <div className="details">
                        <p>72 kg</p>
                        <p>5.8"</p>
                        <p>24 Years</p>
                    </div>
                </div>

                <div className="break">
                    <p>10s</p>
                    <p>20s</p>
                    <p>30s</p>
                    <p>40s</p>
                    <p>50s</p>

                </div>


            </div>
        </div>
    );
};

export default Gym;