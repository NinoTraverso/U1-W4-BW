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

let i = 0

const questionContainer = document.getElementById("quest-container")
const addQuestion = (i) => {    // Aggiungo la domanda
  questionContainer.innerText = questions[i].question
}
addQuestion(i)

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
addAnswer()

const addQuestionNumber = (i) => {    // Aggiungo counter delle domande
  const questionNumber = document.getElementById("questionNumber")
  questionNumber.innerText = i+1
}
addQuestionNumber(i)


let correctAnswer = 0
const addAnswerVerification = () => {   // Verifico se la risposta è corretta ed incremento se affermativo
  const divCorrectAnswer = document.querySelector(".checked")
  if(divCorrectAnswer.innerText === questions[i].correct_answer) correctAnswer++
  }


const goToNextQuestion = () => {
  const btn = document.getElementsByTagName("button")
  // if(i>9){
  //   btn[0].addEventListener('click',()=>
  //   window.location.href='results.html')
  
  btn[0].addEventListener("click", () => {
    addAnswerVerification()
    i++
    if ( i > questions.length - 1) {
      location.href ="results.html"
    }
    const allAnswerDiv = document.querySelectorAll(".answerDiv")
    allAnswerDiv.forEach(div => {
      div.classList.add("remove")
    })
    if(i>9){
      window.location.href='results.html'
    }

    
    addQuestion(i)
    answersCalculator(i)
    addAnswer()
    addQuestionNumber(i)
  })
}
goToNextQuestion()

