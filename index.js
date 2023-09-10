allQuestions = [
    {
        question: "Which continent is Pakistan in?",
        answers: ["Europe", "Asia", "Africa", "Australasia"],
        correctAnswer: "Asia",
        userAnswer: " "
    }, {
        question: "What is the national sport of Pakistan?",
        answers: ["Cricket", "Football", "Hockey", "Rugby"],
        correctAnswer: "Hockey",
        userAnswer: " "
    }, {
        question: "What is the capital city of Pakistan?",
        answers: ["Hyderabad", "Islamabad", "Lahore", "Karachi"],
        correctAnswer: "Islamabad",
        userAnswer: " "

    }, {
        question: "What is the national flower of Pakistan?",
        answers: ["Lotus", "Jasmine", "Rose", "Tulip"],
        correctAnswer: "Jasmine",
        userAnswer: " "
    }, {
        question: "What two colors are in the flag of Pakistan?",
        answers: ["Yellow and White", "Red and Green", "Green and White", "Green and Black"],
        correctAnswer: "Green and White",
        userAnswer: " "
    }

]


function displayQuestionAndAnswers(questionsObj) {

    for (i = 0; i < questionsObj.length; i++) {
        // console.log (questionsObj[i].question)
        // console.log(questionsObj[i].userAnswer)

        questionHeader = document.createElement('h1')
        questionHeader.innerText = (questionsObj[i].question)
        document.body.appendChild(questionHeader)



        for (j = 0; j < questionsObj[i].answers.length; j++) { //prints possible answers
            // console.log(questionsObj[i].answers[j])
            answersHeader = document.createElement('h2')
            answersHeader.innerText = (questionsObj[i].answers[j])
            document.body.appendChild(answersHeader)

        }

        answerField = document.createElement('input')
        answerField.setAttribute("type", "text")
        answerField.setAttribute("placeholder", "enter your answer")
        document.body.appendChild(answerField)
        answerButton = document.createElement('button')
        answerButton.setAttribute("type", "button")
        answerButton.innerText = "Submit"
        answerButton.appendChild.submitValue
        document.body.appendChild(answerButton)

    }
}

displayQuestionAndAnswers(allQuestions)


