// Declare variables // 

const question = document.querySelector('#question');
const answersBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd'];
let points = 0;
let actualQuestion = 0;

// Questions

const questions = [
    {
      "question": "How to create file HTML5?",
      "answers": [
        {
          "answer": "file.html",
          "correct": true
        },
        {
          "answer": "file.js",
          "correct": false
        },
        {
          "answer": "file.css",
          "correct": false
        },
        {
          "answer": "file.java",
          "correct": false
        },
      ]
    },
    {
      "question": "Uma forma de declarar variável em JavaScript:",
      "answers": [
        {
          "answer": "$var",
          "correct": false
        },
        {
          "answer": "var",
          "correct": true
        },
        {
          "answer": "@var",
          "correct": false
        },
        {
          "answer": "#let",
          "correct": false
        },
      ]
    },
    {
      "question": "Qual o seletor de id no CSS?",
      "answers": [
        {
          "answer": "#",
          "correct": true
        },
        {
          "answer": ".",
          "correct": false
        },
        {
          "answer": "@",
          "correct": false
        },
        {
          "answer": "/",
          "correct": false
        },
      ]
    },
  ]

  // Quizz replacement for first question

  function init() {

    // Create the first question
    
    createQuestion(0);
  }

  // Create the Question
  function createQuestion(i) {

    // Clear the previous question

    const oldButtons = answersBox.querySelectorAll("button");

    oldButtons.forEach(function(btn) {
        btn.remove();
    });

    // Change the question text

    const questionText = question.querySelector("#question-text");
    const questionNumber = question.querySelector("#question-number");

    questionText.textContent = questions[i].question;
    questionNumber.textContent = i + 1;

    }

    // Initialize the Quizz
    
    questions[i].answers.forEach(function(answer, i) {

        // Create the answer button

        const answerTemplate = document.querySelector('.answer-template').cloneNode(true);

        const letterBtn = answerTemplate.querySelector('.btn-letter');
        const answerText = answerTemplate.querySelector('.question-answer');

        letterBtn.textContent = letters[i];
        answerText.textContent = answer['answer'];

        answerTemplate.setAttribute('correct-answer', answer['correct']);

        // Remove hide and answer-template class

        answerTemplate.classList.remove('hide');
        answerTemplate.classList.remove('answer-template');

        // Insert the answer in the quizz

        answersBox.appendChild(answerTemplate);

        // Add event click to the button

        answerTemplate.addEventListener('click', function() {
            checkAnswer(this);
        });

    });

    // Increment the actual question
    actualQuestion++;


    // Initialize the Quizz
    init();

