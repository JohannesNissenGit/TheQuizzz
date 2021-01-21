
/*
*countquestions: writes absolute amount of questions into questionsamount
*/
function countquestions() {
    questions_amount = Object.keys(allquestions).length;

}

/*
*checkprogress: updates the progress bar according to answered questions (uses question_number from nextquestion)
*/
function checkprogress(question_number) {

    let progress_notfixed = (question_number - 1) * (100 / questions_amount);
    progress = progress_notfixed.toFixed(0);

    document.getElementById('progress-bar').innerHTML = progress + '%';

    if (progress == 0) {
        document.getElementById('progress-bar').style.width = 24 + 'px';
    }
    else {
        document.getElementById('progress-bar').style.width = progress + '%';
    }
}

/*
*hide previous: hide previous answers and next button while continuing to next question
*/
function hideprevious() {
    document.getElementById('next-btn').classList.add('d-none');
    document.getElementById('right_answer').classList.add('d-none');
}

/*
*loadquestionX: builds html for selected question i; keep in mind: i = question_number
*/
function loadquestion(i) {

    document.getElementById('questionbox').innerHTML = allquestions[i - 1]['question'];
    document.getElementById('answer1').innerHTML = allquestions[i - 1]['answer_1'];
    document.getElementById('answer2').innerHTML = allquestions[i - 1]['answer_2'];
    document.getElementById('answer3').innerHTML = allquestions[i - 1]['answer_3'];
    document.getElementById('answer4').innerHTML = allquestions[i - 1]['answer_4'];
    right_answer = allquestions[i - 1]['right_answer'];
}

/*
*nextquestion: Displays next question and answers
*/
function nextquestion() {

    countquestions();

    question_number = question_number + 1;

    hideprevious();
    checkprogress(question_number);


    if (question_number == allquestions.length + 1) {
        endquiz();
    }
    else {
        loadquestion(question_number);
    }
}

/*
*answerquestion: determines if right answer is picked and displays/hides alerts and button to continue
*/
function answerquestion(i) {

    let selected_answer = i;

    if (selected_answer == right_answer) {
        document.getElementById('right_answer').classList.remove('d-none');
        document.getElementById('wrong_answer').classList.add('d-none');
        document.getElementById('next-btn').classList.remove('d-none');
    }
    else {
        document.getElementById('wrong_answer').classList.remove('d-none');
        document.getElementById('right_answer').classList.add('d-none');
        document.getElementById('next-btn').classList.add('d-none');
    }
}

/*
*endquiz: will finish the quiz if all questions were answered
*/
function endquiz() {
    document.getElementById('quiz-container').classList.add('d-none');
    document.getElementById('end').classList.remove('d-none');

}

/*
*reloadquiz: Puts the player back to the start screen, resets all variables
*/
function reloadquiz(){

    document.getElementById('quiz-container').classList.remove('d-none');
    document.getElementById('end').classList.add('d-none');
    question_number = 1;
    progress = 0;

    countquestions();
    checkprogress(question_number);
    loadquestion(1);

}