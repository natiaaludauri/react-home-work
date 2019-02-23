import React, { Component } from "react";

class Post extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.posts.map(post => (
            <li key={post.id} onClick={() => this.props.getComents(post)}>
              {post.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Post;
