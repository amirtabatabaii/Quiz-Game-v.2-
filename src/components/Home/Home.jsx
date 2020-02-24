import React, { Component } from "react";
import QuizDetails from "./QuizDetails";
import { connect } from "react-redux";
import * as actionCreators from "../../actions/index";
import mainImage from "../../img/main.jpg";
import { Card } from "react-bootstrap";
import { Button, Radio } from "antd";
import "antd/dist/antd.css";

const styles = {
  radioStylet: {
    display: "block",
    height: "30px",
    lineHeight: "30px"
  }
};
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

  handleAnswers = () => {
    this.props.randomanswer(
      this.state.correct_answer,
      this.state.incorrect_answers,
      this.state.all_answers
    );
  };

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
                  {this.showTextWithSpecialCharacters(this.state.question)}
                  <Radio.Group
                    onChange={this.onChange}
                    value={this.state.value}>
                    <Radio style={styles.radioStyle} value={1}>
                      Option A
                    </Radio>
                    <Radio style={styles.radioStyle} value={2}>
                      Option B
                    </Radio>
                    <Radio style={styles.radioStyle} value={3}>
                      Option C
                    </Radio>
                    <Radio style={styles.radioStyle} value={4}>
                      Option D
                    </Radio>
                  </Radio.Group>
                </Card.Body>
                <Card.Footer>
                  <button onClick={this.handleClick}>Next</button>
                </Card.Footer>
              </Card>
            </div>
          </div>
        </div>

        {/* <p>
          Data {this.state.index + 1} :
          {this.state.data.length > 0 ? (
            <div>
              Category: {this.state.category}
              <br />
              Difficulty:
              {this.state.difficulty}
              <br /> Question:
              {this.showTextWithSpecialCharacters(this.state.question)}
              <br />
              Correct Answer:
              {this.showTextWithSpecialCharacters(this.state.correct_answer)}
              <br />
              Incorrect Answer:
              {this.state.incorrect_answers.map(incorrect => (
                <p>{this.showTextWithSpecialCharacters(incorrect)} </p>
              ))}
              <br />
              All Answers:
              {this.state.all_answers.map(answer => (
                <p>{this.showTextWithSpecialCharacters(answer)} </p>
              ))}
            </div>
          ) : (
            <div>
              <Spinner animation='grow' variant='primary' />
              <Spinner animation='border' variant='primary' />
            </div>
          )}
        </p>
        <button onClick={this.handleClick}>Next</button>
        <button onClick={this.handleAnswers}>Random Answers</button> */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(Home);
