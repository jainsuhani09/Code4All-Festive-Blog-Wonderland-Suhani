let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount=0;
let count=11;
let countdown;
const quizArray = [
    {
        id: "0",
        question: "Which of the following is a programming language?",
        options: [
           " Python",
            "Photoshop", 
            "Microsoft Word",
            "Adobe Illustrator"
                    
        ],
        correct: "Python",
    },
    {
        id: "1",
        question: "Which programming paradigm emphasizes on writing code that is easy to read and maintain?",
        options: [
            "Procedural programming",
            "Object-oriented programming",
            "Functional programming",
            "Structured programming"
 
        ],
        correct: "Object-oriented programming",
    },

    {
        id: "2",
        question: "What is the term used for a block of code that is executed repeatedly until a certain condition is met?",
        options: [
            " Function",
            "Loop",
            "Condition",
            "Variable"
 
        ],
        correct: "Loop",
    },
    {
        id: "3",
        question: "Which data structure is used for storing a collection of elements in a non-linear fashion?",
        options: [
            "Array",
            "Stack",
            "Queue",
            "Tree"
 
        ],
        correct: " Tree",
    },
    {
        id: "4",
        question: "Which operator is used for exponentiation in most programming languages?",
        options: [
            "^",
            "*",
            "%",
            "**"
 
        ],
        correct: "**",
    },
    {
        id: "5",
        question: "Which programming language is used for developing Android apps?",
        options: [
            "Java",
            "C#",
            "Python",
            "Swift"
 
        ],
        correct: "Java",
    },
    {
        id: "6",
        question: "Which of the following is not a valid variable name in most programming languages?",
        options: [
            "myVariable",
            "123Variable",
            "_myVariable",
            "my_variable"
 
        ],
        correct: "123Variable",
    },
    {
        id: "7",
        question: " Which of the following is a type of sorting algorithm?",
        options: [
            "Binary search",
            " Quick sort",
            "Depth-first search",
            "Breadth-first search"
 
        ],
        correct: "Quick sort",
    },
    {
        id: "8",
        question: "Which of the following is not a web browser?",
        options: [
            "Chrome",
            "Safari",
            "Firefox",
            "Photoshop"
 
        ],
        correct: "Photoshop",
    },
    {
        id: "9",
        question: "Which keyword is used for defining a function in most programming languages?",
        options: [
            "def",
            "fun",
            "sub",
            "function"
 
        ],
        correct: "def",
    },
];
restart.addEventListener("click",() =>{
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});
nextBtn.addEventListener("click",(displayNext = ()=>{
    questionCount += 1;
    if (questionCount==quizArray.length) {
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        userScore.innerHTML = "Your Score is "+ scoreCount+"  out of "+questionCount;
    }
    else{
        countOfQuestion.innerHTML = questionCount+1+
        " of "+ quizArray.length + " Question ";
        quizDisplay(questionCount);
        count=11;
        clearInterval(countdown);
        timerDisplay();
    }
}));
const timerDisplay = () => {
    countdown =  setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count==0){
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    quizCards[questionCount].classList.remove("hide");
};
function quizCreater(){
    quizArray.sort(()=> Math.random() -0.5);
    for(let i of quizArray){
        i.options.sort(()=> Math.random() -0.5);
        let div = document.createElement("div");
        div.classList.add("container-mid","hide");
        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question "
    }
    let question_Div = document.createElement("p");
    question_Div.classList
}
