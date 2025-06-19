const startScreen = document.getElementById("start-quiz");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const quesitonText = document.getElementById("quiz-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-questions");
const scoreSpan = document.getElementById("score");
const progressBar = document.getElementById("progress");
const totalQuestionsSpan = document.getElementById("total-questions");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMassege = document.getElementById("result-massege");
const restartButton = document.getElementById("restart-btn");

const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Banana", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
  },
  {
    question: "Apakah anda menyontek?",
    answers: [
      { text: "Bisa jadi", correct: false },
      { text: "Iyaa", correct: false },
      { text: "Tidak", correct: true },
      { text: "Gimana ya?", correct: false },
    ],
  },
];

// QUIZ STATE VARS

let currentQuestionsIndex = 0;
let score = 0;
let answersDisable = false;

totalQuestionsSpan.innerHTML = quizQuestions.length;
maxScoreSpan.innerHTML = quizQuestions.length;

// START QUIZ

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
  currentQuestionsIndex = 0;
  scoreSpan.textContent = 0;

  startScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestion();
}

function showQuestion() {
  answersDisable = false;

  const currentQuestion = quizQuestions[currentQuestionsIndex];

  currentQuestionSpan.textContent = currentQuestionsIndex + 1;
  const progressPercent = (currentQuestionsIndex / quizQuestions.length) * 100;
  progressBar.style.width = progressPercent + "%";
  quesitonText.textContent = currentQuestion.question;

  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");

    //  datase itu apa? dataset adalah properti yang ada pada setiap elemen HTML di JavaScript. Ini memungkinkan Anda untuk membaca dan menulis data atribut kustom yang dimulai dengan data- di HTML Anda.

    button.dataset.correct = answer.correct;

    button.addEventListener("click", selectAnswer);
    answersContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  if (answersDisable) return;

  answersDisable = true;

  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionsIndex++;

    if (currentQuestionsIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  finalScoreSpan.textContent = score;

  const percentTage = (score / quizQuestions.length) * 100;

  if (percentTage === 100) {
    resultMassege.textContent = "Sempurna kamu sangat jenius!";
  } else if (percentTage >= 80) {
    resultMassege.textContent = "Great JOB!";
  } else if (percentTage >= 70) {
    resultMassege.textContent = "KERJA BAGUS! TAPI HARUS BELAJAR!";
  } else if (percentTage >= 60) {
    resultMassege.textContent = "GOOD! BUT NOT GOOD";
  } else {
    resultMassege.textContent = "Kamu akan mendapatakan yang terbaik!";
  }
}

function restartQuiz() {
  resultScreen.classList.remove("active");
  startQuiz();
}
