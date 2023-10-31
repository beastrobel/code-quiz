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

var timer = $('#timer');
var quiz  = $('#quiz');

//Appends start page
var startScreen = $("<h2></h2>").text('Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!');
var startButton = $("<button></button>").text('Start Quiz');
startButton.attr('id', 'start');
$('#quiz').append(startScreen, startButton);

startButton.on("click", countdown, remove);

//Timer - Based on class example, modified for this project
function countdown() {
    var timeLeft = 75;
    var timeInterval = setInterval(function () {
      timeLeft--;
      timer.textContent = 'Time: ' + timeLeft;

      if(timeLeft <= 0) {
        // Stops execution of action at set interval
        clearInterval(timeInterval);

        // Calls function to create and append image
        displayMessage();
      }
    }, 1000);
}

function remove() {
    //Removes start screen
    $('h2').remove();
    $('button').remove();
}

function displayMessage() {
    console.log ('Success!');
}


});