import React, { Component } from "react";
import Post from "./posts";
import "bootstrap/dist/css/bootstrap.css";

class User extends Component {
  state = {
    users: [],
    posts: [],
    currentUser: {}
  };

  getPosts = user => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(data => data.json())
      .then(posts => {
        let postfilter = posts.filter(post => post.userId === user.id);
        this.setState({ posts: postfilter });
        this.setState({ currentUser: user });
      })
      .catch(err => console.error(err));
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(data => data.json())
      .then(users => this.setState({ users }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div style={{ width: 1000 }} className="main d-flex flex-row">
        <ul style={{ width: 300 }} className=" p-2 list-group">
          {this.state.users.map(user => (
            <li
              className={
                this.state.currentUser === user
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={user.id}
              onClick={() => {
                this.getPosts(user);
              }}
            >
              {user.name}
            </li>
          ))}
        </ul>
        <Post posts={this.state.posts} />
      </div>
    );
  }
}

export default User;
