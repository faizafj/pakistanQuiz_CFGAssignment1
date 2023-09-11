const allQuestions = [
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


const getUserAnswer = (e) => { //function which gets the inner text value from a button
    e.preventDefault()
    console.log(e.target.innerText)
    // console.log(e.target.id)
    return (e.target.innerText)
}


function displayQuestionAndAnswers(questionsObj) {
    mainQuestionsContainer = document.getElementById('mainQuestionsContainer')

    for (i = 0; i < questionsObj.length; i++) {

        questionsContainer = document.createElement('article')
        questionsContainer.id = ('questionContainer')
        mainQuestionsContainer.appendChild(questionsContainer)

        // console.log (questionsObj[i].question)
        questionHeader = document.createElement('h2')
        questionHeader.innerText = (questionsObj[i].question)
        questionsContainer.appendChild(questionHeader)


        for (j = 0; j < questionsObj[i].answers.length; j++) { //prints all answer choices as buttons
            // console.log(questionsObj[i].answers[j])
            answerButton = document.createElement('button')
            answerButton.innerText = (questionsObj[i].answers[j])
            answerButton.id = "questionId" + i
            questionsContainer.appendChild(answerButton)
            answerValue = answerButton.addEventListener("click", getUserAnswer, false)

            console.log (answerValue)


        }
    }
}

displayQuestionAndAnswers(allQuestions)


//get value from input and check if the value is right answer
//if value is correct add points
// store all answers or add points to something
//when one has been pressed disable the rest