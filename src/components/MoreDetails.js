import React, { Component } from "react";
import {
  Collapse,
  Button,
  CardBody,
  Card,
  CardHeader,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Badge
} from "reactstrap";

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
      <div className="pageDiv">
        <br></br>
        <Row>
          <Col>
            <h1>{data.name}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>
                <p>Height: {data.height}0 cm</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Weight: {data.weight}00 g</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Order: {data.order}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <ListGroup>
                  <ListGroupItem color="dark">Stats</ListGroupItem>
                  {data.stats.map((item, index) => (
                    <ListGroupItem
                      key={index}
                      className="justify-content-between"
                    >
                      {item.stat.name}{" "}
                      <Badge color="info" pill>
                        {item.base_stat}
                      </Badge>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                {!data.sprites.front_female ? (
                  <div>
                    <h5>Image</h5>
                    <img
                      width="200px"
                      src={data.sprites.front_default}
                      alt="sprite img"
                    ></img>
                  </div>
                ) : (
                  <div>
                    <h5>Image</h5>
                    <img
                      width="200px"
                      src={data.sprites.front_default}
                      alt="sprite img"
                    ></img>

                    <h5>Female form</h5>
                    <img
                      width="200px"
                      src={data.sprites.front_female}
                      alt="female sprite img"
                    ></img>
                  </div>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col xs="2">
            <Button color="secondary" onClick={this.toggle}>
              Moves
            </Button>
          </Col>
          <Col xs="2">
            <Button color="secondary" onClick={this.toggle2}>
              Abilities
            </Button>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Collapse isOpen={this.state.collapse}>
              <Card>
                <CardHeader tag="h3">Moves</CardHeader>
                <CardBody>
                  {data.moves.map((item, index) => (
                    <p key={index}>{item.move.name}</p>
                  ))}
                </CardBody>
              </Card>
            </Collapse>
          </Col>
          <Col>
            <Collapse isOpen={this.state.collapse2}>
              <Card>
                <CardHeader tag="h3">Abilities</CardHeader>
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
