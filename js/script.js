const questionName = document.getElementById("js-question-name");
const questionAnswers = document.querySelectorAll(".js-questions-name");

const questionNum = Math.floor(Math.random() * datas.length);
const questions = datas[questionNum];
// const questionsArray = Object.values(questions);
// for (let i = 0; i < questionAnswers.length; i++) {
//     const questionAnswer = questionAnswers[i];
//     questionAnswer.textContent = questionsArray[i];
// }



// window.addEventListener