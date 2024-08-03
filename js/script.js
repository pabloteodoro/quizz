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
      "question": "A way to declare a variable in JavaScript:",
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
      "question": "What is the id selector in CSS?",
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

  // Replacing the layout with the first question
function init() {
    createQuestion(0)
  }
  
  // Create a question 
  function createQuestion(i) {
  
    // Clear previous question
    const oldButtons = answersBox.querySelectorAll("button");
  
    oldButtons.forEach(function(btn) {
      btn.remove();
    });
  
    // Change question text
    const questionText = question.querySelector("#question-text");
    const questionNumber = question.querySelector("#question-number");
  
    questionText.textContent = questions[i].question;
    questionNumber.textContent = i + 1;
  
    // Insert alternatives
    questions[i].answers.forEach(function(answer, i) {
      
      // Change template text
      const answerTemplate = document.querySelector(".answer-template").cloneNode(true);
  
      const letterBtn = answerTemplate.querySelector(".btn-letter");
      const answerText = answerTemplate.querySelector(".question-answer");
  
      letterBtn.textContent = letters[i];
      answerText.textContent = answer['answer'];
  
      answerTemplate.setAttribute("correct-answer", answer["correct"]);
  
      // Remove hide class and template from template
      answerTemplate.classList.remove("hide");
      answerTemplate.classList.remove("answer-template");
  
      // Insert templates in screen 

      answersBox.appendChild(answerTemplate);
  
    });
  
    // Create event on all buttons

    const buttons = answersBox.querySelectorAll("button");
  
    buttons.forEach(function(button) {
      button.addEventListener("click", function() {
        checkAnswer(this, buttons);
      });
    });
  
    // Increase the current number of questions
    actualQuestion++;
  
  }
  
  // Checking if the answer is correct
  function checkAnswer(btn, buttons) {
    
    // Display wrong and right answers

    buttons.forEach(function(button) {
  
      if(button.getAttribute("correct-answer") === "true") {
        button.classList.add("correct-answer");

        // checks if the user got it right

        if(btn === button) {

          // increase the points

          points++;
        }
      } else {
        button.classList.add("wrong-answer");
      }
  
    });
  
    nextQuestion();
  
  }
  
  // Displays the next question
  function nextQuestion() {
  
    // Timer to see if you got it right or wrong

    setTimeout(function() {
  
      // check if there are any more questions

      if(actualQuestion >= questions.length) {

        // displays success message

        showSuccessMessage();
        return;
      }
  
      createQuestion(actualQuestion)
  
    }, 1000);
  
  }
  
  // End Screen 
  function showSuccessMessage() {
  
    hideOrShowQuizz();
  
    // calc score

    const score = ((points / questions.length) * 100).toFixed(2);
    const scoreDisplay = document.querySelector("#display-score span");
  
    scoreDisplay.textContent = score.toString();
  
    // change number of correct questions

    const correctAnswers = document.querySelector("#correct-answers");
    correctAnswers.textContent = points;
  
    // change total questions

    const totalQuestions = document.querySelector("#questions-qty");
    totalQuestions.textContent = questions.length;
  
  }
  
  // Restart Quizz

  const restartBtn = document.querySelector("#restart");
  
  restartBtn.addEventListener("click", function() {
    actualQuestion = 0;
    points = 0;
    hideOrShowQuizz();
    init();
  });
  
  // Shows or displays the quiz
  function hideOrShowQuizz() {
    quizzContainer.classList.toggle("hide");
    scoreContainer.classList.toggle("hide");
  }
  
  // Inicialitize 
  init();
  