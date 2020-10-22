import React, { Component } from "react";

export default class toglle extends Component {
  
  state = {
    on: false,
  };

  toggle = () => {
    this.setState({
      on: !this.state.on,
    });
  };

  render() {
    return (
      <div>
        {this.state.on && this.props.children}
        <button className="button" onClick={this.toggle}>{this.state.on ? "hide": "start"} </button>
      </div>
    );
  }
}
