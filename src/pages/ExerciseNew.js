import React, { Component } from 'react'

export default class ExerciseNew extends Component {

    handleChange = (e) => {
        console.log(`${e.target.name}: ${e.target.value}`)
    }

    render() {
        return (
            <div className="container">
                <form action="">
                    <div className="form-group">
                        <input
                            type="text" className="form-control" placeholder="title" 
                            name="title" onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text" className="form-control" placeholder="description"
                            name="description" onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text" className="form-control" placeholder="img"
                            name="img" onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <input
                                type="text" className="form-control" placeholder="leftColor"
                                name="leftColor" onChange={this.handleChange}
                            />
                        </div>
                        <div className="col">
                            <input
                                type="text" className="form-control" placeholder="rightColor"
                                name="rightColor" onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}
