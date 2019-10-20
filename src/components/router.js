import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Home } from './Home';
import { Search } from './Search';
import { UserList } from './PokemonList';
import { NavBar } from './navBar';

export class RouterComponent extends Component {

    render() {
        return (
            <div>
                <Router>
                    <NavBar />
                    <Route exact path="/" component={Home} />
                    <Route path="/Search" component={Search} />
                </Router>
            </div>
        )
    }
}