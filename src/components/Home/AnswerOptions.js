import React, { Component } from "react";
import { Radio } from "antd";
import { Spinner } from "react-bootstrap";

class AnswerOptions extends Component {
  showTextWithSpecialCharacters(text) {
    const parser = new DOMParser();
    const decodedString = parser.parseFromString(
      `<!doctype html><body>${text}`,
      "text/html"
    ).body.textContent;
    return decodedString;
  }

  // radioOnChange(e) {
  //   console.log("radio checked==>", e.target.value);
  // }

  render() {
    return (
      <div>
        {this.props.dataLength > 0 ? (
          <Radio.Group
            onChange={e => this.props.radioOnChange}
            defaultValue={this.props.all_answers[0]}>
            {this.props.all_answers.map((answer, index) => (
              <div className='text-left radio-style h4' key={index}>
                <Radio value={answer}>
                  {this.showTextWithSpecialCharacters(answer)}
                </Radio>
              </div>
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
