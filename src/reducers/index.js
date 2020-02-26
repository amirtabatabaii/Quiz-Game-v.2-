const mainReducer = (state, action) => {
  if (action.type === "CREATE_API_LINK") {
    return {
      ...state,
      user_API: action.user_API,
      index: action.index
    };
  }

  if (action.type === "LOAD_DATA") {
    return {
      ...state,
      data: action.data,
      index: action.index,
      category: action.data[0].category,
      difficulty: action.data[0].difficulty,
      question: action.data[0].question,
      correct_answer: action.data[0].correct_answer,
      incorrect_answers: action.data[0].incorrect_answers,
      all_answers: action.all_answers
    };
  }

  if (action.type === "NEXT_QUESTION") {
    return {
      ...state,
      index: action.index,
      category: action.data[action.index].category,
      difficulty: action.data[action.index].difficulty,
      question: action.data[action.index].question,
      correct_answer: action.data[action.index].correct_answer,
      incorrect_answers: action.data[action.index].incorrect_answers,
      all_answers: action.all_answers
    };
  }
  if (action.type === "RANDOM_ANSWER") {
    return {
      ...state,
      all_answers: action.all_answers
    };
  } else {
    return {
      ...state
    };
  }
};

export default mainReducer;
