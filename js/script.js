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
    
    console.log("Initializing...");
  }

  init();

