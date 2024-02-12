var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
var accountingButton = document.getElementById('accounting-btn');
var mergerButton = document.getElementById('marger-btn');
var generalButton = document.getElementById('general-btn');
var questionContainerElement = document.getElementById('question-container');
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-buttons');
var shuffledQuestions, currentQuestionIndex;

console.log("Hello, world!");

document.addEventListener('DOMContentLoaded', function (event) {
    var element = document.getElementById('start-btn');
    if (element) {
        console.log('Element exists');
    }
    else {
        console.log('Element does not exist');
    }
});


startButton.addEventListener('click', startGame);

nextButton.addEventListener('click', function () {
    currentQuestionIndex++;
    setNextQuestion();
});



function startGame() {
    console.log('started');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(function () { return Math.random() - .5; });
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(function (answer) {
        var button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
} 

function selectAnswer(e) {
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(function (button) {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    }
    else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    }
    else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

var questions = [

{
    topic: 'Accounting',
    question: 'Accounting Question 1',
    answers: [
        { text: "", correct: false },
        { text: "", correct: false },
        { text: "", correct: true },
        { text: "", correct: false}
    ],
 
},

{
    topic: 'Accounting',
    question: 'Accounting Question 2',
    answers: [
        { text: "", correct: false },
        { text: "", correct: false },
        { text: "", correct: true },
        { text: "", correct: false}
    ],
 
},

{
    topic: 'Accounting',
    question: 'Accounting Question 3',
    answers: [
        { text: "", correct: false },
        { text: "", correct: false },
        { text: "", correct: true },
        { text: "", correct: false}
    ],
 
},

{
    topic: 'M&A',
    question: 'M&A Question 1',
    answers: [
        { text: "", correct: false },
        { text: "", correct: false },
        { text: "", correct: true },
        { text: "", correct: false}
    ],
 
},

{
    topic: 'M&A',
    question: 'M&A Question 2',
    answers: [
        { text: "", correct: false },
        { text: "", correct: false },
        { text: "", correct: true },
        { text: "", correct: false}
    ],
 
},

{
    topic: 'M&A',
    question: 'M&A Question 3',
    answers: [
        { text: "", correct: false },
        { text: "", correct: false },
        { text: "", correct: true },
        { text: "", correct: false}
    ],
 
},

{
    topic: 'M&A',
    question: 'M&A Question 4',
    answers: [
        { text: "", correct: false },
        { text: "", correct: false },
        { text: "", correct: true },
        { text: "", correct: false}
    ],
 
},

{
    topic: 'M&A',
    question: 'M&A Question 5',
    answers: [
        { text: "", correct: false },
        { text: "", correct: false },
        { text: "", correct: true },
        { text: "", correct: false}
    ],
 
},

{
    topic: 'General',
    question: 'General Question 1',
    answers: [
        { text: "", correct: false },
        { text: "", correct: false },
        { text: "", correct: true },
        { text: "", correct: false}
    ],
 
},

{
    topic: 'General',
    question: 'General Question 2',
    answers: [
        { text: "", correct: false },
        { text: "", correct: false },
        { text: "", correct: true },
        { text: "", correct: false}
    ],
 
},

{
    topic: 'General',
    question: 'General Question 3',
    answers: [
        { text: "", correct: false },
        { text: "", correct: false },
        { text: "", correct: true },
        { text: "", correct: false}
    ],
 
},

{
    topic: 'General',
    question: 'General Question 4',
    answers: [
        { text: "", correct: false },
        { text: "", correct: false },
        { text: "", correct: true },
        { text: "", correct: false}
    ],
 
},

{
    topic: 'General',
    question: 'General Question 5',
    answers: [
        { text: "", correct: false },
        { text: "", correct: false },
        { text: "", correct: true },
        { text: "", correct: false}
    ],
 
},






]