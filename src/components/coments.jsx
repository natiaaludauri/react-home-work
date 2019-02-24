import React, { Component } from "react";

class Comment extends Component {
  render() {
    return (
      <div className="allComments p-2">
        <ul style={{ width: 300 }} className="list-group">
          {this.props.comments.map(coment => (
            <li className="list-group-item" key={coment.id}>
              {coment.body}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Comment;
