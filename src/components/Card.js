import React, { Component } from 'react';
import circlesImg from '../images/circles.png'
import './styles/Card.css'
import 'bootstrap/dist/css/bootstrap.css'

export default class Card extends Component {

    constructor(props){
        super(props) 
        this.state = {
            image: 'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/bulbasaur.png?alt=media&token=567caf19-af47-414e-a9d4-3854ab24c7dc'
        }
    }

    // fn que se ejecuta despues de que un componente es montado
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                image: 'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06'
            })
        }, 5000);
    }

    render() {
        const { title, description, image, leftColor, rightColor } = this.props
        return (
            <div className="card mx-auto fitness-card"
                style={{
                    backgroundImage: `url(${circlesImg}), linear-gradient(to right,
                        ${leftColor}, ${rightColor})`
                }}>
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={this.state.image} className="float-right" />
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
