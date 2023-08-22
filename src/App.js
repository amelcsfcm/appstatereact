import React, { Component } from 'react'

export default class App extends Component {
  
  state = {
    Person:{ 
      fullName:"amel fatnassi"
      , imgSrc:"https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=740&t=st=1692647197~exp=1692647797~hmac=96c7204ef58889fad894ffab017760af6281427e54ff650e808a93dd7d124920"
      , profession:"Conseillère d'apprentissage"},
   show:false 
  };
 
  render() {
    return (
      <div>
        <button onClick={()=>{this.setState({show:!this.state.show})}}>toggles</button>
      {
        this.state.show==true?<div>
          <h2>{this.state.Person.fullName}</h2>
          <h2>{this.state.Person.profession}</h2>
          <img src={this.state.Person.imgSrc}/>
          </div>:null
      }
      </div>
    )
  }
}
