import React, { Component } from 'react'

export default class ExerciseNew extends Component {

    state = {

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text" className="form-control" placeholder="title"
                            name="title" onChange={this.handleChange} value={this.state.title}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text" className="form-control" placeholder="description"
                            name="description" onChange={this.handleChange} value={this.state.description}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text" className="form-control" placeholder="img"
                            name="img" onChange={this.handleChange} value={this.state.img}
                        />
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <input
                                type="text" className="form-control" placeholder="leftColor"
                                name="leftColor" onChange={this.handleChange} value={this.state.leftColor}
                            />
                        </div>
                        <div className="col">
                            <input
                                type="text" className="form-control" placeholder="rightColor"
                                name="rightColor" onChange={this.handleChange} value={this.state.rightColor}
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3 btn-block">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}
