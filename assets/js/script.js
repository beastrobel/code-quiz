 //Wraps code in JQuery function
$(function(){

var timeLeft = 75;
var score = 0;
var answerA = '';
var answerB = '';
var answerC = '';
var answerD = '';
var feedback = '';

//Appends start page
var startScreen = $("<h2></h2>").text('Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!');
var startButton = $("<button></button>").text('Start Quiz');
startButton.attr('class', 'button');
$('#quiz').append(startScreen, startButton);

//Timer - Based on class example, modified for this project
function countdown() {
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
    $('.wrong').remove();
    $('.correct').remove();
}

//Displays questions
function firstQuestion() {
    var questionOne = $("<h3></h3>").text('Commonly used data types DO NOT include:');
    answerA = $("<button></button>").text('A. Strings');
    //Adds a class to the wrong answer
    answerA.attr('class', 'wrong');
    answerB = $("<button></button>").text('B. Booleans');
    answerB.attr('class', 'wrong');
    answerC = $("<button></button>").text('C. Alerts');
    //Adds a class to the correct answer, so that points can be added to the score variable
    answerC.attr('class', 'correct');
    answerD = $("<button></button>").text('D. Numbers');
    answerD.attr('class', 'wrong');
    $('#quiz').append(questionOne, answerA, answerB, answerC, answerD);
    $('.correct').click(function(){
        //Listens for correct answer and adds 20 points to score
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
    $('.wrong').click(function(){
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
    answerA.attr('class', 'wrong');
    answerB = $("<button></button>").text('B. Curly Brackets');
    answerB.attr('class', 'wrong');
    answerC = $("<button></button>").text('C. Parenthesis');
    answerC.attr('class', 'correct');
    answerD = $("<button></button>").text('D. Square Brackets');
    answerD.attr('class', 'wrong');
    $('#quiz').append(questionTwo, answerA, answerB, answerC, answerD);
    //Listens for correct answer and adds 20 points to score
    $('.correct').click(function(){
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
    $('.wrong').click(function(){
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
    answerA.attr('class', 'wrong');
    answerB = $("<button></button>").text('B. Other Arrays');
    answerB.attr('class', 'wrong');
    answerC = $("<button></button>").text('C. Booleans');
    answerC.attr('class', 'wrong');
    answerD = $("<button></button>").text('D. All of the Above');
    answerD.attr('class', 'correct');
    $('#quiz').append(questionThree, answerA, answerB, answerC, answerD);
    //Listens for correct answer and adds 20 points to score
    $('.correct').click(function(){
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
    $('.wrong').click(function(){
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
    answerA.attr('class', 'wrong');
    answerB = $("<button></button>").text('B. Curly Brackets');
    answerB.attr('class', 'wrong');
    answerC = $("<button></button>").text('C. Quotes');
    answerC.attr('class', 'correct');
    answerD = $("<button></button>").text('D. Parenthesis');
    answerD.attr('class', 'wrong');
    $('#quiz').append(questionFour, answerA, answerB, answerC, answerD);
    //Listens for correct answer and adds 20 points to score
    $('.correct').click(function(){
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
    $('.wrong').click(function(){
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
    answerA.attr('class', 'wrong');
    answerB = $("<button></button>").text('B. Terminal/Bash');
    answerB.attr('class', 'wrong');
    answerC = $("<button></button>").text('C. For Loops');
    answerC.attr('class', 'wrong');
    answerD = $("<button></button>").text('D. console.log');
    answerD.attr('class', 'correct');
    $('#quiz').append(questionFive, answerA, answerB, answerC, answerD);
    //Listens for correct answer and adds 20 points to score
    $('.correct').click(function(){
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
    $('.wrong').click(function(){
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
    var finishScreen = $("<h2></h2>").text('Your final score is: ' + score);
    var form = $("<form></form>");
    var label = $("<label></label>").text('Enter your initials');
    var input = $("<input></input>");
    var submitButton = $("<button></button>").text('Submit');
    submitButton.attr('class', 'button');
    $('#quiz').append(finishScreen, form, label, input, submitButton);
    //Saves user's initials and score to local storage
    submitButton.click(function(){
        var user = input.val();
        console.log(user);
        localStorage.setItem(user, score);
    });
}



startButton.click(function(){
    countdown();
    remove();
    firstQuestion();
});

});