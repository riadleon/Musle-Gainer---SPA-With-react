import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Gym.css'

const Gym = () => {
    const [exercises, setExercises] = useState([]);

    useEffect( () => {
            fetch('Gym.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, []);
    return (
        <div className='gym-container'>
            <div className="exercises-container">
                <h1>Muscle Gainer</h1>
                {
                    exercises.map(exercise => <Exercise 
                        key={exercise.id}
                        exercise = {exercise}
                         ></Exercise>)
                }
            </div>
            <div className="details-container">

            </div>
        </div>
    );
};

export default Gym;