//InnerHTML dynamic
//<h3>Question</h3>
//<button>1. </button>
//<button>2. </button>  
//<button>3. </button>  
//<button>4. </button>  

var timer = document.getElementById('timer');

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