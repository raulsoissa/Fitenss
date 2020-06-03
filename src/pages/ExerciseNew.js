import React, { Component } from 'react'

export default class ExerciseNew extends Component {

    handleClick = () => {
        console.log(this)
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    Send
                </button>
            </div>
        )
    }
}
