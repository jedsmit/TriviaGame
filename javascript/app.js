
//make question and answer objects
$(document).ready(function () {

    var qAndA = [
        {
            q: "How long is the gestation period of a goat?",
            a: "1 year",
            b: "150 days", //correct answer
            c: "3 hours",
            d: "90 days",
            correct: "150 days"

        },
        {
            q: "What do goats like to eat?",
            a: "Foraged vegetation", //correct answer
            b: "Tin cans",
            c: "Tires",
            d: "All of the above!",
            correct: "Foraged vegetation"
        },
        {
            q: "How long do goats live?",
            a: "10-13 years",
            b: "15-18 years", //correct answer
            c: "7-10 years",
            d: "Goats are immortal",
            correct: "15-18 years"
        },
        {
            q: "Which of these traits do goats have in common with humans?",
            a: "They burp loudly when they are gassy",
            b: "They have regional accents",
            c: "Their offspring are called kids",
            d: "All of the above!", // correct answer
            correct: "All of the above!"
        },

    ];

    //question and answer elements
    var question = $("#q-display");
    var answerA = $("#a-display-1");
    var answerB = $("#a-display-2");
    var answerC = $("#a-display-3");
    var answerD = $("#a-display-4");
    var startButton = $("button");
    var qCard = $("#q-card");
    var correctCard = $("#correct-card");
    var wrongCard = $("#wrong-card");
    var gameOverCard = $("#game-over-card");
    var timeOutCard = $("#timeout-card");
    var showCorrect = $("#show-correct");
    var numRightDisplay = $("#num-right-display");
    var numWrongDisplay = $("#num-wrong-display");
    var rightAns;
    var userAns;
    var numWrong = 0;
    var numRight = 0;
    var i = 0;


    //displays question and answers
    function fillQs() {
        question.text(qAndA[i].q);
        answerA.text(qAndA[i].a);
        answerB.text(qAndA[i].b);
        answerC.text(qAndA[i].c);
        answerD.text(qAndA[i].d);
    };

    function gameOver() {
        numRightDisplay.text(numRight);
        numWrongDisplay.text(numWrong);
        qCard.hide();
        gameOverCard.show()
        startButton.show()
    };





    //-----------------------------main game--------------------------------

    //card starts out hidden
    qCard.hide();
    correctCard.hide();
    wrongCard.hide();
    timeOutCard.hide();
    gameOverCard.hide();
    //press start button to start the game
    //use jquery to display the questions and answers


    startButton.on("click", function () {
        event.defaultPrevented;
        i = 0;                                  // index of the question in the array
        startButton.hide();
        fillQs();
        rightAns = qAndA[i].correct;
        qCard.show();


        var timer =
            setTimeout(function () {
                i++;
                qCard.hide();
                numWrong++
            }, 5000);


        //when user clicks an answer, replace list with correct or incorrect screen
        //loop through all questions



        $("li").on("click", function () {
            event.defaultPrevented;
            userAns = $(this).text();//get user's answer
            console.log(userAns);
            clearTimeout(timer);
            qCard.hide()
            console.log(qAndA.length);
            if (userAns === rightAns) { //right answer
                correctCard.show();
                numRight++;
                setTimeout(function () {   //after 2 seconds display the next question
                    correctCard.hide();
                    i++;
                    rightAns = qAndA[i].correct;
                    if (i < qAndA.length) {
                        fillQs();
                        qCard.show();
                    } else {
                        gameOver();
                    };
                }, 2000);
            } else {  //wrong answer
                showCorrect.text(rightAns);//incorrect screen shows the correct answer
                wrongCard.show();
                numWrong++;
                setTimeout(function () {   //after 2 seconds display the next question 
                    wrongCard.hide();
                    i++;
                    rightAns = qAndA[i].correct;
                    if (i < qAndA.length) {
                        fillQs();
                        qCard.show();
                    } else {
                        gameOver();
                    };



                }, 2000);
            };
        });
    });

});










//on the final screen, show correct and incorrect count and an option to start again