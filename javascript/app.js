
//make question and answer objects

var qAndA = [
    {
        q: "How long is the gestation period of a goat?",
        a: "1 year",
        b: "150 days", //correct answer
        c: "3 hours",
        d: "90 days",
        correct: this.b
    },
    {
        q: "What do goats like to eat?",
        a: "Foraged vegetation", //correct answer
        b: "Tin cans",
        c: "Tires",
        d: "All of the above!"
    },
    {
        q: "How long do goats live?",
        a: "10-13 years",
        b: "15-18 years", //correct answer
        c: "7-10 years",
        d: "Goats are immortal"
    },
    {
        q: "Which of these traits do goats have in common with humans?",
        a: "They burp loudly when they are gassy",
        b: "They have regional accents",
        c: "Their offspring are called kids",
        d: "All of the above!" // correct answer
    },


];

//question and answer elements
var question = $("#q-display");
var answerA = $("#a-display-1");
var answerB = $("#a-display-2");
var answerC = $("#a-display-3");
var answerD = $("#a-display-4");
var startButton = $("button");
var card = $(".card");
var userAns;


//displays question and answers
function showQs() {
    question.text(qAndA[i].q);
    answerA.text(qAndA[i].a);
    answerB.text(qAndA[i].b);
    answerC.text(qAndA[i].c);
    answerD.text(qAndA[i].d);
};

//get user's answer



//-----------------------------main game--------------------------------

//card starts out hidden
card.hide();

//press start button to start the game
//use jquery to display the questions and answers
startButton.on("click", function () {

    i = 0; // index of the question in the array
    startButton.hide();
    showQs();
    card.show();

    setInterval(function () {
        i++;
        showQs();


        $("li").on("click", function () {
            userAns = $(this).text();



            if (userAns === qAndA[i].correct) {
                $("ul").hide();
                question.text("YAAAAAAAY");
            } else {
                $("ul").hide();
                question.text("NOOOOOOOOO");
            };
        });
    }, 5000);
});






//when user clicks an answer, replace list with correct or incorrect screen
//incorrect screen shows the correct answer
//after 3 seconds display the next question
//on the final screen, show correct and incorrect count and an option to start again