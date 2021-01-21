/*
*Variables
*/

let question_number = 0;
let progress = 0;
let right_answer;
let questions_amount;

/*
*Questions database
*/
let allquestions = [
    {
        'question': `Who invented HTML?`,
        'answer_1': 'Arnold Schwarzenegger',
        'answer_2': 'Donald Trump',
        'answer_3': 'Tim Berners-Lee',
        'answer_4': 'Dr. House',
        'right_answer': 3
    },
    {
        'question': `What does &lt;a&gt; mean?`,
        'answer_1': 'AC DC',
        'answer_2': 'Change font size',
        'answer_3': 'It´s a link',
        'answer_4': 'Bold text',
        'right_answer': 3
    },
    {
        'question': `How do you display a website in another website?`,
        'answer_1': '&lt;iframe&gt; , &lt;frameset&gt; and &lt;frame&gt;',
        'answer_2': '&lt;iframe&gt;',
        'answer_3': '&lt;frame&gt;',
        'answer_4': '&lt;frameset&gt;',
        'right_answer': 2
    },

//add new questions here
]