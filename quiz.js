var score = 0;
var totQuestions = questions.length;
var currentQuestion = Math.floor(Math.random()*totQuestions);
var values = [];
var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');


function checkIfOccur(cQ,values) {
	
	if (values.length == 0) {
		values[0] = cQ;
		return false;	
	}	
	else {

		for(var a=0; a < values.length ; a++){
			if (values[a]== cQ) {
				return true;
			}else{
				values[values.length+1]=cQ;
				return false;			
			}
			
		}		
		
	}
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	questionEl.textContent = q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};

function loadNextQuestion () {
		
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('Proszę zaznaczyć opcję!');		
	}
	
	
	var answer = selectedOption.value;
	
	if(questions[currentQuestion].answer == answer){		
		document.getElementById("id"+answer).style.background = "green";
			alert("dobrze");
				sleep(1500);
		score += 10;
	} else {				

		document.getElementById("id"+answer).style.background = "red";		
			alert("zle");
				sleep(1500);
	}
		
	document.getElementById("id"+answer).style.background = '#003';
	selectedOption.checked = false;
	currentQuestion = Math.floor(Math.random()*totQuestions);	
	
	//while (true){	
	//	if (checkIfOccur(currentQuestion, values) == false) {
	///		break;		
//		}	else {
	//			currentQuestion =Math.floor(Math.random()*totQuestions);		
//	}	
//	}
	
	
	if(currentQuestion == totQuestions - 1){
		nextButton.textContent = 'Koniec';
	}
	
	if(currentQuestion == totQuestions){
		container.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = 'Wynik: ' + score;
	}
	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);
