import React, { Component } from "react";
import QuizDetails from "./QuizDetails";
import Question from "./Question";

import { connect } from "react-redux";
import * as actionCreators from "../../actions/index";
import mainImage from "../../img/main.jpg";
import { Card } from "react-bootstrap";
import "antd/dist/antd.css";
import AnswerOptions from "./AnswerOptions";

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
      all_answers: [],
      index: 0,
      score: 0
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
        index: nextProps.index,
        all_answers: nextProps.all_answers,
        score: nextProps.score
      });
    }
  }

  handleClick = () => {
    this.props.nextquestion(this.state.data, this.state.index);
  };

  showTextWithSpecialCharacters(text) {
    const parser = new DOMParser();
    const decodedString = parser.parseFromString(
      `<!doctype html><body>${text}`,
      "text/html"
    ).body.textContent;
    return decodedString;
  }

  radioOnChange = e => {
    console.log("radio checked==>", e.target.value);
  };

  render() {
    return (
      <React.Fragment>
        <div
          className='site-blocks-cover overlay'
          style={{ backgroundImage: `url(${mainImage})` }}>
          <div className='container'>
            <div className='row align-items-center justify-content-center'>
              <Card className='text-center'>
                <QuizDetails
                  dataLength={this.state.data.length}
                  index={this.state.index + 1}
                  difficulty={this.state.difficulty}
                  category={this.state.category}
                  score={this.state.score}
                />
                <Card.Body>
                  <Question
                    text={this.showTextWithSpecialCharacters(
                      this.state.question
                    )}
                  />
                  <AnswerOptions
                    dataLength={this.state.data.length}
                    onChange={this.radioOnChange}
                    all_answers={this.state.all_answers}
                  />
                </Card.Body>
                <Card.Footer>
                  <button onClick={this.handleClick}>Next</button>
                </Card.Footer>
              </Card>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(Home);
