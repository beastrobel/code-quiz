 //Wraps code in JQuery function
$(function(){

var score = 0;
var answerA = '';
var answerB = '';
var answerC = '';
var answerD = '';
var feedback = '';

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
      $('#timer').text('Time: ' + timeLeft);

      if(timeLeft <= 0) {
        // Stops execution of action at set interval
        clearInterval(timeInterval);

        // Calls function to create and append image
        remove();
        finish();
      }
    }, 1000);
}
 
//Removes start screen and questions
function remove() {
    $('h2').remove();
    $('h3').remove();
    $('button').remove();
    $('#feedback').remove();
}

//Displays questions
function firstQuestion() {
    var questionOne = $("<h3></h3>").text('Commonly used data types DO NOT include:');
    answerA = $("<button></button>").text('A. Strings');
    //Adds a class to the wrong answer
    answerA.attr('id', 'wrong');
    answerB = $("<button></button>").text('B. Booleans');
    answerB.attr('id', 'wrong');
    answerC = $("<button></button>").text('C. Alerts');
    //Adds a class to the correct answer, so that points can be added to the score variable
    answerC.attr('id', 'correct');
    answerD = $("<button></button>").text('D. Numbers');
    answerB.attr('id', 'wrong');
    $('#quiz').append(questionOne, answerA, answerB, answerC, answerD);
    //Listens for correct answer and adds 20 points to score
    $('#correct').click(function(){
        score = score + 20;
        console.log(score);
        //Displays feedback to the user
        feedback = $("<p></p>").text('Correct!');
        //Adds id to feedback so that it can be removed later
        feedback.attr('id', 'feedback');
        $('#quiz').append(feedback);
        setTimeout(remove, 1000);
        setTimeout(secondQuestion, 1000);
    });
    $('#wrong').click(function(){
        //Displays feedback to the user
        feedback = $("<p></p>").text('Wrong!');
        //Adds id to feedback so that it can be removed later
        feedback.attr('id', 'feedback');
        $('#quiz').append(feedback);
        setTimeout(remove, 1000);
        setTimeout(secondQuestion, 1000);
    });  
}

function secondQuestion() {
    var questionTwo = $("<h3></h3>").text('The condition in an if/else statement is enclosed with ___.');
    answerA = $("<button></button>").text('A. Quotes');
    answerA.attr('id', 'wrong');
    answerB = $("<button></button>").text('B. Curly Brackets');
    answerB.attr('id', 'wrong');
    answerC = $("<button></button>").text('C. Parenthesis');
    answerA.attr('id', 'correct');
    answerD = $("<button></button>").text('D. Square Brackets');
    answerA.attr('id', 'wrong');
    $('#quiz').append(questionTwo, answerA, answerB, answerC, answerD);
    //Listens for correct answer and adds 20 points to score
    $('#correct').click(function(){
        score = score + 20;
        console.log(score);
        //Displays feedback to the user
        feedback = $("<p></p>").text('Correct!');
        //Adds id to feedback so that it can be removed later
        feedback.attr('id', 'feedback');
        $('#quiz').append(feedback);
        setTimeout(remove, 1000);
        setTimeout(thirdQuestion, 1000);
    });
    $('#wrong').click(function(){
        //Displays feedback to the user
        feedback = $("<p></p>").text('Wrong!');
        //Adds id to feedback so that it can be removed later
        feedback.attr('id', 'feedback');
        $('#quiz').append(feedback);
        setTimeout(remove, 1000);
        setTimeout(thirdQuestion, 1000);
    });  
}

