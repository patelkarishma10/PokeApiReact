import React, { Component } from 'react';

export class Pokemon extends Component {
    render() {

        const {
            data
        } = this.props

        return (


            <tbody>
                <tr>
                    <th>Name</th>

                    <td>{data.name}</td>
                </tr>
                <tr>
                    <th>Height</th>

                    <td>{data.height}</td>
                </tr>

                <tr>
                    <th>Height</th>

                    {/* <img src={data.forms.url}></img> */}
                </tr>

                
            </tbody>

        );
    }
}