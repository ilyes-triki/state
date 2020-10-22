import React, { Component } from "react";
import Toggle from "./component/toggle/toglle";
import Profile from "./component/profile/profile"
import './App.css'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
          
        <Toggle>
        <Profile />
            <h3>count:{this.state.count} </h3>
        </Toggle>
      </div>
    );
  }
  componentDidMount(){ 
    this.myInterval = setInterval (()=>
      { this.setState({count : this.state.count + 1})
    } , 1000 )
  }
}
