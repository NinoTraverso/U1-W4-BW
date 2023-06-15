const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
  ];

const questionContainer = document.getElementById("quest-container")
const addQuestion = (i) => {    // Aggiungo la domanda
  questionContainer.innerText = questions[i].question
  const btn = document.getElementsByTagName("button") 
  if ( questions.length === 0) btn[0].innerText = "GO TO RESULTS"
}

const answersCalculator = (i) => {    // Faccio un array di sole risposte
  const allAnswer = []
  allAnswer.push(questions[i].correct_answer)
  questions[i].incorrect_answers.forEach(answer => allAnswer.push(answer))
  return allAnswer
}

const addCheckedClass = () => {     // Aggiungo checked class quando cliccato 
  const allAnswerDiv = document.querySelectorAll(".answerDiv")
  allAnswerDiv.forEach( el => el.addEventListener("click", () => {
    allAnswerDiv.forEach( div => div.classList.remove("checked"))
    el.classList.add("checked")
  }))
}

const addAnswer = () => {           // Aggiungo le risposte
  let allAnswer = answersCalculator(i)
  const mainAnswer = document.getElementById("answer-container")
  for (let j = 0; j <= allAnswer.length; j++) {
    let rngAnswer = Math.floor(Math.random()*allAnswer.length)
    const answerDiv = document.createElement("div")
    answerDiv.classList.add("answerDiv")
    answerDiv.innerHTML = `
    <label><input type = "radio" name = "answer"/>${allAnswer[rngAnswer]}</label>
    `
    allAnswer.splice(rngAnswer, 1)
    mainAnswer.appendChild(answerDiv)
    j = 0
  }
  addCheckedClass()
}

const addQuestionNumber = () => {    // Aggiungo counter delle domande
  const questionNumber = document.getElementById("questionNumber")
  questionNumber.innerText = questionCounter
  questionCounter += 1
}

const addAnswerVerification = () => {   // Verifico se la risposta è corretta ed incremento se affermativo
  const divCorrectAnswer = document.querySelector(".checked")
  if (divCorrectAnswer === null) {
    i++ 
    if ( questions.length === 0) {
      localStorage.setItem("correctAnswer", correctAnswer)
      location.href ="results.html"
    }
    if ( questions.length > 0) {
      const allAnswerDiv = document.querySelectorAll(".answerDiv")
      allAnswerDiv.forEach(div => {
      div.classList.add("remove")
    })
    addQuestion(i)
    answersCalculator(i)
    addAnswer()
    addQuestionNumber(i)
    goToNextQuestion() 
    startTimer()
  }}
  if(divCorrectAnswer.innerText === questions[i].correct_answer) {
    correctAnswer++
  }
  }

const goToNextQuestion = () => {      // Aggiungo evento al click del bottone che lancia le funzioni precedenti o 
  const btn = document.getElementsByTagName("button")         // passa alla prossima pagina se è l'ultima domanda
  btn[0].addEventListener("click", () => {
    clearInterval(timerInterval)
    console.log(questions)  
    addAnswerVerification() 
    questions.splice( i, 1) 
      i = Math.floor(Math.random() * questions.length)
    if ( questions.length === 0) {
      localStorage.setItem("correctAnswer", correctAnswer)
      location.href ="results.html"                        
    }
    if ( questions.length > 0) {
      const allAnswerDiv = document.querySelectorAll(".answerDiv")
      allAnswerDiv.forEach(div => {
      div.classList.add("remove")
    })
    addQuestion(i)
    answersCalculator(i)
    addAnswer()
    addQuestionNumber(i)
    startTimer()
    }
  })
}

let i = Math.floor(Math.random() * questions.length)
let questionCounter = 1
let correctAnswer = 0
addQuestion(i)
addAnswer()           // Creo la prima pagina di domande e risposte
addQuestionNumber(i)
goToNextQuestion()    // Attivo il bottone che richiama le funzioni precedenti


// Timer Function

let timeLimit = 60
let timePassed = 0
let timeLeft = timeLimit
let fullDashArray = 283
const remainingTime = document.querySelector("#remainingTime")
remainingTime.innerText = timeLeft

let timerInterval = 0

const startTimer = () => {
  timeLimit = 60
  timePassed = 0
  timeLeft = timeLimit
  fullDashArray = 283
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", fullDashArray)
  const remainingTime = document.querySelector("#remainingTime")
  remainingTime.innerText = timeLeft
  timerInterval = setInterval(() => {
    timePassed += 1 
    timeLeft = timeLimit - timePassed
    remainingTime.innerText = timeLeft
    setCircleDashArray();
  }, 1000)
}
startTimer()

// Divides time left by the defined time limit.
function calculateTimeFraction() {
  return timeLeft / timeLimit;
}
    
// Update the dasharray value as time passes, starting with 283
function setCircleDashArray() {
  const circleDashArray = [(calculateTimeFraction() * fullDashArray.toFixed(0)), 283]
  if ( circleDashArray[0] <= 0) {
    clearInterval(timerInterval)
    addAnswerVerification()
      i++ 
    if ( i > questions.length - 1) {
      localStorage.setItem("correctAnswer", correctAnswer)
      location.href ="results.html"
    }
    if ( i < questions.length ) {
      const allAnswerDiv = document.querySelectorAll(".answerDiv")
      allAnswerDiv.forEach(div => {
      div.classList.add("remove")
    })
    addQuestion(i)
    answersCalculator(i)
    addAnswer()
    addQuestionNumber(i)
    goToNextQuestion() 
    startTimer()
  }}
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDashArray);
}
