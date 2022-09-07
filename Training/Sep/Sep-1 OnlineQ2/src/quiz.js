//https://docs.google.com/spreadsheets/d/1CxvzR7dk6QGJxvZZjIbNJj-kmjIPBaS88-sTHIK2iVA/edit#gid=0
//https://script.google.com/home/projects/1C7FF441v88d-Wo6jMVYWzJ4xmb1ZhtVn7tPLpTo140e72tveq1ejTsZL/edit

const url =
  "https://script.google.com/macros/s/AKfycbxYkjBBLkOV0j41k5QHQQDEO3itzVJiCBuUObwBH-0sR-zcFUYgi3qprqkJlmxvjw0/exec";
const output = document.querySelector(".output");
const quiz = { question: 0, total: 0, data: [], score: 0 };
document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("success");
  output.innerHTML = "";
  const btn = document.createElement("button");
  btn.disabled = true;
  start(btn);
  quiz.question = 0;
  quiz.total = 0;
  quiz.score = 0;
  quiz.data = [];
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      quiz.total = data.data.length;
      quiz.data = data.data;
      btn.disabled = false;
    });
}

function start(btn) {
  const html =
    "Welcome to the online accessment, click the button below to start the QUIZ";
  const div = makeEle("div", html, "message", output);
  btn.textContent = "Start Assessment";
  btn.classList.add("btn");
  div.append(btn);
  btn.addEventListener("click", loadQuestion);
}

function loadQuestion() {
  output.innerHTML = "";
  switch (true) {
    case quiz.question >= quiz.total:
      const html = `<h1>Quiz Complete</h1><div>You got ${quiz.score} out of ${quiz.total} Correct</div>`;
      const div = makeEle("div", html, "message", output);
      const btn = makeEle("button", "Take the Quiz Again", "btn", div);
      btn.addEventListener("click", init);
      const btn2 = makeEle("button", "Log Out", "btn", div);
      btn2.addEventListener("click", redirect);
      const btn3 = makeEle("button", "Check Result in Graph", "btn", div);
      btn3.addEventListener("click", chart);
      btn3.addEventListener("click", () => btn3.disabled = true);
      break;
    case quiz.question < quiz.total:
      const div2 = makeEle("div", "", "message", output);
      const val = quiz.data[quiz.question];
      const question = makeEle("div", val.question, "question", div2);
      const optList = makeEle("div", "", "opts", div2);
      val.arr.forEach((opt) => {
        // console.log(opt);
        const temp = makeEle("div", opt, "box", optList);
        temp.classList.add("box1");
        temp.myObj = {
          opt: opt,
          answer: val.answer,
        };
        temp.addEventListener("click", checker);
        // temp.addEventListener('click', checker);
      });
      // console.log('questionloaded')
      break;
  }
}

function checker(e) {
  const val = e.target;
  if (!confirm(`Is ${val.myObj.opt} your final answer?`)) {
    e.preventDefault();
  } else {
    removeClicks();
    val.style.color = "white";
    let html = "";
    if (val.myObj.opt == val.myObj.answer) {
      quiz.score++;
      val.style.backgroundColor = "green";
      html = `Correct !`;
    } else {
      val.style.backgroundColor = "red";
      html = `Incorrect ! The correct answer is <h3> ${val.myObj.answer} </h3>`;
    }
    const parent = val.parentElement;
    console.log(parent);
    quiz.question++;
    const rep = quiz.question == quiz.total ? "End Quiz" : "Next Question";
    const result = makeEle("div", html, "message2", parent);
    const btn2 = makeEle("button", "Next Question", "btn", parent);
    btn2.addEventListener("click", loadQuestion);
  }
}

function removeClicks() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((ele) => {
    ele.removeEventListener("click", checker);
    ele.style.color = "grey";
    ele.classList.remove("box1");
  });
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

function chart() {
  const pieChart = `<div id="piechart"></div>`;
  const div = makeEle("div", pieChart, "chart", output);
  const btn = makeEle("button", "Generate Graph", "btn", div);
  btn.addEventListener("click", drawChart);
  btn.addEventListener("click", () => btn.disabled = true);
}

//PieChart
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Answer", "Number"],
    ["Correct", quiz.score],
    ["Incorrect", quiz.total - quiz.score],
  ]);

  var options = {
    title: "Number of Correct Answer vs Incorrect Answer",
    width: 550,
    height: 400,
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );
  chart.draw(data, options);
}
