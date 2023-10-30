//InnerHTML dynamic
//<h2>Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!</h2>
//<button id="start">Start Quiz</button>
//<h3>Question</h3>
//<button>1. </button>
//<button>2. </button>  
//<button>3. </button>  
//<button>4. </button>  

var timer = document.getElementById('timer');
var quiz  = document.getElementById('quiz');

//Appends start page
var startScreen = quiz.appendChild(document.createElement("h2"));
startScreen.innerHTML = 'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!';
var startButton = quiz.appendChild(document.createElement("button"));
startButton.setAttribute("id", "start");
startButton.innerHTML = 'Start Quiz';

//Timer - Based on class example 
function countdown() {
    var timeLeft = 75;
    var timeInterval = setInterval(function () {
      timeLeft--;
      timer.textContent = timeLeft;
  
      if(timeLeft <= 0) {
        // Stops execution of action at set interval
        clearInterval(timeInterval);

        // Calls function to create and append image
        displayMessage();
      }
    }, 1000);
  }

function displayMessage() {
    console.log ('Success!');
}



countdown();