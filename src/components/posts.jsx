import React, { Component } from "react";
import Comment from "./coments";

class Post extends Component {
  state = {
    comments: [],
    currentPost: {}
  };

  getComents = post => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(data => data.json())
      .then(coments => {
        let comentfiltered = coments.filter(
          coment => coment.postId === post.id
        );
        this.setState({ comments: comentfiltered });
        this.setState({ currentPost: post });
      })
      .catch(err => console.error(err));
  };

  render() {
    return (
      <div style={{ width: 680 }} className="p-2 posts d-flex flex-row">
        <ul style={{ width: 300 }} className="list-group">
          {this.props.posts.map(post => (
            <li
              className={
                this.state.currentPost === post
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={post.id}
              onClick={() => this.getComents(post)}
            >
              {post.title}
            </li>
          ))}
        </ul>
        <Comment comments={this.state.comments} />
      </div>
    );
  }
}

export default Post;
