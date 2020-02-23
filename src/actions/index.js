import axios from "axios";

//-------------------------------------
// CREATE_API_LINK in Welcome Component
//-------------------------------------
export function fetchApi(API, index) {
  return {
    type: "CREATE_API_LINK",
    user_API: API,
    data_index: index
  };
}

//-------------------------------------
// LOAD_DATA From API in Home Component
//-------------------------------------
export function loadData(user_API, index) {
  return dispatch => {
    return axios.get(user_API).then(response => {
      dispatch(fetchdata(response.data.results, index));
    });
  };
}

export function fetchdata(data, index) {
  return {
    type: "LOAD_DATA",
    data: data,
    data_category: data[index - 1].category,
    data_difficulty: data[index - 1].difficulty,
    data_question: data[index - 1].question,
    data_correct_answer: data[index - 1].correct_answer,
    data_incorrect_answers: data[index - 1].incorrect_answers,
    data_index: index
  };
}

//-------------------------------------
//
//-------------------------------------
export function nextquestion(data, index) {
  return {
    type: "NEXT_QUESTION",
    //data: data,
    data_index: index + 1,
    // data_category: data[index].category,
    // data_difficulty: data[index].difficulty,
    data_question: data[index + 1].question
    // data_correct_answer: data[index].correct_answer,
    // data_incorrect_answers: data[index].incorrect_answers
  };
}
