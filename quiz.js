//arrray of quiz questions, choices, and answers     
var questions = [{
        title: "Commonly used data types DO NOT include:",
        choices: ["strings( )", "booleans( )", "alerts( )", "numbers( )"],
        answer: "alerts( )"
    },
    {
        title: "Arrays in JavaScript can be used to store ________.",
        choices: ["numbers and strings( )", "other arrays( )", "booleans( )", "all of the above( )"],
        answer: "all of the above( )"
    },
    {
        title: " String values must be enclosed within _______ when being assigned to variables.",
        choices: ["commas( )", "curly brackets( )", "quotes( )", "parenthesis( )"],
        answer: "quotes( )"
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript( )", "terminal( )", "for loops( )", "console.log( )"],
        answer: "console.log( )"
    }
]

//setting variables 
var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;

//starts the countdown timer wheb user clicks 'start' 
function start() {

    timeLeft = 20;
    document.getElementById("timeLeft").innerHTML = timeLeft;

    timer = setInterval(function() {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;
        //end game when timer is below 0
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame(); 
        }
    }, 1000);

    next();
}

//stop timer to end game 
function endGame() {
    clearInterval(timer);

    var quizContent = `
    <h2>All done!</h2>
    <h3>Your final score is ` + score +  `.</h3>
    <input type="text" id="initials" placeholder="Initials"> 
    <button onclick="setScore()">Submit</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;
}

//store scores on local storage
function setScore() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("highscoreInitials",  document.getElementById('initials').value);
    getScore();
}

function getScore() {
    var quizContent = `
    <h1> High Scores</h1>
    <h2>` + localStorage.getItem("highscoreInitials") + ` -
    ` + localStorage.getItem("highscore") + `</h2><br> 
    
    <button onclick="clearScore()">Clear score!</button><button onclick="resetGame()">Play Again!</button>
    
    `;

    document.getElementById("quizBody").innerHTML = quizContent;
}

//deduct 5seconds from timer if incorrect answer
function incorrect() {
    timeLeft -= 5; 
    next();
}

//increases score by 25points if correct answer
function correct() {
    score += 25;
    next();
}

//loops through questions 
function next() {
    currentQuestion++;

    if (currentQuestion > questions.length - 1) {
        endGame();
        return;
    }

    var quizContent = "<h2>" + questions[currentQuestion].title + "</h2>"

    for (var buttonLoop = 0; buttonLoop < questions[currentQuestion].choices.length; buttonLoop++) {
        var buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>"; 
        buttonCode = buttonCode.replace("[CHOICE]", questions[currentQuestion].choices[buttonLoop]);
        if (questions[currentQuestion].choices[buttonLoop] == questions[currentQuestion].answer) {
            buttonCode = buttonCode.replace("[ANS]", "correct()");
        } else {
            buttonCode = buttonCode.replace("[ANS]", "incorrect()");
        }
        quizContent += buttonCode
    }


    document.getElementById("quizBody").innerHTML = quizContent;
}

