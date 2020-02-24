import axios from "axios";

//-------------------------------------
// CREATE_API_LINK in Welcome Component
//-------------------------------------
export function fetchApi(API, index) {
  return {
    type: "CREATE_API_LINK",
    user_API: API,
    index: index
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
    category: data[index].category,
    difficulty: data[index].difficulty,
    question: data[index].question,
    correct_answer: data[index].correct_answer,
    incorrect_answers: data[index].incorrect_answers,
    index: index
  };
}

//-------------------------------------
// NEXT_QUESTION in Home Component
//-------------------------------------
export function nextquestion(data, index) {
  return {
    type: "NEXT_QUESTION",
    data: data,
    index: index + 1,
    category: data[index].category,
    difficulty: data[index].difficulty,
    question: data[index].question,
    correct_answer: data[index].correct_answer,
    incorrect_answers: data[index].incorrect_answers
  };
}

//-------------------------------------
// RANDOM_ANSWER in Home Component
//-------------------------------------
function createAnswers(correct, incorrect, all_answers) {
  all_answers = incorrect.concat(correct);

  let i = all_answers.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = all_answers[i];
    all_answers[i] = all_answers[j];
    all_answers[j] = temp;
  }
  return all_answers;
}

export function randomanswer(correct, incorrect, all_answers) {
  return {
    type: "RANDOM_ANSWER",
    all_answers: createAnswers(correct, incorrect, all_answers)
  };
}
