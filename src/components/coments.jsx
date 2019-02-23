import React, { Component } from "react";

class Coment extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.coments.map(coment => (
            <li key={coment.id}>{coment.body}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Coment;
