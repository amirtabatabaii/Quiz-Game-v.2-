import React, { Component } from "react";
import Badge from "./Badge";

export class Badges extends Component {
  render() {
    return (
      <div>
        <Badge
          className='badge badge-primary mx-1'
          label='Question '
          content={this.props.index}
          continueLabel=' Of 10'
        />
        <Badge
          className='badge badge-success mx-1'
          label='Difficulty: '
          content={this.props.difficulty}
        />
        <Badge
          className='badge badge-warning mx-1'
          label='Category: '
          content={this.props.category}
        />
        <Badge
          className='badge badge-danger mx-1'
          label='score: '
          content={this.props.score}
        />
      </div>
    );
  }
}

export default Badges;
