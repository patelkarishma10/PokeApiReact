import React, { Component } from 'react';
import axios from "axios";
import PokemonList from "./PokemonList"
export class Search extends Component {

 constructor() {
    super();
    this.state = {
      data: [],
      message: ""
    };
  }


  search = (e) => {
    e.preventDefault();
    let search = e.target[0].value;
    
    if (search === "") {
        this.setState({ message: "Please fill all fields" })
        console.log(this.state.message)
    } else {
        axios
            .get("https://pokeapi.co/api/v2/pokemon/" + search )
            .then(response => {
                 this.setState({ data: response.data,
                message: "" });
                console.log(response.data.forms[0].url)
            })
            .catch(err => { this.setState({ message: "result not found" }); });

    }
}

    render() {

        return (
            <div >
                <h1>Search</h1>
                <form onSubmit={this.search}>
                    <label htmlFor="search">Search </label>
                    <input type="text" id="search" className="form-control" />

                    <input type="submit" className="btn btn-dark" value="search" />
                </form>

                <p style={{ color: 'red' }}>{this.state.message}</p>
                <PokemonList data={this.state.data} />
            </div>

        );
    }
}