function thirdQuestion() {
    var questionThree = $("<h3></h3>").text('Arrays in JavaScript can be used to store ___.');
    answerA = $("<button></button>").text('A. Numbers and Strings');
    answerA.attr('id', 'wrong');
    answerB = $("<button></button>").text('B. Other Arrays');
    answerB.attr('id', 'wrong');
    answerC = $("<button></button>").text('C. Booleans');
    answerC.attr('id', 'wrong');
    answerD = $("<button></button>").text('D. All of the Above');
    answerA.attr('id', 'correct');
    $('#quiz').append(questionThree, answerA, answerB, answerC, answerD);
    //Listens for correct answer and adds 20 points to score
    $('#correct').click(function(){
        score = score + 20;
        console.log(score);
        //Displays feedback to the user
        feedback = $("<p></p>").text('Correct!');
        //Adds id to feedback so that it can be removed later
        feedback.attr('id', 'feedback');        
        $('#quiz').append(feedback);
        setTimeout(remove, 1000);
        setTimeout(fourthQuestion, 1000);
    });
    $('#wrong').click(function(){
        //Displays feedback to the user
        feedback = $("<p></p>").text('Wrong!');
        //Adds id to feedback so that it can be removed later
        feedback.attr('id', 'feedback');        
        $('#quiz').append(feedback);
        setTimeout(remove, 1000);
        setTimeout(fourthQuestion, 1000);
    });  
}

function fourthQuestion() {
    var questionFour = $("<h3></h3>").text('String values must be enclosed within ___ when being assigned to variables.');
    answerA = $("<button></button>").text('A. Commas');
    answerA.attr('id', 'wrong');
    answerB = $("<button></button>").text('B. Curly Brackets');
    answerA.attr('id', 'wrong');
    answerC = $("<button></button>").text('C. Quotes');
    answerA.attr('id', 'correct');
    answerD = $("<button></button>").text('D. Parenthesis');
    answerA.attr('id', 'wrong');
    $('#quiz').append(questionFour, answerA, answerB, answerC, answerD);
    //Listens for correct answer and adds 20 points to score
    $('#correct').click(function(){
        score = score + 20;
        console.log(score);
        //Displays feedback to the user
        feedback = $("<p></p>").text('Correct!');
        //Adds id to feedback so that it can be removed later
        feedback.attr('id', 'feedback');        
        $('#quiz').append(feedback);
        setTimeout(remove, 1000);
        setTimeout(fifthQuestion, 1000);
    });
    $('#wrong').click(function(){
        //Displays feedback to the user
        feedback = $("<p></p>").text('Wrong!');
        //Adds id to feedback so that it can be removed later
        feedback.attr('id', 'feedback');        
        $('#quiz').append(feedback);
        setTimeout(remove, 1000);
        setTimeout(fifthQuestion, 1000);
    });  
}

function fifthQuestion() {
    var questionFive = $("<h3></h3>").text('A very useful tool used during development and debugging for printing content to the debugger is:');
    answerA = $("<button></button>").text('A. JavaScript');
    answerA.attr('id', 'wrong');
    answerB = $("<button></button>").text('B. Terminal/Bash');
    answerB.attr('id', 'wrong');
    answerC = $("<button></button>").text('C. For Loops');
    answerC.attr('id', 'wrong');
    answerD = $("<button></button>").text('D. console.log');
    answerD.attr('id', 'correct');
    $('#quiz').append(questionFive, answerA, answerB, answerC, answerD);
    //Listens for correct answer and adds 20 points to score
    $('#correct').click(function(){
        score = score + 20;
        console.log(score);
        //Displays feedback to the user
        feedback = $("<p></p>").text('Correct!');
        //Adds id to feedback so that it can be removed later
        feedback.attr('id', 'feedback');        
        $('#quiz').append(feedback);
        setTimeout(remove, 1000);
        setTimeout(finish, 1000);
    });
    $('#wrong').click(function(){
        //Displays feedback to the user
        feedback = $("<p></p>").text('Wrong!');
        //Adds id to feedback so that it can be removed later
        feedback.attr('id', 'feedback');        
        $('#quiz').append(feedback);
        setTimeout(remove, 1000);
        setTimeout(finish, 1000);
    });  
}

function finish() {
    var finishScreen = $("<h2></h2>").text('Your score: ' + score);
    $('#quiz').append(finishScreen);
}

startButton.click(function(){
    countdown();
    remove();
    firstQuestion();
});

});