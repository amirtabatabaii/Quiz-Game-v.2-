import React, { Component } from "react";

import { connect } from "react-redux";
import * as actionCreators from "../../actions/index";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      category: "",
      difficulty: "",
      question: "",
      correct_answer: "",
      incorrect_answers: [],
      index: 0
    };
  }

  componentDidMount() {
    this.props.loadData(this.props.user_API, this.props.index);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data) {
      this.setState({
        data: nextProps.data,
        category: nextProps.data[nextProps.index].category,
        difficulty: nextProps.data[nextProps.index].difficulty,
        question: nextProps.data[nextProps.index].question,
        correct_answer: nextProps.data[nextProps.index].correct_answer,
        incorrect_answers: nextProps.data[nextProps.index].incorrect_answers,
        index: nextProps.index
      });
    }
  }

  handleClick = () => {
    this.props.nextquestion(this.state.data, this.state.index);
  };

  render() {
    return (
      <React.Fragment>
        <p>
          Data {this.state.index + 1} :
          {this.state.data.length > 0 ? (
            <div>
              Category: {this.state.category}
              <br />
              Difficulty:
              {this.state.difficulty}
              <br /> Question:
              {this.state.question}
              <br />
              Correct Answer:
              {this.state.correct_answer}
              <br />
              Incorrect Answer:
              {this.state.incorrect_answers.map(incorrect_answer => (
                <span>{incorrect_answer} </span>
              ))}
            </div>
          ) : (
            " --"
          )}
        </p>
        <button onClick={this.handleClick}>Next</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(Home);
