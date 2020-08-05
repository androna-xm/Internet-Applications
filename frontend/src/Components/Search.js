import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Results from './Results';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: '',
      condition: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  getData = () => {
    let country = this.state.country;
    let condition = this.state.condition;
    fetch('http://localhost:3001/trials/search/'+country+'/'+condition)
      .then(res => res.json())
      .then(
        (result) => {
          ReactDOM.render(<Results results={result} />, document.getElementById('res'))
          console.log(result)
        },
        (error) => {console.log(error)}
      )
      //.then((res) => {ReactDOM.render(<Results results={res} />, document.getElementById('res'))})
      
  }
    
  handleChange (event)  {
    const target = event.target;
    this.setState({[target.name]: target.value})
  }
  handleSubmit (event){
    event.preventDefault();
    this.getData()
  }
  render() {
    return (
      <section id="search" >
      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Input</span></h1>
         </div>
         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns"> 
                <br/>
                 <form onSubmit = {this.handleSubmit}>
                  <table>
                    <tbody > 
                      <tr>
                        <td >
                            <h4 style={{marginLeft:190}}>Condition</h4>
                            <input  type='text' name='condition' value = {this.state.condition} placeholder = "Type a condition..." onChange = {this.handleChange }/>
                            <h4 style={{marginLeft:180}}>Country</h4>
                            <input  type='text' name='country' value = {this.state.country} placeholder = "Type a country..." onChange = {this.handleChange}/>  
                          <br/>
                          <div style={{marginLeft:200}}>
                          <input type="submit" value="Submit" />
                          </div>
                        </td>
                      </tr>
                    </tbody> 
                  </table>   
                </form>
               </div>
            </div>
         </div>
      </div>

      {/*<form onSubmit = {this.handleSubmit}>
        <h1>Search Trial</h1>
        <h3>Enter a country:</h3>
        <input
          type='text'
          name='country'
          value = {this.state.country}
          placeholder = "Type a country..."
          onChange = {this.handleChange}
         
        />
        <h3>Enter a condition:</h3>
        <input
          type='text'
          name='condition'
          value = {this.state.condition}
          placeholder = "Type a condition..."
          onChange = {this.handleChange }
        />
        <br/>
        <br/>
        <input 
          type='submit'
          value="Submit" />
        </form>
    */}
        <div id="res" > </div>
        </section>
    );
  }
}

export default Search;
