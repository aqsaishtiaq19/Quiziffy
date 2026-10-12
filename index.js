
const question = [
    {
        question: "What is the largest organ of the human body?",
        answers: [
            { text: "Skin", correct: true },
            { text: "Blood", correct: false },
            { text: "Hair", correct: false }
        ]
    },
    {
        question: "After death, which stays viable longer?",
        answers: [
            { text: "Ears", correct: false },
            { text: "Corneas of the eyes", correct: true },
            { text: "Brain Cells", correct: false }
        ]
    },
    {
        question: "Which animal can live over 150 years?",
        answers: [
            { text: "Horse", correct: false },
            { text: "Elephant", correct: false },
            { text: "Giant tortoise", correct: true }
        ]
    },
    {
        question: "Which male animal carries young and gives birth?",
        answers: [
            { text: "Seal", correct: false },
            { text: "Seahorse", correct: true },
            { text: "Elephant", correct: false }
        ]
    },
    {
        question: "How do bats reproduce?",
        answers: [
            { text: "Lay eggs", correct: false },
            {
                text: "Give birth to live young but don't feed them milk",
                correct: false
            },
            { text: "Give birth and nurse with milk", correct: true }
        ]
    },
    {
        question: "Body-language experts commonly say feet pointing toward the door suggest the person is...",
        answers: [
            { text: "Interested", correct: false },
            { text: "Want to leave", correct: true },
            { text: "Want to talk", correct: false }
        ]
    },
    {
        question: "Which is the capital city of Punjab?",
        answers: [
            { text: "Islamabad", correct: false },
            { text: "Karachi", correct: false },
            { text: "Lahore", correct: true }
        ]
    }
];

// DOM elements
const questionElement = document.querySelector(".question");
const answerElement = document.getElementById("answers");
const nextElement = document.getElementById("next");

// Quiz variables
let questionIndex = 0;
let score = 0;

function startQuiz() {
    questionIndex = 0;
    score = 0;
    nextElement.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();

    const currentQuestion = question[questionIndex];
    const questionNo = questionIndex + 1;

    questionElement.innerHTML =
        questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const btn = document.createElement("button");

        btn.innerHTML = answer.text;
        btn.classList.add("btn");

        if (answer.correct) {
            btn.dataset.correct = "true";
        }

        btn.addEventListener("click", selectAnswer);
        answerElement.appendChild(btn);
    });
}

function resetState() {
    nextElement.style.display = "none";
    answerElement.innerHTML = "";
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerElement.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }

        button.disabled = true;
    });

    nextElement.style.display = "block";
}

function handleNextButton() {
    questionIndex++;

    if (questionIndex < question.length) {
        showQuestion();
    } else {
        resetState();

        questionElement.innerHTML =
            `Quiz completed! Your score: ${score}/${question.length}`;

        nextElement.innerHTML = "Play Again";
        nextElement.style.display = "block";
    }
}

nextElement.addEventListener("click", () => {
    if (questionIndex < question.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();