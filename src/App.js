import React, { Component } from 'react';
import {Container} from "reactstrap";
import"./App.css";
import Box from "./Box"
class App extends Component {

  state = {
    persons:[
      {nom:"Wissal", parag:" mad", path:"/1.jpeg"},
      {nom:"Fatima", parag:"foolish", path:"/2.jpeg"},
      {nom:"Sabri",parag:"crazy",path:"/3.jpeg"}
    ],
    current:3
  }
  
  render() {  
   
    return (
      <Container>
        <header>
       
        </header>
        <div className="butt">   
        <button onClick={()=>this.setState({current:0})}>Wissal</button>
        <button  onClick={()=>this.setState({current:1})}>Fatima</button>{' '}
        <button  onClick={()=>this.setState({current:2})}>Sabri</button>{' '}
        </div>
        <div>
           {this.state.current <= 2 && <Box persons={this.state.persons[this.state.current]}/>}
        </div>
      </Container>
    );

  }
}

export default App;
