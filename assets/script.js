/*
the homepage should show the following initially:
1. Go to Quiz button
2. Info about DDC
3. Info about the quiz

When I click the Continue to Quiz button Everthing on the initial page should switch to display None and the following should show up:
1. The timer
2. The start button
3. the quiz frame that says The quiz Title, and default to "question will be here" "answer choice will be here"
4. The Next Button
5. The Box with Tally of correct responses

When the timer ends:
Everthing on the initial page should switch to display None and the following should show up:
1. Paragraph/box that says - You finished. Record your score and your Initials. 
2. The Box with Tally of correct responses
3. button to go to new page to complete the form.

*/
// var i = 0;
// var timerBox = document.querySelector('.timer');

// //code for the timer. Change the var i = whatever I want the timer set to - how many 1 seconds. This connects to the 1000milliseconds below.
// var timer = setInterval.function(){
//     timerBox.textContent=i;
//     console.log(timerBox.textContent);
//     i--;
//     if(i<0){
//         //stop countdown use the variable you created mean the setInterval method.
//         clearInterval(timer);
//     }
// }, 1000);

//Function to make quiz frame and timer and counter/tally

var quizAppear = document.querySelector(".quizFrame");
var tallyBoxAppear = document.querySelector(".tallyCorrect");
var statsAppear = document.querySelector(".stats");
var headerAppear = document.querySelector(".start");
var infoAppear = document.querySelector(".infoBox");


function showQuiz() {
    quizAppear.style.display = 'block';
    tallyBoxAppear.style.display = 'block';
    }

function hideQuiz() {
    quizAppear.style.display = 'none';
    tallyBoxAppear.style.display = 'block';
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

