import React from 'react'
import './styles/Welcome.css'

function Welcome(props) {
    return (
        <div className="container">
            <div className="fitness-user-info">
                <h1>Hello {props.username}!</h1>
                <p>Let's workout to get someone gains!</p>
            </div>

        </div>
    )
}

export default Welcome;

// esto es un componente funcional, por lo que se declara una función en vez de una clase ya que este componente no utiliza el ciclo de vida del componente ni definir estado, como si ocurre en las clases