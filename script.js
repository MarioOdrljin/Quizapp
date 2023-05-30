
/*javaquiz Array*/
let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },

    {
        "question": "Welches Schlüsselwort wird in Java verwendet, um eine Bedingung zu überprüfen und Code auszuführen, wenn die Bedingung wahr ist?",
        "answer_1": "A) for",
        "answer_2": "B) if",
        "answer_3": "C) switch",
        "answer_4": "D) while",
        "right_answer": 2
    },
    {
        "question": "Wie deklariert man eine konstante Variable in Java?",
        "answer_1": "A) final",
        "answer_2": "B) static",
        "answer_3": "C) constant",
        "answer_4": "D) const",
        "right_answer": 1
    },
    {
        "question": "Welche der folgenden Optionen ermöglicht das Lesen von Eingaben von der Konsole in Java?",
        "answer_1": "A) System.out.print()",
        "answer_2": "B) Console.readLine()",
        "answer_3": "C) Scanner.nextLine()",
        "answer_4": "D) BufferedReader.readLine()",
        "right_answer": 3
    },
    {
        "question": "Wie definiert man einen Array in Java?",
        "answer_1": "A) Array[] name = new Array[];",
        "answer_2": "B) Array name = new Array[];",
        "answer_3": "C) Array[] name = new Array[]();",
        "answer_4": "D) Array name = new Array[]();",
        "right_answer": 1
    },
    {
        "question": "Welches Schlüsselwort wird verwendet, um eine Methode zu definieren, die keinen Rückgabewert hat?",
        "answer_1": "A) void",
        "answer_2": "B) return",
        "answer_3": "C) null",
        "answer_4": "D) none",
        "right_answer": 1
    },
    {
        "question": "Welche der folgenden Optionen ermöglicht das Erzeugen einer Zufallszahl in Java?",
        "answer_1": "A) Math.random()",
        "answer_2": "B) Random.generate()",
        "answer_3": "C) Random.nextInt()",
        "answer_4": "D) RandomNumber.generate()",
        "right_answer": 1
    },
    {
        "question": "Was wird in Java verwendet, um Code zu gruppieren und zu organisieren?",
        "answer_1": "A) Klassen",
        "answer_2": "B) Methoden",
        "answer_3": "C) Blöcke",
        "answer_4": "D) Pakete",
        "right_answer": 4
    }
];

/*javaquiz Array*/
let currentquestion = 0;
let counter = currentquestion + 1;

function init() {
    /*Quiz Endscreen*/
    if (counter >= questions.length) {
        document.getElementById('quiz-endscreen').style = '';
        document.getElementById('quiz-javabody').style = 'display: none';
        console.log('counter', questions.length);
        console.log("das ist die länge der Fragen", (questions.length - 1));
        document.getElementById('quiz-header').src = '/img/victory.png';
        document.getElementById('quiz-header').classList.add('quiz-victoryimg');
        document.getElementById('restart-button').style.display = 'flex';
        document.getElementById('endscreenallquestions').innerHTML = questions.length - 1;

        let rightanswer = document.getElementById('right-answer');
        rightanswer.innerHTML += `<b> ${returnrightanswer} </b>`;
        
        /* Setze die Breite des Fortschrittsbalkens auf 100% */
        document.getElementById('progressbar-quiz').innerHTML = '100%';
        document.getElementById('progressbar-quiz').style.width = '100%';

    } else {
        console.log(counter);

        let percentage = (currentquestion + 1) / questions.length;
        percentage = Math.round(percentage * 100);
        console.log('Fortschirtt', percentage);
        /*counter*/
        document.getElementById('progressbar-quiz').innerHTML = `${percentage}% `;
        document.getElementById('progressbar-quiz').style.width = `${percentage}%`;

        document.getElementById('couterfooter').innerHTML = currentquestion + 1;
        let question = questions[currentquestion];
        let question1 = document.getElementById('question_quiz');
        let possibleanswer1 = document.getElementById('answer_1');
        let possibleanswer2 = document.getElementById('answer_2');
        let possibleanswer3 = document.getElementById('answer_3');
        let possibleanswer4 = document.getElementById('answer_4');



        question1.innerHTML = `<p>${question['question']}</p>`;
        possibleanswer1.innerHTML = `<p>${question['answer_1']}</p>`;
        possibleanswer2.innerHTML = `<p>${question['answer_2']}</p>`;
        possibleanswer3.innerHTML = `<p>${question['answer_3']}</p>`;
        possibleanswer4.innerHTML = `<p>${question['answer_4']}</p>`;
        document.getElementById('countquestion').innerHTML = counter++;



    }
}
/*Count Hits*/
let returnrightanswer = 0;
function givenanswer(selection) {
    let question = questions[currentquestion];
    let clickedanswer = selection.slice(-1);
    let right_answer = question['right_answer'];
    let selectedAnswerCard = document.getElementById(selection);
    let Showuprightanswer = `answer_${question['right_answer']}`;
    /*Display correct answer*/
    if (selectedAnswerCard) {
        if (right_answer == clickedanswer) {
            selectedAnswerCard.parentNode.classList.add('highlight_success');
            selectedAnswerCard.parentNode.classList.add("max-width");
            console.log('richtige antwort');
            returnrightanswer++;
            console.log(returnrightanswer);
            /*Display wrong answere*/
        } else {
            console.log('flasche antwort');
            selectedAnswerCard.parentNode.classList.add('highlight_destroyed');
            document.getElementById(Showuprightanswer).parentNode.classList.add('highlight_success');
            selectedAnswerCard.parentNode.classList.add('max-width');


        }

    }
    /*Next Questionbutton*/
    document.getElementById('next-button').disabled = false;

}

function nextquestion() {

    clearanswers()

    if (counter <= questions.length) {

        currentquestion++;

        let countfooter = document.getElementById('couterfooter');
        countfooter.innerHTML = '';
        countfooter.innerHTML += `<b> ${counter} </b>`;


        document.getElementById('next-button').disabled = true;
        init();

    } else
        alert("the end is here!");


}


function clearanswers() {
    document.getElementById('answer_1').parentNode.classList.remove('highlight_success');
    document.getElementById('answer_1').parentNode.classList.remove('highlight_destroyed');


    document.getElementById('answer_2').parentNode.classList.remove('highlight_success');
    document.getElementById('answer_2').parentNode.classList.remove('highlight_destroyed');

    document.getElementById('answer_3').parentNode.classList.remove('highlight_success');
    document.getElementById('answer_3').parentNode.classList.remove('highlight_destroyed');

    document.getElementById('answer_4').parentNode.classList.remove('highlight_success');
    document.getElementById('answer_4').parentNode.classList.remove('highlight_destroyed');


}
function restart() {

    currentquestion = 0;
    counter = 0;
    counter = currentquestion + 1;
    document.getElementById('quiz-header').src = '/img/quizcardheader.jpg';
    document.getElementById('quiz-endscreen').style = 'display: none';
    document.getElementById('quiz-javabody').style = '';
    init();
    
}


