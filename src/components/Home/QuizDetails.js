import React, { Component } from "react";
import Badges from "./Badges";
import { Spinner, Card } from "react-bootstrap";

export class QuizDetails extends Component {
  render() {
    return (
      <div>
        <Card.Header className='col bg-info h3 font-weight-bold text-white text-capitalize lead'>
          {this.props.dataLength > 0 ? (
            <Badges
              index={this.props.index}
              difficulty={this.props.difficulty}
              category={this.props.category}
              score={this.props.score}
            />
          ) : (
            <div>
              <Spinner animation='grow' variant='warning' size='sm' />
              <Spinner animation='grow' variant='danger' size='sm' />
              <Spinner animation='grow' variant='warning' size='sm' />
            </div>
          )}
        </Card.Header>
      </div>
    );
  }
}

export default QuizDetails;
