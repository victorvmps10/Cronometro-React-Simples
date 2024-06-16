import React, { Component } from "react";
import "./App.css";

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      number: 0,
      button: `VAI`,
    };
    this.timer = null;
    this.Go = this.Go.bind(this);
    this.Clear = this.Clear.bind(this);
  }
  Go(){
    let state = this.state;
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      this.state.button = `VAI`;
    } else {
      this.timer = setInterval(()=> {
        state.number += 0.1;   
        this.setState(state);
      }, 100);
      this.state.button = `PAUSAR`;
      
    }
    this.setState(state);
  }
  Clear(){
    let state = this.state;
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
    }
    this.state.button = `VAI`;
    this.state.number = 0;
    this.setState(state);
  }

  render(){
return(
    <div className="container">
    <p style={{color: 'white',}}>
      Projeto criado por Victor Valentim durante o curso Fabrica de Apps do Sujeito Progrmador
      </p>
    <img className="cronometro" src={require('./assets/cronometro.png')}/>
    <a className="timer">{this.state.number.toFixed(1)}</a>
    <div className="AreaBtn">
      <a className="Button" onClick={this.Go}>{this.state.button}</a>
      <a className="Button" onClick={this.Clear}>LIMPAR</a>
       </div>
    </div>
);
  }
}
