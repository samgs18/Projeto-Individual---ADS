const questions = [
    {
        question: '1- Qual é a função primária do óleo do motor em uma motocicleta?',
        answers: [
            { text: 'a) Refrescar o piloto', correct: false },
            { text: 'b) Lubrificar as correntes', correct: false },
            { text: 'c) Aumentar a potência', correct: false },
            { text: 'd) Lubrificar as peças internas do motor', correct: true }
        ]
    },
    {
        question: '2- O que significa a sigla "CC" quando se refere à capacidade do motor de uma motocicleta?',
        answers: [
            { text: 'a) Controle de Cruzeiro', correct: false },
            { text: 'b) Capacidade de Combustível', correct: false },
            { text: 'c) Centímetros Cúbicos', correct: true },
            { text: 'd) Condução Confortável', correct: false }
        ]
    },
    {
        question: '3- Qual é a finalidade das suspensões em uma motocicleta?',
        answers: [
            { text: 'a) Melhorar a estabilidade', correct: true },
            { text: 'b) Aumentar a velocidade máxima', correct: false },
            { text: 'c) Carregar bagagens', correct: false },
            { text: 'd) Regular a temperatura do motor', correct: false }
        ]
    },
    {
        question: '4- O que indica a luz de controle do motor em painéis de motocicletas?',
        answers: [
            { text: 'a) Nível de combustível baixo', correct: false },
            { text: 'b) Problemas no sistema de freios', correct: false },
            { text: 'c) Necessidade de troca de óleo', correct: false },
            { text: 'd) Falhas no funcionamento do motor', correct: true }
        ]
    },
    {
        question: '5- Qual é a posição correta das mãos no guidão ao pilotar uma motocicleta?',
        answers: [
            { text: 'a) Mãos no colo', correct: false },
            { text: 'b) Mãos na cabeça', correct: false },
            { text: 'c) Mãos nos joelhos', correct: false },
            { text: 'd) Mãos no punho do guidão', correct: true }
        ]
    },
];

let currentQuestionIndex = 0;

const questionContainer = document.getElementById('question-container');
const answerButtonsContainer = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

function startQuiz() {
    currentQuestionIndex = 0;
    showQuestion(questions[currentQuestionIndex]);
    nextButton.classList.add('hide');
}

function showQuestion(question) {
    questionContainer.innerText = question.question;
    resetAnswerButtons();

    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtonsContainer.appendChild(button);
    });
}

function resetAnswerButtons() {
    while (answerButtonsContainer.firstChild) {
        answerButtonsContainer.removeChild(answerButtonsContainer.firstChild);
    }
}

let correctAnswers = 0;
let incorrectAnswers = 0;
let userAnswers = [];

function selectAnswer(answer) {
    const buttons = answerButtonsContainer.children;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('btn-selected');
    }
    const selectedButton = Array.from(buttons).find(button => button.innerText === answer.text);
    selectedButton.classList.add('btn-selected');

    const correct = answer.correct;
    if (correct) {
        correctAnswers++;
    } else {
        incorrectAnswers++;
    }
    userAnswers.push({
        question: questions[currentQuestionIndex].question,
        userAnswer: answer.text,
        correctAnswer: questions[currentQuestionIndex].answers.find(a => a.correct).text
    });
    if (correct) {
        nextButton.classList.remove('hide');
    }
}

function showResults() {
    questionContainer.innerText = 'Resultados do Quiz';

    resetAnswerButtons();

    const resultsContainer = document.createElement('div');
    resultsContainer.classList.add('results-container');

    userAnswers.forEach(answer => {
        const resultItem = document.createElement('p');
        resultItem.classList.add('result-item');
        resultsContainer.appendChild(resultItem);
    });
    document.getElementById('quiz-container').appendChild(resultsContainer);
    nextButton.classList.add('hide');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.classList.add('hide');
    } else {
        showResults();
        const botao1 = document.getElementById("botao1");
        const botao = document.getElementById("botao");
        const grafico = document.getElementById("graficos");
        grafico.style.display = "block";
        botao.style.display = "block";
        botao1.style.display = "none";
    }
}
startQuiz();
