import '../colorgenerator/colorgenerator.scss';
import Button from "../button/Button";
import Color from "../color/Color";

import React, { Component } from "react";

class ColorGenerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [],
    };
    this.generate = this.generate.bind(this);
  }

  generate() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    this.setState({ colors: [...this.state.colors, `#` + randomColor] });
    console.log(...this.state.colors);
  }

  render() {
    return (
      <div class="container">
        <Button title="Add Color" clickHandler={this.generate} />

        {this.state.colors.map((clr) => (
          <Color title={clr} />
        ))}
      </div>
    );
  }
}

export default ColorGenerator;
