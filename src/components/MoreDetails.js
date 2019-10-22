import React, { Component } from "react";
import { Collapse, Button, CardBody, Card, Row, Col } from "reactstrap";

export class MoreDetails extends Component {
  constructor() {
    super();
    this.state = {
      collapse: false,
      collapse2: false
    };
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  toggle2 = () => {
    this.setState({ collapse2: !this.state.collapse2 });
  };

  render() {
    const { data } = this.props.location.state;

    return (
      <div className="formDiv">
        <br></br>
        <Row>
          <Col sm="5" xl="5" lg="5" xs="5">
            <Row>
              <Col>
                <h1>{data.name}</h1>
                <p>Height: {data.height}</p>
                <p>Weight: {data.weight}</p>
              </Col>

              <Col>
                <img
                  width="300px"
                  src={data.sprites.front_default}
                  alt="sprite img"
                ></img>
                {!data.sprites.front_female ? (
                  <div></div>
                ) : (
                  <div>
                    <h5>Female form</h5>
                    <img
                      width="300px"
                      src={data.sprites.front_female}
                      alt="female sprite img"
                    ></img>
                  </div>
                )}
              </Col>
            </Row>
          </Col>

          <Col offset="7">
            <Button color="secondary" onClick={this.toggle}>
              Moves
            </Button>

            <Collapse isOpen={this.state.collapse}>
              <Card>
                <CardBody>
                  {data.moves.map((item, index) => (
                    <p key={index}>{item.move.name}</p>
                  ))}
                </CardBody>
              </Card>
            </Collapse>
          </Col>
          <Col>
            <Button color="secondary" onClick={this.toggle2}>
              Abilities
            </Button>

            <Collapse isOpen={this.state.collapse2}>
              <Card>
                <CardBody>
                  {data.abilities.map((item, index) => (
                    <p key={index}>{item.ability.name}</p>
                  ))}
                </CardBody>
              </Card>
            </Collapse>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MoreDetails;
