import React, { Component } from "react";

import { Card } from "react-bootstrap";

class Cards extends Component {
  render() {
    return (
      <Card
        className='text-center'
        border={this.props.border}
        bg={this.props.bg}
        style={{ width: "18rem" }}>
        <Card.Header className={this.props.headerStyle}>
          {this.props.header}
        </Card.Header>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Body>{this.props.body}</Card.Body>
        </Card.Body>
      </Card>
    );
  }
}

export default Cards;
