const quizData = [
    {
        question: "Which among the following is not an operating system?",
        options: ["UNIX", "LINUX", "OS X", "PITEX"],
        correct: "PITEX"
    },
    {
        question: "1 Gigabyte (Gb) =",
        options: ["1024 MB", "1000 MB", "1200 MB", "1275 MB"],
        correct: "1024 MB"
    },
    {
        question: "A web address is usually known as",
        options: ["URL","UWL","WWW","UVL"],
        correct: "URL"
    },
    {
        question: "Who has designed the Java programing language?",
        options: ["Rasmus Lerdorf","Guido van Rossum","Brendan Eich","James Gosling"],
        correct: "James Gosling"
    },
    {
        question: "Which is the shortcut key to Zoom in Windows?",
        options: ["Shift + [+]","Win + [+]","Win + F4","Alt + [+]"],
        correct: "Win + [+]"
    },
    {
        question: "Which among the following is not an input device?",
        options: ["Optical Character Recognition","Speech Recognition System","Touch Screen","Screen Image Projector"],
        correct: "Screen Image Projector"
    }
    
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const scoreElement = document.getElementById('score');

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.textContent = currentQuizData.question;

    optionsContainer.innerHTML = "";
    currentQuizData.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = `${index + 1}. ${option}`;
        optionElement.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(optionElement);
    });
}

function checkAnswer(userAnswer) {
    const currentQuizData = quizData[currentQuestion];
    if (userAnswer === currentQuizData.correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.textContent = "Congratulations on completing the Quiz!";
    optionsContainer.innerHTML = "";
    nextButton.style.display = "none";
    scoreElement.textContent = `Your Score: ${score}`;
}

loadQuestion();
