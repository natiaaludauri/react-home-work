import React, { Component } from "react";

class User extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.users.map(user => (
            <li key={user.id} onClick={() => this.props.getPosts(user)}>
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default User;
