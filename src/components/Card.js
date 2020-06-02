import React, { Component } from 'react';
import circlesImg from '../images/circles.png'
import './styles/Card.css'
import 'bootstrap/dist/css/bootstrap.css'

export default class Card extends Component {
    render() {
        const { title, description, image, leftColor, rightColor } = this.props
        return (
            <div className="card mx-auto mb-3 fitness-card"
                style={{
                    backgroundImage: `url(${circlesImg}), linear-gradient(to right,
                        ${leftColor}, ${rightColor})`
                }}>
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={image} className="float-right img" />
                        </div>
                        <div className="col-6 fitness-card-info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
