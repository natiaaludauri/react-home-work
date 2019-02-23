import React, { Component } from "react";
import "./App.css";
import User from "./components/users";
import Post from "./components/posts";
import Coment from "./components/coments";

class App extends Component {
  state = {
    users: [],
    posts: [],
    coments: [],

    getPosts: user => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(data => data.json())
        .then(posts => {
          let postfilter = posts.filter(post => post.userId === user.id);
          this.setState({ posts: postfilter });
        })
        .catch(err => console.error(err));
    },

    getComents: post => {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then(data => data.json())
        .then(coments => {
          let comentfiltered = coments.filter(
            coment => coment.postId === post.id
          );
          this.setState({ coments: comentfiltered });
        })
        .catch(err => console.error(err));
    }
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(data => data.json())
      .then(users => this.setState({ users }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="flex">
        <div>
          <User
            users={this.state.users}
            getPosts={this.state.getPosts}
            posts={this.state.posts}
          />
        </div>
        <div>
          <Post
            posts={this.state.posts}
            getComents={this.state.getComents}
            coments={this.state.coments}
          />
        </div>
        <div>
          <Coment coments={this.state.coments} />
        </div>
      </div>
    );
  }
}

export default App;
