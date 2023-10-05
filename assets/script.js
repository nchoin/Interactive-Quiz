var i = 15;
var timerBox = document.querySelector('.timer');

//code for the timer. Change the var i = whatever I want the timer set to - how many 1 seconds. This connects to the 1000milliseconds below.
var timer = setInterval(function(){
    timerBox.textContent=i;
    console.log(timerBox.textContent);
    i--;
    if(i<0){
        //stop countdown use the variable you created mean the setInterval method.
        clearInterval(timer);
    }
}, 1000);