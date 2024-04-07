// Define quiz questions and answers
let back = document.querySelector('#back')
back.onclick = ()=>{
    location.href = "../../Home/index.html"
}
const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Jupiter", "Saturn", "Earth"],
        answer: "Mars"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const scoreElement = document.getElementById('score');

// Function to load question and options
function loadQuestion() {
    const q = quizData[currentQuestion];
    questionElement.textContent = q.question;

    optionsElement.innerHTML = ''; // Clear previous options

    q.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsElement.appendChild(button);
    });
}

// Function to check the selected answer
function checkAnswer(answer) {
    const q = quizData[currentQuestion];
    if (answer === q.answer) {
        score++;
        scoreElement.textContent = score;
        window.alert("Correct answer")
    }
    else{
        window.alert("Wrong answer")
        nextQuestion()
    }

}

// Function to load next question or show final score
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

// Function to end the quiz
function endQuiz() {
    questionElement.textContent = "Quiz Completed!";
    optionsElement.innerHTML = '';
    scoreElement.textContent = score + " / " + quizData.length;
}
 
// Initialize quiz
loadQuestion();
