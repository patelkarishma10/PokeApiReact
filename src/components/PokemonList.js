import React, { Component } from 'react';
import { Table } from "reactstrap";

import { Pokemon } from './Pokemon';

export class PokemonList extends Component {

    render() {

        return (
            <div className="formDiv">
                <h2>Pokemon</h2>
                <Table >
                    
<Pokemon data={this.props.data} />

                  
                </Table>
            </div>

        );
    }
}

export default PokemonList;