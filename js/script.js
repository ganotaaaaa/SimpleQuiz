import { datas } from "./data.js";

const questionName = document.getElementById("js-questions");
const questionChoices = document.querySelectorAll(".js-choices");
const correctBox = document.getElementById("js-correct-box");
const nextQuestion = document.getElementById("js-next-question");
const whatQuestion = document.getElementById("js-question-num");

//問題の情報が入ったオブジェクトをランダムで返す。
const getQuiz = () => {
    const questionNum = Math.floor(Math.random() * datas.length);
    const questions = datas[questionNum];
    return questions;
}    

//ランダムで取得した問題を表示
const displayQuiz = () => {
    const question = getQuiz();
    for (let i = 0; i < questionChoices.length; i++) {
        const questionChoice = questionChoices[i];
        questionName.textContent = question.question;
        for (let j = 0; j < question.choices.length; j++) {
            questionChoice.textContent = question.choices[i];
        }
        questionChoice.addEventListener("click", (e) => {
            if(e.target.textContent == question.answer) {
                correctBox.textContent = "正解です";
                nextQuestion.style.opacity = 1;
            } else {
                correctBox.textContent = "不正解です、他の回答を選んでね";
            }
        })
    }
    nextQuestion.style.opacity = 0;
    correctBox.textContent = "";
}

const incrementQuestionNum = () => {
    const whatQuestionNum = Number(whatQuestion.textContent);
    whatQuestion.textContent = whatQuestionNum + 1;
}


nextQuestion.addEventListener("click", () => {
    displayQuiz();
    incrementQuestionNum();
});
window.addEventListener("load", displayQuiz);