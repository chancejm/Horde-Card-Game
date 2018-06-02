console.log('test');
$( document ).ready(function() {
    console.log( "ready!" );

//                                       --
let sec = 6;
let time;
let running = false;
let answer = false;
let questionCount = 0;
let questions = ['question 1', 'question 2', 'question 3', 'question 4', 'question 5'];
let answersOne = ['answer 1-1', 'answer 1-2', 'answer 1-3', 'answer 1-4', 'answer 1-5'];
let answersTwo = ['answer 2-1', 'answer 2-2', 'answer 2-3', 'answer 2-4', 'answer 2-5'];
let answersThree = ['answer 3-1', 'answer 3-2', 'answer 3-3', 'answer 3-4', 'answer 3-5'];
let answersFour = ['answer 4-1', 'answer 4-2', 'answer 4-3', 'answer 4-4', 'answer 4-5'];



function timer () {

    sec--;
    // console.log(sec);
    if (sec <= 0) {
        $('#time').html('00:00');
    } else if(sec < 6) {
        $('#time').html('00:0'+sec);
    } else if (sec > 6) {
        $('#time').html('00:'+sec);        
    }; 

    if(sec === -1 || answer === true) {
        console.log('time cleared');
        clearInterval(time);
        answer = true;
        sec = 6;

        if (answer === true && running === true) {

        if (questionCount === 4) {
            running === false;
        };
        if (running === false) {
            clearInterval(time);
            $('#time').html('COMPLETE');
        } else {
            sec = 6;
            questionCount++;
            console.log(questionCount);
            $('#question').html(questions[questionCount]);
            $('#aOne').html(answersOne[questionCount]);
            $('#aTwo').html(answersTwo[questionCount]);
            $('#aThree').html(answersThree[questionCount]);
            $('#aFour').html(answersFour[questionCount]);
            answer = false;
            timeStart();
        };
        };

    };
    if (questionCount === 5) {
        clearInterval(time);
        $('#time').html('Complete');
        console.log('clear time END GAME');
    };
};

function timeStart() {
    time = setInterval(timer, 1000);
};
//------------------------------

// function qfunction() {

//     if (questionCount !== 0 && sec ===0) {
//         $('#question').html(questions[questionCount]);
//         timeStart(); 
//     };

// };

$('#left').click(function() {
    console.log('left clicked');
    if (running === false) {
    running = true;
    timeStart();
    $('#time').html('00:6');
    $('#question').css("visibility", "visible");
    $('#aOne').css("visibility", "visible");
    $('#aTwo').css("visibility", "visible");
    $('#aThree').css("visibility", "visible");
    $('#aFour').css("visibility", "visible");
    $('#question').html(questions[questionCount]);
    $('#aOne').html(answersOne[questionCount]);
    $('#aTwo').html(answersTwo[questionCount]);
    $('#aThree').html(answersThree[questionCount]);
    $('#aFour').html(answersFour[questionCount]);
    };
});

$('#aOne').click(function(){
    answer = true;
});


});