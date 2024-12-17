import { datas } from "./data.js";

const questionName = document.getElementById("js-questions");
const questionChoices = document.querySelectorAll(".js-choices");

const questionNum = Math.floor(Math.random() * datas.length);
//問題の情報が入ったオブジェクトをランダムで抽出して、questionsに代入。
const questions = datas[questionNum];

const displayQuiz = () => {
    for (let i = 0; i < questionChoices.length; i++) {
        const questionChoice = questionChoices[i];
        questionName.textContent = questions.question;
        for (let j = 0; j < questions.choices.length; j++) {
            questionChoice.textContent = questions.choices[i];
        }
    }
}



window.addEventListener("load", displayQuiz);