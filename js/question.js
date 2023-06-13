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

const questionContainer = document.createElement("div")
const questionText = document.createElement("p")
// const answerContainer1 = document.createElement("div")
// const answer1 = document.createElement("p")
// const answerContainer2 = document.createElement("div")
// const answer2 = document.createElement("p")
// const answerContainer3 = document.createElement("div")
// const answer3 = document.createElement("p")
// const answerContainer4 = document.createElement("div")
// const answer4 = document.createElement("p")
const mainContent = document.getElementById("quest-container")
mainContent.appendChild(questionContainer)
questionContainer.appendChild(questionText)
// mainContent.appendChild(answerContainer1)
// answerContainer1.appendChild(answer1)
// mainContent.appendChild(answerContainer2)
// answerContainer1.appendChild(answer2)
// mainContent.appendChild(answerContainer3)
// answerContainer1.appendChild(answer3)
// mainContent.appendChild(answerContainer4)
// answerContainer1.appendChild(answer4)



// const selectQuestion = () => {
//     questions.forEach(el => {
//         questionText.innerText = el.question
//         allRadioButton.forEach(RadioButton => {
//             let answers = []
//             answers.push(el.correct_answer)
//             el.incorrect_answers.forEach(incorrect => {
//                 answers.push(incorrect)
//                 console.log(answers)
//             })
//             const radioText = document.createElement("label")
//             radioText.innerText(el.answer)
//         })
//     })
// }

const selectQuestion = () => {
    let counter = 0
    questions.forEach(el => {
        questionText.innerText = el.question
        console.log(questionText.innerText)
        const allAnswer = []
        allAnswer.push(el.correct_answer)
        el.incorrect_answers.forEach(incorrect => {
            allAnswer.push(incorrect)  // Tutte le risposte
        })
        // console.log(allAnswer)
        let selectedAnswer = []
        for ( let i = 0; i < allAnswer.length; i++) {
        const selectAnswer = () => {
        let rngAnswer = Math.floor(Math.random()*allAnswer.length)
        if (selectedAnswer.includes(allAnswer[rngAnswer])) {
            selectAnswer()
        } else {
        let answerDiv = document.createElement("div")
        answerDiv.innerHTML = `
        <label><input type = "radio" name = "answer" required/>${allAnswer[rngAnswer]}</label>`
        mainContent.appendChild(answerDiv)
        selectedAnswer.push(allAnswer[rngAnswer])}
        }
        selectAnswer()} 
        const questionNumber = document.getElementById("questionNumber") 
        counter += 1
        questionNumber.innerText = counter
    })
    }

selectQuestion()