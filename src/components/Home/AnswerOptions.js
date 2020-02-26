import React, { Component } from "react";
import { Radio } from "antd";
import { Spinner } from "react-bootstrap";

const styles = {
  radioStyle: {
    display: "block",
    height: "30px",
    lineHeight: "30px"
  }
};

class AnswerOptions extends Component {
  showTextWithSpecialCharacters(text) {
    const parser = new DOMParser();
    const decodedString = parser.parseFromString(
      `<!doctype html><body>${text}`,
      "text/html"
    ).body.textContent;
    return decodedString;
  }

  render() {
    return (
      <div>
        {this.props.dataLength > 0 ? (
          <Radio.Group onChange={this.props.radioOnChange}>
            {this.props.all_answers.map((answer, index) => (
              <Radio key={index} style={styles.radioStyle} value={answer}>
                {this.showTextWithSpecialCharacters(answer)}
              </Radio>
            ))}
          </Radio.Group>
        ) : (
          <div>
            <Spinner animation='grow' variant='warning' size='sm' />
            <Spinner animation='grow' variant='danger' size='sm' />
            <Spinner animation='grow' variant='warning' size='sm' />
          </div>
        )}
      </div>
    );
  }
}

export default AnswerOptions;
