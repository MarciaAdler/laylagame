import React, { Component } from "react";
import Item from "../Components/Item";
class Count extends Component {
  state = {
    number: 0,
  };

  render() {
    function start(min, max) {
      min = Math.ceil(1);
      max = Math.floor(10);
      this.setState({
        number: Math.floor(Math.random() * (max - min + 1)) + min,
      });
      console.log(this.state.number);
    }
    return <Item start={start.bind(this)} number={this.state.number} />;
  }
}

export default Count;
