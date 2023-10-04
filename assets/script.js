var i = 75;
var timerBox = document.querySelector('.timer');
var timer = setInterval(function(){
    timerBox.textContent=i;
    console.log(timerBox.textContent);
    i--;
    if(i<0){
        //stop countdown use the variable you created mean the setInterval method.
        clearInterval(timer);
    }
}, 1000);