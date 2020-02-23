import React, { Component } from "react";

import { connect } from "react-redux";
import * as actionCreators from "../../actions/index";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data_category: "",
      data_difficulty: "",
      data_question: "",
      data_correct_answer: "",
      data_incorrect_answers: [],
      data_index: ""
    };
  }

  componentDidMount() {
    this.props.loadData(this.props.user_API, this.props.data_index);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data) {
      console.log(nextProps.data);
      this.setState({
        data: nextProps.data,
        // data_category: nextProps.data[nextProps.data_index].category,
        // data_difficulty: nextProps.data[nextProps.data_index].difficulty,
        data_question: nextProps.data[this.props.data_index].question,
        // data_correct_answer:
        //   nextProps.data[nextProps.data_index].correct_answer,
        // data_incorrect_answers:
        //   nextProps.data[nextProps.data_index].incorrect_answers,
        data_index: nextProps.data_index
      });
    }
  }

  handleClick = () => {
    this.props.nextquestion(this.props.data, this.props.data_index);
  };

  render() {
    return (
      <React.Fragment>
        <p>ss : {this.state.data_question}</p>
        <button onClick={this.handleClick}>
          {this.props.data_index} ssssssss
        </button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(Home);
