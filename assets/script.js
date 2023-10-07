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

var quizAppear = document.getElementsByClassName("quizFrame");
var tallyBoxAppear = document.getElementsByClassName("tallyCorrect");
var statsAppear = document.getElementsByClassName("stats");
var headerAppear = document.getElementsByClassName("start");
var infoAppear = document.getElementsByClassName("infoBox");

// var displaySettingStats = statsAppear.style.display;
// var displaySettingHeader = headerAppear.style.display;
// var displaySettingInfo = infoAppear.style.display;

function showQuiz() {
    var displaySettingQuiz = quizAppear.style.display;
    var displaySettingTally = tallyBoxAppear.style.display;

    if(displaySettingQuiz == 'none') {
      displaySettingQuiz = 'block';
    }
    if(displaySettingTally == 'none') {
        displaySettingTally = 'block';
    }
}

function hideQuiz() {
    var displaySettingQuiz = quizAppear.style.display;
    var displaySettingTally = tallyBoxAppear.style.display;

    if(displaySettingQuiz =='block') {
        displaySettingQuiz ='none';
      }
    if(displaySettingTally == 'block') {
        displaySettingTally = 'none';
      }
}

function showStats(){
    var displaySettingStats = statsAppear.style.display;
    var displaySettingTally = tallyBoxAppear.style.display;

    if(displaySettingStats =='none') {
        displaySettingStats = 'block';
    }
    if(displaySettingTally == 'none') {
        displaySettingTally = 'block';
    }
}
function hideStats(){
    var displaySettingStats = statsAppear.style.display;
    var displaySettingTally = tallyBoxAppear.style.display;

    if(displaySettingStats =='block') {
        displaySettingStats = 'none';
    }
    if(displaySettingTally == 'block') {
        displaySettingTally = 'none';
    }
}
function showInfo(){
    var displaySettingHeader = headerAppear.style.display;
    var displaySettingInfo = infoAppear.style.display;

    if(displaySettingHeader =='none') {
        displaySettingHeader ='block';
    }
    if(displaySettingInfo == 'none') {
        displaySettingInfo = 'block';
    }
}
function hideInfo(){
    var displaySettingHeader = headerAppear.style.display;
    var displaySettingInfo = infoAppear.style.display;

    if(displaySettingHeader =='block') {
        displaySettingHeader ='none';
    }
    if(displaySettingInfo == 'block') {
        displaySettingInfo = 'none';
    }
}

