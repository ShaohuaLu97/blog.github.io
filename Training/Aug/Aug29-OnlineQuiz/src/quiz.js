//https://docs.google.com/spreadsheets/d/1CxvzR7dk6QGJxvZZjIbNJj-kmjIPBaS88-sTHIK2iVA/edit#gid=0
//https://script.google.com/home/projects/1C7FF441v88d-Wo6jMVYWzJ4xmb1ZhtVn7tPLpTo140e72tveq1ejTsZL/edit

const url = 'https://script.google.com/macros/s/AKfycbxYkjBBLkOV0j41k5QHQQDEO3itzVJiCBuUObwBH-0sR-zcFUYgi3qprqkJlmxvjw0/exec';
const output = document.querySelector('.output');
const quiz = {question: 0, total: 0, data: [], score: 0};
document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('success');
    output.innerHTML = '';
    const btn = document.createElement('button');
    btn.disabled = true;
    start(btn);
    quiz.question = 0;
    quiz.total = 0;
    quiz.score = 0;
    quiz.data = [];
    fetch(url)
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            quiz.total = data.data.length;
            quiz.data = data.data;
            btn.disabled = false;
    })
}

function start(btn) {
    const html = 'Welcome to the online accessment, click the button below to start the QUIZ';
    const div = makeEle('div', html, 'message', output);
    btn.textContent = 'Start Assessment';
    btn.classList.add('btn');
    div.append(btn);
    btn.addEventListener('click', loadQuestion);
}

function loadQuestion() {
    output.innerHTML = '';
    if(quiz.question >= quiz.total) {
        const html =`<h1>Quiz Complete</h1><div>You got ${quiz.score} out of ${quiz.total} Correct</div>`
        const div = makeEle('div', html, 'message', output);
        const btn3 = makeEle('button', 'Take the Quiz Again', 'btn', div);
        btn3.addEventListener('click', init);
        const btn4 = makeEle('button', 'Log Out', 'btn', div);
        btn4.addEventListener('click', redirect);
    }else{
    const div = makeEle('div', '', 'message', output);
    const val = quiz.data[quiz.question];
    const question = makeEle('div', val.question, 'question', div);
    const optList = makeEle('div', '', 'opts', div);
    val.arr.forEach((opt) => {
        // console.log(opt);
        const temp = makeEle('div', opt, 'box', optList);
        temp.classList.add('box1');
        temp.myObj = {
            opt: opt,
            answer: val.answer
        };
        temp.addEventListener('click', checker);
    });
    // console.log('questionloaded')
}
}

function checker(e) {
    const val = e.target;
    // console.log(val.myObj.opt);
    // console.log(val.myObj.answer);
    removeClicks();
    e.target.style.color = 'white';
    let html = '';
    if(val.myObj.opt == val.myObj.answer){
        quiz.score++;
        e.target.style.backgroundColor = 'green';
        html = `Correct !`;
    }else{
        e.target.style.backgroundColor = 'red';
        html = `Incorrect !`;
    }
    const parent = val.parentElement;
    console.log(parent);
    quiz.question++;
    const rep = quiz.question == quiz.total ? 'End Quiz' : 'Next Question';
    const result = makeEle('div', html, 'message', parent);
    const btn2 = makeEle('button', 'Next Question', 'btn', parent);
    btn2.addEventListener('click', loadQuestion);
}

function removeClicks() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((ele) => {
        ele.removeEventListener('click', checker);
        ele.style.color = 'grey';
        ele.classList.remove('box1');
    })
}


function makeEle(eleType, html, cla, parent) {
    const ele = document.createElement(eleType);
    ele.innerHTML = html;
    ele.classList.add(cla);
    return parent.appendChild(ele);
}

function redirect() {
    window.location = "./index.html";
}