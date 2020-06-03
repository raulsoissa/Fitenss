import React from 'react';
import Card from './Card'

const ExerciseList = ({exercises}) => (
    <div className="">
        {exercises.map((exercise) => {
            return (
                <Card 
                    key={exercise.id}
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

export default ExerciseList;