/*
the homepage should show the following initially:
1. Continue to Quiz button
2. Button to go to Info about DDC
3. Info about the quiz

When I click the Continue to Quiz button Everthing on the initial page should switch to display None and the following should show up:
1. The start button - when this is click the following should appear.
    a. The timer
    b. the quiz frame that says The quiz Title, and the first question and answer.
2. The Next Button appears once an answer is selected

When the timer ends before completing the quiz:
Everthing on the quiz page should switch to display None and the following should show up:
1. Paragraph/box that says - You finished. Record your score and your Initials or Redo the quiz 
2. The Box with Tally of correct responses which is blank becuase user didn't finish quiz in alloted time
3. button to go to new page to complete the form.

When a person finishes the quiz - have the option to post score and initials. 
After posting to local storage, the page refreshes to clear out the information in the labels.
*/


//Function to make quiz frame and timer adisappear by buttons.

let quizAppear = document.querySelector(".quizFrame");
let quizBtnAppear = document.querySelector("#buttonStart");
let tallyBoxAppear = document.querySelector(".tallyCorrect");
let statsAppear = document.querySelector(".stats");
let headerAppear = document.querySelector(".start");
let infoAppear = document.querySelector(".infoBox");


function showQuizBtn(){
    quizBtnAppear.style.display = 'block';
    
}
function hideQuizBtn(){
    quizBtnAppear.style.display = 'none';
}

function showQuiz() {
    quizAppear.style.display = 'block';
    // tallyBoxAppear.style.display = 'block';
    }

function hideQuiz() {
    quizAppear.style.display = 'none';
    // tallyBoxAppear.style.display = 'block';
}

function showStats(){
    statsAppear.style.display = 'block';
    tallyBoxAppear.style.display = 'block';
}
function hideStats(){
   statsAppear.style.display = 'none';
   tallyBoxAppear.style.display = 'none';
}
function showInfo(){
    headerAppear.style.display = 'block';
    infoAppear.style.display = 'block';
}

function hideInfo(){
    headerAppear.style.display ='none';
    infoAppear.style.display = 'none';
    }
var i = 45;
var timer = document.querySelector('.timer');
function countdown() {
    setInterval(function(){
    if(i<0){
        clearInterval(timer);
        hideQuiz();
       showStats();
        }else {
        timer.textContent=i;
        console.log(timer.textContent);
        i--;
     };
},1000)}



/* array set up for questions in the quiz. The array is made up of objects containing the question and array of answer object = text:Question, correct:true or false.*/
const questionArr = [
    {
        question:"Who created the Dewey Decimal Classification system?",
        answers:[
            {text: "John Dewey", correct: false},
            {text: "Dewey Dessi", correct: false},
            {text: "Melvil Dewey", correct: true},
            {text: "Herman Melville", correct: false},
        ]
    },
    {
        question:"How many main categories/groups are there?",
        answers:[
            {text: "infinite", correct: false},
            {text: "10", correct: true},
            {text: "100", correct: false},
            {text: "1000", correct: false},
        ]
    },    {
        question:"You are looking for a book about lions. Which section would have it? ",
        answers:[
            {text: "the 500s", correct: true},
            {text: "the 600s", correct: false},
            {text: "the 700s", correct: false},
            {text: "the 800s", correct: false},
        ]
    },    {
        question:"You want to learn how to speak French. Where would you look?",
        answers:[
            {text: "the 100s", correct: false},
            {text: "the 200s", correct: false},
            {text: "the 300s", correct: false},
            {text: "the 400s", correct: true},
        ]
    },    {
        question:"The 900s section would have which title?",
        answers:[
            {text: "Bee the Change by B. Bumble", correct: false},
            {text: "Whales by Blue Beluga", correct: false},
            {text: "Ireland by Lucky Charming", correct: true},
            {text: "Cinderella by The Brothers Grimm", correct: false},
        ]
    }
]

/*variables so the questions and the answers choices will appear with the next button.*/

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answerButtons');
const nextBtn = document.getElementById('nextButton');
// const tallyTotal = document.getElementsByClassName('tallyCorrect');

let currentQuestionIndex = 0;
let score = 0;

/*function that will begin the quiz. Will connect this function to the Start Quiz button*/

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function resetState(){
    nextBtn.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}


function showQuestion(){
    resetState();
    let currentQuestion = questionArr[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.textContent = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add("answerChoices");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
        i--;
    }
    Array.from(answerButtons.children).forEach(button=> {
        if(button.dataset.correct ==="true"){
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

function showScore(){
    hideQuiz();
    hideQuizBtn();
    showStats();
    
    tallyBoxAppear.textContent = `You scored ${score} out of ${questionArr.length}.`};
    

function goToNextQuestion(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questionArr.length){
        showQuestion();
    }else {
        showScore();
    }

}

nextBtn.addEventListener("click", ()=>{
    if(currentQuestionIndex<questionArr.length){
        goToNextQuestion();
    }
})



startQuiz();