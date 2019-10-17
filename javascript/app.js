
//make question and answer objects

var questionObj = {
    q1: {
        q: "How long is the gestation period of a goat?",
        a: "1 year",
        b: "150 days", //correct answer
        c: "3 hours",
        d: "90 days"
    },
    q2: {
        q: "What do goats like to eat?",
        a: "Foraged vegetation", //correct answer
        b: "Tin cans",
        c: "Tires",
        d: "All of the above!"
    },
    q3: {
        q: "How long do goats live?",
        a: "10-13 years",
        b: "15-18 years", //correct answer
        c: "7-10 years",
        d: "Goats are immortal"
    },


    q4: {
        q: "Which of these traits do goats have in common with humans?",
        a: "They burp loudly when they are gassy",
        b: "They have regional accents",
        c: "Their offspring are called kids",
        d: "All of the above!" // correct answer
    },


}

//question and answer elements
var question = $("#q-display");
var answerA = $("#a-display-1");
var answerB = $("#a-display-2");
var answerC = $("#a-display-3");
var answerC = $("#a-display-4");
var startButton = $("button");
var card = $(".card");

//card starts out hidden
card.hide();

//press start button to start the game
//use jquery to display the questions and answers
startButton.on("click", function () {
    startButton.hide();
    card.show();
    i = 0;
    setInterval(function () {
        question.text(questionObj[i].q);

    }, 10000)
    console.log(i)
}
)

//when user clicks an answer, replace list with correct or incorrect screen
//incorrect screen shows the correct answer
//after 3 seconds display the next question
//on the final screen, show correct and incorrect count and an option to start again 