import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardHeader,
  CardSubtitle,
  Button,
  Col,
  Row
} from "reactstrap";

export class Post extends Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        {!data ? (
          <div></div>
        ) : (
          <div>
            <Row>
              <Col xs="4" sm="4">
                <Card>
                  <CardHeader tag="h3">{data.name}</CardHeader>
                  <CardImg
                    top
                    src={data.sprites.front_default}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardSubtitle></CardSubtitle>
                    <CardText>Height: {data.height} cm</CardText>
                    <Button>
                      <Link
                        className="links"
                        to={{
                          pathname: "/MoreDetails",
                          state: { data: data }
                        }}
                      >
                        More Details
                      </Link>
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        )}
      </div>
    );
  }
}
