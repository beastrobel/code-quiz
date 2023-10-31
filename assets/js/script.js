//InnerHTML dynamic
//<h2>Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!</h2>
//<button id="start">Start Quiz</button>
//<h3>Question</h3>
//<button>1. </button>
//<button>2. </button>  
//<button>3. </button>  
//<button>4. </button>  

//Wraps code in JQuery function
$(function(){

var score = 0;

//Appends start page
var startScreen = $("<h2></h2>").text('Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!');
var startButton = $("<button></button>").text('Start Quiz');
startButton.attr('id', 'start');
$('#quiz').append(startScreen, startButton);

//Timer - Based on class example, modified for this project
function countdown() {
    var timeLeft = 75;
    var timeInterval = setInterval(function () {
      timeLeft--;
      $('#timer').textContent = 'Time: ' + timeLeft;

      if(timeLeft <= 0) {
        // Stops execution of action at set interval
        clearInterval(timeInterval);

        // Calls function to create and append image
        finish();
      }
    }, 1000);
}

//Removes start screen and questions
function remove() {
    $('h2').remove();
    $('h3').remove();
    $('button').remove();
    $('p').remove();
}

//Displays questions
function firstQuestion() {
    var questionOne = $("<h3></h3>").text('Commonly used data types DO NOT include:');
    let answerA = $("<button></button>").text('A. Strings');
    //Adds a class to the wrong answer
    answerA.attr('id', 'wrong');
    let answerB = $("<button></button>").text('B. Booleans');
    answerB.attr('id', 'wrong');
    let answerC = $("<button></button>").text('C. Alerts');
    //Adds a class to the correct answer, so that points can be added to the score variable
    answerC.attr('id', 'correct');
    let answerD = $("<button></button>").text('D. Numbers');
    answerB.attr('id', 'wrong');
    $('#quiz').append(questionOne, answerA, answerB, answerC, answerD);
    //Listens for correct answer and adds 20 points to score
    $('#correct').click(function(){
        score = score + 20;
        //Displays feedback to the user
        let feedback = $("<p></p>").text('Correct!');
        $('#quiz').append(feedback);
        setTimeout(remove, 1500);
        setTimeout(secondQuestion, 1500);
    });
    $('#wrong').click(function(){
        //Displays feedback to the user
        let feedback = $("<p></p>").text('Wrong!');
        $('#quiz').append(feedback);
        setTimeout(remove, 1500);
        setTimeout(secondQuestion, 1500);
    });  
}

function secondQuestion() {
    var questionOne = $("<h3></h3>").text('The condition in an if/else statement is enclosed with ___.');
    let answerA = $("<button></button>").text('A. Quotes');
    let answerB = $("<button></button>").text('B. Curly Brackets');
    let answerC = $("<button></button>").text('C. Parenthesis');
    let answerD = $("<button></button>").text('D. Square Brackets');
    $('#quiz').append(questionOne, answerA, answerB, answerC, answerD);
    $('button').click(function(){
        remove();
        thirdQuestion();
    });
}

function thirdQuestion() {
    var questionOne = $("<h3></h3>").text('Arrays in JavaScript can be used to store ___.');
    let answerA = $("<button></button>").text('A. Numbers and Strings');
    let answerB = $("<button></button>").text('B. Other Arrays');
    let answerC = $("<button></button>").text('C. Booleans');
    let answerD = $("<button></button>").text('D. All of the Above');
    $('#quiz').append(questionOne, answerA, answerB, answerC, answerD);
    $('button').click(function(){
        remove();
        fourthQuestion();
    });
}

function fourthQuestion() {
    var questionOne = $("<h3></h3>").text('String values must be enclosed within ___ when being assigned to variables.');
    let answerA = $("<button></button>").text('A. Commas');
    let answerB = $("<button></button>").text('B. Curly Brackets');
    let answerC = $("<button></button>").text('C. Quotes');
    let answerD = $("<button></button>").text('D. Parenthesis');
    $('#quiz').append(questionOne, answerA, answerB, answerC, answerD);
    $('button').click(function(){
        remove();
        fifthQuestion();
    });
}

function fifthQuestion() {
    var questionOne = $("<h3></h3>").text('A very useful tool used during development and debugging for printing content to the debugger is:');
    let answerA = $("<button></button>").text('A. JavaScript');
    let answerB = $("<button></button>").text('B. Terminal/Bash');
    let answerC = $("<button></button>").text('C. For Loops');
    let answerD = $("<button></button>").text('D. console.log');
    $('#quiz').append(questionOne, answerA, answerB, answerC, answerD);
    $('button').click(function(){
        remove();
        finish();
    });
}

function finish() {
    console.log ('Success!');
}

startButton.click(function(){
    countdown();
    remove();
    firstQuestion();
});

});