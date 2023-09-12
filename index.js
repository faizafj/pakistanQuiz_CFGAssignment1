const allQuestions = [
    {
        questionId: "questionId0",
        question: "Which continent is Pakistan in?",
        answers: ["Europe", "Asia", "Africa", "Australasia"],
        correctAnswer: "Asia",
        userAnswer: " "
    }, {
        questionId: "questionId1",
        question: "What is the national sport of Pakistan?",
        answers: ["Cricket", "Football", "Hockey", "Rugby"],
        correctAnswer: "Hockey",
        userAnswer: " "
    }, {
        questionId: "questionId2",
        question: "What is the capital city of Pakistan?",
        answers: ["Hyderabad", "Islamabad", "Lahore", "Karachi"],
        correctAnswer: "Islamabad",
        userAnswer: " "

    }, {
        questionId: "questionId3",
        question: "What is the national flower of Pakistan?",
        answers: ["Lotus", "Jasmine", "Rose", "Tulip"],
        correctAnswer: "Jasmine",
        userAnswer: " "
    }, {
        questionId: "questionId4",
        question: "What two colors are in the flag of Pakistan?",
        answers: ["Yellow and White", "Red and Green", "Green and White", "Green and Black"],
        correctAnswer: "Green and White",
        userAnswer: " "
    }
]

totalAnswered = localStorage.setItem("totalAnswered", "1") //sets the number of total answered questions to 0



function totalAnsweredCounter(questions) { //adds 1 to the number of questions the user has answered 
    counter = localStorage.getItem("totalAnswered")
    console.log("1   " + counter)
    if (counter < questions.length) {  //if questions answered is less than the amount of questions 
        counterValue = parseInt(counter) + 1
        localStorage.setItem("totalAnswered", counterValue)
        counter = localStorage.getItem("totalAnswered") //check
        console.log("counter = " + counter)
    }
    else {
    console.log("counter " + counter + "questions.length " + questions.length)

    quizEnd(counter, questions)
}}



//check if the users answers are correct ✅
function checkUserAnswer(questionsObj, questionId, userAnswer) {
    for (i = 0; i < questionsObj.length; i++) {
        if (questionsObj[i].questionId === questionId) { //checks for the questionId to know which question to reference
            totalAnsweredCounter(questionsObj) //+1 to total answered questions
            if (userAnswer === questionsObj[i].correctAnswer) { //checks users answer against the correct answer
                questionsContainer = document.getElementById('questionContainer' + questionId)
                correctHeader = document.getElementById('correctHeader' + questionId)
                correctHeader.innerText = ("Correct")
                // return ("Yes")
            } else {
                questionsContainer = document.getElementById('questionContainer' + questionId)
                correctHeader = document.getElementById('correctHeader' + questionId)
                correctHeader.innerText = ("Incorrect")

                // return ("Nope!")
            }
        }
    }
}


const getUserAnswer = (e) => { //function which gets the inner text value from a button
    e.preventDefault()
    userAnswer = e.target.innerText
    questionId = e.target.id
    console.log(questionId)
    console.log(userAnswer)
    result = checkUserAnswer(allQuestions, questionId, userAnswer)
    // console.log(result)
    // displayAnswerResult(result, questionId)
}

function displayQuestionAndAnswers(questionsObj) { //✅
    mainQuestionsContainer = document.getElementById('mainQuestionsContainer')
    for (i = 0; i < questionsObj.length; i++) {
        questionsContainer = document.createElement('article')
        questionsContainer.id = ('questionContainer' + questionsObj[i].questionId)
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
            answerButton.addEventListener("click", getUserAnswer, false)
        }

        correctHeader = document.createElement('h2')
        correctHeader.id = 'correctHeader' + questionsObj[i].questionId
        correctHeader.innerText = " "
        questionsContainer.appendChild(correctHeader)

    }
}

function quizEnd(questionsAnswered, questionsObj) {
    finalScoreContainer = document.getElementById('finalScore')
    totalCorrectText = document.getElementById('totalCorrect')
    totalIncorrectText = document.getElementById('totalIncorrect')

    totalCorrectText.innerText = "Hello"

    numberOfQuestions = questionsObj.length
    questionsAnswered = parseInt(questionsAnswered)

    console.log("noQuestions " + numberOfQuestions)

    console.log("questionsAnswered " + questionsAnswered)

    if (questionsAnswered === numberOfQuestions) {
        console.log("This should work")
        totalCorrectText.innerText = ("You got 5"  + " right!")
    } else {
        console.log("This doesnt work")
        totalCorrectText.innerText = "This doesnt work"
    }
}
displayQuestionAndAnswers(allQuestions)




//get value from input and check if the value is right answer ✅
//if value is correct add points ✅
//show if answer is correct or incorrect ✅
//Show results (needs to end the game at 5 questions answered, work our how many were right, how many were wrong )
//when one has been pressed disable the rest