import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons'

import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Gym.css'
import Details from '../Details/Details';

const Gym = () => {
    const [exercises, setExercises] = useState([]);
    const [details, setdetails] = useState([])


    useEffect(() => {
        fetch('Gym.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, []);

    const addToExerciseTime = (exercise) => {

        console.log(exercise);
        const newDetails = [...details, exercise];
        setdetails(newDetails);




    }

    return (
        <div className='gym-container'>
            <div className="exercises-container">

                {
                    exercises.map(exercise => <Exercise
                        key={exercise.id}
                        exercise={exercise}
                        addToExerciseTime={addToExerciseTime}
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
                            <p> Exercise Time:  {details}s</p>
                        </div>
                        <div className="breakRequired">
                            <p>Break Time:</p>
                        </div>
                    </div>
                </div>

                <button className='btn-activity'>Activity Completed</button>

            </div>
        </div>
    );
};

export default Gym;