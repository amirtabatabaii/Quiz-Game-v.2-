const mainReducer = (state, action) => {
  if (action.type === "CREATE_API_LINK") {
    return {
      ...state,
      user_API: action.user_API,
      data_index: action.data_index
    };
  }

  if (action.type === "LOAD_DATA") {
    return {
      ...state,
      data: action.data,
      data_index: action.data_index - 1
      // data_category: action.data[0].category,
      // data_difficulty: action.data[0].difficulty,
      // data_question: action.data[0].question,
      // data_correct_answer: action.data[0].correct_answer,
      // data_incorrect_answers: action.data[0].incorrect_answers
    };
  }

  if (action.type === "NEXT_QUESTION") {
    return {
      ...state,
      data_index: action.data_index
      // data_category: action.data[1].category,
      // data_difficulty: action.data[1].difficulty,
      //      data_question: action.data[action.data_index].question
      // data_correct_answer: action.data[1].correct_answer,
      // data_incorrect_answers: action.data[1].incorrect_answers
    };
  } else {
    return {
      ...state
    };
  }
};

export default mainReducer;
