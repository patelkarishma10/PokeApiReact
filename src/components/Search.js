import React, { Component } from "react";
import axios from "axios";
import PostList from "./PostList";
import { InputGroup, InputGroupAddon, Input, Form } from "reactstrap";
import { Alert } from "reactstrap";
export class Search extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      message: "",
      visible: false
    };
  }

  search = e => {
    e.preventDefault();
    let search = e.target[0].value;

    if (search === "") {
      this.setState({ message: "Please fill all fields", visible: true });
    } else {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/" + search)
        .then(response => {
          this.setState({ data: response.data, message: "", visible: false });
        })
        .catch(err => {
          this.setState({ message: "result not found", visible: true });
        });
    }
  };

  render() {
    return (
      <div>
        <h1>Search</h1>
        {console.log(this.state.data)}
        <Alert color="danger" isOpen={this.state.visible} fade={false}>
          {this.state.message}
        </Alert>
        <Form onSubmit={this.search}>
          <InputGroup>
            <Input
              type="text"
              id="search"
              className="form-control"
              placeholder="Search"
            />
            <InputGroupAddon addonType="append">
              <Input type="submit" className="btn btn-dark" value="search" />
            </InputGroupAddon>
          </InputGroup>
        </Form>
        <br></br>
        <PostList data={this.state.data} />
      </div>
    );
  }
}
