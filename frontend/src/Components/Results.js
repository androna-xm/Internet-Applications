import React, { Component } from 'react';

class Results extends Component {
    componentDidMount(){
        (console.log("here",this.props.results))
    }
    render(){
        let enrollsum = this.props.results.EnrollSum;
        let meantime = Math.round(this.props.results.MeanTime);
        let years = Math.round(meantime/365);
        let months = Math.round((meantime % 365) / 30);
        let days = Math.round((meantime % 365) % 30);
        return <div>
            <div className="row education">
            <div className="three columns header-col">
                <h1><span>Results</span></h1>
            </div>
            <div className="nine columns main-col">
            <div className="row item">
            <div className="twelve columns"> 
            <table>
            <tbody >
            <tr>
            <td >
            <br/>
            <h1>Total Enrollment : {enrollsum.toLocaleString('en-US')} people</h1>
            <br/>
            <h1> Year(s) : {years}</h1>
            <h1> Month(s) : {months}</h1>
            <h1> Day(s) : {days}</h1>
            </td>
            </tr>
            </tbody>
            </table>
            </div>
            </div>
            </div>
        </div>
        </div>
        
    }
}

export default Results;