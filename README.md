# Interactive-Quiz
This is a quiz focusing on JavaScript fundamentals. It includes multiple choice and true and false questions as well as a timer and score keeper.
/*Ideas for how to make the quiz - what pieces do I need to make:
1. I need to make a timer with a start button. 
2. The button should trigger two events
    a. the timer to begin
    b. the "unveiling" of the first question and answer set

3. Need to create a set of questions/answers. 
    a. Was thinking I could give the Q/A a class so I could then create a variable named questionAnswerArr. 
    b. if all the QA are in an array then I could create a for loop for each index to be visible and the rest hidden. for(var i = 0; i < questionAnswerArr.length; i++) {
  
  }
    c. I could set the length of the for loop to be questionAnswerArr.length 
    d. Would I then be able to apply a Math.random for the Q/A to go in random order?
    e. was thinking each Q/A would be its own UL with the question being a li and each answer an li.

4. I need to identify the correct answer to increase the score. That would probably be a button/event. Would each answer have to be a button or could a make each a link but would the answers link to???Hmmm.
    a. can you assign 2 classes to an element? Yes I can https://developer.mozilla.org/en-US/docs/Learn/CSS/Howto/CSS_FAQ example  <li class="qa correct">The text of the correct answer</li> 

    Could I create a class for just the correct answers and then connect the increment of the score to the correct button? Would I make a variable correctAnswer = document.getElementsbyClass("correct"); 
    Then an if statement - if (not sure what I'd write here) { score = score++} hmmmm

5. Ideas for "class" names I'll need to define in CSS and attached in HTML and JS:
    timer - to add styles to the HTML
    scoreboard - to add styles to the HTML
    qa - the class for all question and answers. (would I apply to UL or li? if apply to UL would it include the li?) need to review that
    correct - for correct li choices

6. Variables names I could use:
    global  - var questionAnswerArr = [];


    
   