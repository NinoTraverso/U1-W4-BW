const questions = [       // EASY QUESTIONS
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


const mediumQuestions = [        //MEDIUM QUESTIONS
  {
    category:"Science: Computers",
    type:"boolean",
    difficulty:"medium",
    question:'The common software-programming acronym "I18N" comes from the term "Interlocalization".',
    correct_answer:"False",
    incorrect_answers:["True"],
  },
  {
    category:"Science: Computers",
    type:"multiple",
    difficulty:"medium",
    question:"What did the name of the Tor Anonymity Network orignially stand for?",
    correct_answer:"The Onion Router",
    incorrect_answers:["The Only Router","The Orange Router","The Ominous Router"],
  },
  {
    category:"Science: Computers",
    type:"multiple",
    difficulty:"medium",
    question:"Which coding language was the #1 programming language in terms of usage on GitHub in 2015?",
    correct_answer:"JavaScript",
    incorrect_answers:["C#","Python","PHP"]
  },
  {
    category:"Science: Computers",
    type:"multiple",
    difficulty:"medium",
    question:'What does "LCD" stand for?',
    correct_answer:"Liquid Crystal Display",
    incorrect_answers:["Language Control Design","Last Common Difference","Long Continuous Design"]
  },
  {
    category:"Science: Computers",
    type:"boolean",
    difficulty:"medium",
    question:"The first dual-core CPU was the Intel Pentium D.",
    correct_answer:"False",
    incorrect_answers:["True"]
  },
  {
    category:"Science: Computers",
    type:"multiple",
    difficulty:"medium",
    question:".rs is the top-level domain for what country?",
    correct_answer:"Serbia",
    incorrect_answers:["Romania","Russia","Rwanda"]
  },
  {
    category:"Science: Computers",
    type:"multiple",
    difficulty:"medium",
    question:"What was the first Android version specifically optimized for tablets?",
    correct_answer:"Honeycomb",
    incorrect_answers:["Eclair","Froyo","Marshmellow"]
  },
  {
    category:"Science: Computers",
    type:"multiple",
    difficulty:"medium",
    question:"Which of these people was NOT a founder of Apple Inc?",
    correct_answer:"Jonathan Ive",
    incorrect_answers:["Steve Jobs","Ronald Wayne","Steve Wozniak"]
  },
  {
    category:"Science: Computers",
    type:"boolean",
    difficulty:"medium",
    question:"Linus Sebastian is the creator of the Linux kernel, which went on to be used in Linux, Android, and Chrome OS.",
    correct_answer:"False",
    incorrect_answers:["True"]
  },
  {
    category:"Science: Computers",
    type:"multiple",
    difficulty:"medium",
    question:"How many bytes are in a single Kibibyte?",
    correct_answer:"1024",
    incorrect_answers:["2400","1000","1240"]
  }
]


const hardQuestions = [           // HARD QUESTIONS
  {
    category:"Science: Computers",
    type:"multiple",
    difficulty:"hard",
    question:"The Harvard architecture for micro-controllers added which additional bus?",
    correct_answer:"Instruction",
    incorrect_answers:["Address","Data","Control"]
  },
  {
    category:"Science: Computers",
    type:"multiple",
    difficulty:"hard",
    question:"What was the name of the security vulnerability found in Bash in 2014?",
    correct_answer:"Shellshock",
    incorrect_answers:["Heartbleed","Bashbug","Stagefright"]
  },
  {
    category:"Science: Computers",
    type:"multiple",
    difficulty:"hard",
    question:"What port does HTTP run on?",
    correct_answer:"80",
    incorrect_answers:["53","443","23"]
  },
  {
    category:"Science: Computers",
    type:"boolean",
    difficulty:"hard",
    question:"DHCP stands for Dynamic Host Configuration Port.",
    correct_answer:"False",
    incorrect_answers:["True"]
  },
  {
    category:"Science: Computers",
    type:"multiple",
    difficulty:"hard",
    question:"Which of these was the name of a bug found in April 2014 in the publicly available OpenSSL cryptography library?",
    correct_answer:"Heartbleed",
    incorrect_answers:["Shellshock","Corrupted Blood","Shellscript"]
  },
  {
    category:"Science: Computers",
    type:"multiple",
    difficulty:"hard",
    question:"Who is the original author of the realtime physics engine called PhysX?",
    correct_answer:"NovodeX",
    incorrect_answers:["Ageia","Nvidia","AMD"]
  },
  {
    category:"Science: Computers",
    type:"multiple",
    difficulty:"hard",
    question:"Which data structure does FILO apply to?",
    correct_answer:"Stack",
    incorrect_answers:["Queue","Heap","Tree"]
  },
  {
    category:"Science: Computers",
    type:"multiple",
    difficulty:"hard",
    question:"America Online (AOL) started out as which of these online service providers?",
    correct_answer:"Quantum Link",
    incorrect_answers:["CompuServe","Prodigy","GEnie"]
  },
  {
    category:"Science: Computers",
    type:"multiple",
    difficulty:"hard",
    question:"Which of the following computer components can be built using only NAND gates?",
    correct_answer:"ALU",
    incorrect_answers:["CPU","RAM","Register"]
  },
  {
    category:"Science: Computers",
    type:"multiple",
    difficulty:"hard",
    question:"What is the codename of the eighth generation Intel Core micro-architecture launched in October 2017?",
    correct_answer:"Coffee Lake",
    incorrect_answers:["Sandy Bridge","Skylake","Broadwell"]
  }
]


const startButton = document.getElementById("start")
startButton.addEventListener("click", () => {
  const hiddenItems = document.querySelectorAll(".hidden")
  hiddenItems.forEach(el => el.classList.remove("hidden"))
  const divSelectedDifficulty = document.querySelector(".checked")
  switch ( divSelectedDifficulty.innerText) {
    case "EASY" : difficultyQuestion = questions
    break
    case "MEDIUM": difficultyQuestion = mediumQuestions
    break
    case "HARD": difficultyQuestion = hardQuestions
    break
  }
  const startElements = document.querySelector(".difficultySelection")
  startElements.classList.add("hidden") 

  addQuestion(i, difficultyQuestion)
  addAnswer(difficultyQuestion)           
  addQuestionNumber(i)
  goToNextQuestion(difficultyQuestion) 
  startTimer(difficultyQuestion)
})



const questionContainer = document.getElementById("quest-container")
const addQuestion = (i, difficultyQuestion) => {    // Aggiungo la domanda
  questionContainer.innerText = difficultyQuestion[i].question
  const btn = document.getElementsByTagName("button") 
  if ( difficultyQuestion.length === 1) btn[1].innerText = "GO TO RESULTS"
}

const answersCalculator = (i, difficultyQuestion) => {    // Faccio un array di sole risposte
  const allAnswer = []
  allAnswer.push(difficultyQuestion[i].correct_answer)
  difficultyQuestion[i].incorrect_answers.forEach(answer => allAnswer.push(answer))
  return allAnswer
}

const addCheckedClass = () => {     // Aggiungo checked class quando cliccato 
  const allAnswerDiv = document.querySelectorAll(".answerDiv")
  allAnswerDiv.forEach( el => el.addEventListener("click", () => {
    allAnswerDiv.forEach( div => div.classList.remove("checked"))
    el.classList.add("checked")
  }))
}

addCheckedClass()

const addAnswer = (difficultyQuestion) => {           // Aggiungo le risposte
  let allAnswer = answersCalculator(i, difficultyQuestion)
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

const addAnswerVerification = (difficultyQuestion) => {   // Verifico se la risposta è corretta ed incremento se affermativo
  const divCorrectAnswer = document.querySelector(".checked")
  if (divCorrectAnswer === null) {
    i = Math.floor(Math.random() * difficultyQuestion.length)
    if ( difficultyQuestion.length === 0) {
      localStorage.setItem("correctAnswer", correctAnswer)
      location.href ="results.html"
    }
    if ( difficultyQuestion.length > 0) {
      const allAnswerDiv = document.querySelectorAll(".answerDiv")
      allAnswerDiv.forEach(div => {
      div.classList.add("remove")
    })
    addQuestion(i, difficultyQuestion)
    answersCalculator(i, difficultyQuestion)
    addAnswer(difficultyQuestion)
    addQuestionNumber(i)
    goToNextQuestion(difficultyQuestion) 
    startTimer(difficultyQuestion)
  }}
  if(divCorrectAnswer.innerText === difficultyQuestion[i].correct_answer) {
    correctAnswer++
  }
  }

const goToNextQuestion = (difficultyQuestion) => {      // Aggiungo evento al click del bottone che lancia le funzioni precedenti o 
  const btn = document.getElementsByTagName("button")         // passa alla prossima pagina se è l'ultima domanda
  btn[1].addEventListener("click", () => {
    clearInterval(timerInterval) 
    addAnswerVerification(difficultyQuestion) 
    difficultyQuestion.splice( i, 1) 
      i = Math.floor(Math.random() * difficultyQuestion.length)
    if ( difficultyQuestion.length === 0) {
      localStorage.setItem("correctAnswer", correctAnswer)
      location.href ="results.html"                        
    }
    if ( difficultyQuestion.length > 0) {
      const allAnswerDiv = document.querySelectorAll(".answerDiv")
      allAnswerDiv.forEach(div => {
      div.classList.add("remove")
    })
    addQuestion(i, difficultyQuestion)
    answersCalculator(i, difficultyQuestion)
    addAnswer(difficultyQuestion)
    addQuestionNumber(i)
    startTimer(difficultyQuestion)
    }
  })
}

let i = Math.floor(Math.random() * questions.length)
let questionCounter = 1
let correctAnswer = 0


// Timer Function

let timeLimit = 30
let timePassed = 0
let timeLeft = timeLimit
let fullDashArray = 283
const remainingTime = document.querySelector("#remainingTime")
remainingTime.innerText = timeLeft

let timerInterval = 0

const startTimer = (difficultyQuestion) => {
  timeLimit = 30
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
    setCircleDashArray(difficultyQuestion);
    if( timeLeft <= 10) {
      remainingTime.classList.add("alertTime")
    }
  }, 1000)
}


// Divides time left by the defined time limit.
function calculateTimeFraction() {
  return timeLeft / timeLimit;
}
    
// Update the dasharray value as time passes, starting with 283
function setCircleDashArray(difficultyQuestion) {
  const circleDashArray = [(calculateTimeFraction() * fullDashArray.toFixed(0)), 283]
  if ( circleDashArray[0] <= 0) {
    clearInterval(timerInterval)
    addAnswerVerification(difficultyQuestion)
    difficultyQuestion.splice( i, 1) 
    i = Math.floor(Math.random() * difficultyQuestion.length)
    if ( difficultyQuestion.length === 0) {
      localStorage.setItem("correctAnswer", correctAnswer)
      location.href ="results.html"
    }
    if ( difficultyQuestion.length > 0) {
      const allAnswerDiv = document.querySelectorAll(".answerDiv")
      allAnswerDiv.forEach(div => {
      div.classList.add("remove")
    })
    addQuestion(i, difficultyQuestion)
    answersCalculator(i, difficultyQuestion)
    addAnswer(difficultyQuestion)
    addQuestionNumber(i)
    goToNextQuestion(difficultyQuestion) 
    startTimer(difficultyQuestion)
  }}
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDashArray);
}
