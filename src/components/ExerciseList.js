import React, { Component } from 'react';
import Card from './Card'

function ExerciseList(props) {
    return (
        <div className="">
            {props.exercises.map((exercise) => {
                return (
                    <Card
                        title={exercise.title}
                        description={exercise.description}
                        image={exercise.img}
                        leftColor={exercise.leftColor}
                        rightColor={exercise.rightColor}
                    />
                )
            })

            }
        </div>
    )
}

export default ExerciseList;