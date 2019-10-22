import React, { Component } from "react";

import { Post } from "./Post";

export class PostList extends Component {
  render() {
    return (
      <div className="formDiv">
        <Post data={this.props.data} />
      </div>
    );
  }
}

export default PostList;
