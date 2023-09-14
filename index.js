const allQuestions = [
    {
        questionId: "questionId0",
        question: "Which continent is Pakistan in?",
        answers: ["Europe", "Asia", "Africa", "Australasia"],
        correctAnswer: "Asia"

    }, {
        questionId: "questionId1",
        question: "What is the national sport of Pakistan?",
        answers: ["Cricket", "Football", "Hockey", "Rugby"],
        correctAnswer: "Hockey"

    }, {
        questionId: "questionId2",
        question: "What is the capital city of Pakistan?",
        answers: ["Hyderabad", "Islamabad", "Lahore", "Karachi"],
        correctAnswer: "Islamabad"

    }, {
        questionId: "questionId3",
        question: "What is the national flower of Pakistan?",
        answers: ["Lotus", "Jasmine", "Rose", "Tulip"],
        correctAnswer: "Jasmine"

    }, {
        questionId: "questionId4",
        question: "Which is the flag of Pakistan?",
        answers: ["🇰🇼", "🇵🇰", "🇲🇷", "🇹🇷"],
        correctAnswer: "🇵🇰"

    },
    {
        questionId: "questionId5",
        question: "What is one of the main languages spoken in Pakistan?",
        answers: ["Urdu", "Hindi", "Pakistani", "Farsi"],
        correctAnswer: "Urdu"
    }
]
points = localStorage.setItem("points", "0") //set the points to 0, and add to local storage
totalAnswered = localStorage.setItem("totalAnswered", "1") //sets the number of total answered questions to 0

function addPoints(questions) { //adds points to the currentPoints to see how many the user has gotten correct.
    currentPoints = localStorage.getItem("points")
    if (currentPoints <= questions.length) {  //if points is less than the length of questions 
        pointsValue = parseInt(currentPoints) + 1
        localStorage.setItem("points", pointsValue)
        currentPoints = localStorage.getItem("points")
    }
}

function totalAnsweredCounter(questions) { //adds 1 to the number of questions the user has answered 
    counter = localStorage.getItem("totalAnswered")
    if (counter < questions.length) {  //if questions answered is less than the amount of questions 
        counterValue = parseInt(counter) + 1
        localStorage.setItem("totalAnswered", counterValue)
        counter = localStorage.getItem("totalAnswered") //check
        // console.log("counter = " + counter)
    }
    else {
        console.log("counter " + counter + "questions.length " + questions.length)
        quizEnd(counter, questions)
    }
}

function disableButtons(questionId) { //disable to the buttons after question has been answered
    buttons = document.getElementsByClassName(questionId)
    console.log(questionId)
    for (i = 0; i < buttons.length; i++) {
        console.log(questionId)
        buttons[i].disabled = true
    }
}

//check if the users answers are correct 
function checkUserAnswer(questionsList, questionId, userAnswer) {
    disableButtons(questionId)
    for (i = 0; i < questionsList.length; i++) {
        if (questionsList[i].questionId === questionId) { //checks for the questionId to know which question to reference
            if (userAnswer === questionsList[i].correctAnswer) { //checks users answer against the correct answer
                questionsContainer = document.getElementById('questionContainer' + questionId)
                correctHeader = document.getElementById('correctHeader' + questionId)
                correctHeader.innerText = ("Correct ✅")
                addPoints(questionsList, questionsList)
                totalAnsweredCounter(questionsList) //+1 to total answered questions
            } else {
                questionsContainer = document.getElementById('questionContainer' + questionId)
                correctHeader = document.getElementById('correctHeader' + questionId)
                correctHeader.innerText = ("Incorrect ❌")
                totalAnsweredCounter(questionsList) //+1 to total answered questions
               
            }
        }
    }
}


const getUserAnswer = (e) => { //event for button click
    e.preventDefault()
    userAnswer = e.target.innerText
    questionId = e.target.id
    // console.log(questionId)
    // console.log(userAnswer)
    result = checkUserAnswer(allQuestions, questionId, userAnswer)
    // console.log(result)
}

function displayQuestionAndAnswers(questionsList) {
    mainQuestionsContainer = document.getElementById('mainQuestionsContainer')
    for (i = 0; i < questionsList.length; i++) {  //prints all the questions
        questionsContainer = document.createElement('article')
        questionsContainer.id = ('questionContainer' + questionsList[i].questionId)
        mainQuestionsContainer.appendChild(questionsContainer)

        // console.log (questionsList[i].question)
        questionHeader = document.createElement('h2')
        questionHeader.innerText = questionsList[i].question
        questionHeader.id = "questionHeader"
        questionsContainer.appendChild(questionHeader)


        for (j = 0; j < questionsList[i].answers.length; j++) { //prints all answer choices as buttons
            // console.log(questionsList[i].answers[j])
            answerButton = document.createElement('button')
            answerButton.innerText = (questionsList[i].answers[j])
            answerButton.setAttribute('class', "questionId" + i)
            answerButton.id = "questionId" + i
            questionsContainer.appendChild(answerButton)
            answerButton.addEventListener("click", getUserAnswer, false)
        }

        correctHeader = document.createElement('h2')
        correctHeader.id = 'correctHeader' + questionsList[i].questionId
        correctHeader.innerText = " "
        questionsContainer.appendChild(correctHeader)

    }
}

function quizEnd(questionsAnswered, questionsList) {
    finalScoreContainer = document.getElementById('finalScoreContainer')
    totalCorrectText = document.getElementById('totalCorrect')
    totalIncorrectText = document.getElementById('totalIncorrect')
    adviceText = document.getElementById('advice')
    clickToRestartLink = document.getElementById('clickToRestartLink')

    numberOfQuestions = questionsList.length
    questionsAnswered = parseInt(questionsAnswered)
    totalPoints = localStorage.getItem("points")

    // console.log("noQuestions " + numberOfQuestions)
    // console.log("totalPoints " + totalPoints)
    // console.log("questionsAnswered " + questionsAnswered)

    if (questionsAnswered === numberOfQuestions) { //If all questions were answered
        finalScoreContainer.removeAttribute('hidden')
        if (parseInt(totalPoints) === numberOfQuestions) { //if all questions are right
            totalCorrectText.innerText = (`Congrats! You got all ${parseInt(totalPoints)}  questions right!`)
            adviceText.innerText = ("You clearly know a lot about Pakistan!")
            clickToRestartLink.removeAttribute('hidden')
            totalCorrectText.scrollIntoView();
        } else if (parseInt(totalPoints) === 0) { //if some questions are wrong
            totalIncorrectText.innerText = (`Oh dear! You got ALL the questions wrong!`)
            adviceText.innerText = ("It might be time do a little bit of research!")
            clickToRestartLink.removeAttribute('hidden')
            totalIncorrectText.scrollIntoView();
        } else { //if all questions are wrong
            totalCorrectText.innerText = (`You got ${parseInt(totalPoints)} questions right.`)
            totalIncorrectText.innerText = (`And you got  ${(numberOfQuestions - parseInt(totalPoints))} questions wrong!`)
            adviceText.innerText = ("Better luck next time!")
            clickToRestartLink.removeAttribute('hidden')
            totalCorrectText.scrollIntoView();
        }
    }
}
displayQuestionAndAnswers(allQuestions)




//get value from input and check if the value is right answer ✅
//if value is correct add points ✅
//show if answer is correct or incorrect ✅
//Show results (needs to end the game at 6 questions answered, work our how many were right, how many were wrong )✅
//when one has been pressed disable the rest