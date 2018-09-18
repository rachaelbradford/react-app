import React, { Component } from "react";
import alf from './images/Alf.jpg';

class Stuff extends Component {
  render() {
    return (
      <div>
        <h2>Stuff. Yep. Stuff.</h2>
        <p>Here is some stuff we hope you enjoy.</p>
        <div>
          <img src={alf} alt="Alf knows how to party" />
        </div>
      </div>
    );
  }
}

export default Stuff;
