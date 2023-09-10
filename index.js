const questionOne = {
    question: "Which continent is Pakistan in?",
    answers: ["Europe", "Asia", "Africa", "Australasia"],
    correctAnswer: "Asia"
}
const questionTwo = {
    question: "What is the national sport of Pakistan?",
    answers: ["Cricket", "Football", "Hockey", "Rugby"],
    correctAnswer: "Hockey"
}
const questionThree = {
    question: "What is the capital city of Pakistan?",
    answers: ["Hyderabad", "Islamabad", "Lahore", "Karachi"],
    correctAnswer: "Islamabad"
}
const questionFour = {
    question: "What is the national flower of Pakistan?",
    answers: ["Lotus", "Jasmine", "Rose", "Tulip"],
    correctAnswer: "Jasmine"
}
const questionFive = {
    question: "What two colors are in the flag of Pakistan?",
    answers: ["Yellow and White", "Red and Green", "Green and White", "Green and Black"],
    correctAnswer: "Green and White"
}

function displayQuestionAndAnswers (currentQuestion){
    console.log(currentQuestion.question) //prints question
    for (i = 0; i < currentQuestion.answers.length; i++){ //prints possible answers
        console.log (currentQuestion.answers[i])
    }
}

displayQuestionAndAnswers(questionOne)
displayQuestionAndAnswers(questionTwo)
displayQuestionAndAnswers(questionThree)
displayQuestionAndAnswers(questionFour)
displayQuestionAndAnswers(questionFive)