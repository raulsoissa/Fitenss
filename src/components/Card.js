import React, { Component } from 'react';
import exercise from '../images/exercise.png'
import './styles/Card.css'

export default class Card extends Component {
    render() {
        return (
            <div className="card mx-auto fitness-card">
                <div className="card-body">
                    <div className="row center">
                        <div className="col-7">
                            <img src={exercise} className="float-right" />
                        </div>
                        <div className="col-6 fitness-card-info">
                            <h1>Technique Guides</h1>
                            <p>Learn amazing street workout and calisthenics</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
