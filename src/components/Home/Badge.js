import React, { Component } from "react";

class Badge extends Component {
  render() {
    return (
      <span className={this.props.className}>
        {this.props.label}
        {this.props.content}
        {this.props.continueLabel}
      </span>
    );
  }
}

export default Badge;
