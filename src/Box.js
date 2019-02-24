import React from 'react'
import "./App.css";

 const Box = (props) => {
   const person=props.persons;
   console.log(person);
    return (
        
        <div className="box">
        <img src={person.path} width="400px" height="340px" />
        <h4 style={{textAlign:"center"}}>my Name is {person.nom} </h4>
        <h3 style={{textAlign:"center"}}>{person.parag}</h3>
      </div>
        
    );
};

export default Box

