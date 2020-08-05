import React, { Component } from 'react';

class Results extends Component {
    componentDidMount(){
        (console.log("here",this.props.results))
    }
    render(){
        return <div>
            <h4>Results</h4>
            <h1>Total Enrollment : {this.props.results.EnrollSum}  people</h1>
            <h1>Mean Number of days : {this.props.results.MeanTime} </h1>
            
            </div>;
    }
}

export default Results;