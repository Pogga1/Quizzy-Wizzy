let beginButton = document.getElementById("startButt");
let score = 0;
let questionI = 0;
let timeStart = 60;
const article1 = document.getElementById("information");
const questionsContainer = document.getElementById("questionsBox");
const createUl = document.getElementById("optionsList");
let startButt = document.getElementById("startButt");
let timeLeft = document.getElementById("timeLeft");
let timeSub = 3;
const question = document.getElementById("question");
const text = document.getElementById("open");

const questionsAnswers = [
  {
    Question: "Where is the data in localStorage stored?",
    Choices: [
      "A. The cloud",
      "B. User's Browser",
      "C. Your Local Drive",
      "D. A random company's server",
    ],
    Answer: "B. User's Browser",
  },
  {
    Question: "What do we need to do to stop event bubbling?",
    Choices: [
      "A. use Document.getElementbyId",
      "B. use event.stopPropogate()",
      "C. use Document.appendChild",
      "D. Use event.stopPropogation",
    ],
    Answer: "D. Use event.stopPropogation()",
  },
  {
    Question:
      "Which two parameters does the addEventListener() method need to execute?",
    Choices: [
      "A. name of event, action",
      "B. Number, id",
      "C. function, action",
      "D. name of event, #class",
    ],
    Answer: "A. name of event, action",
  },
  {
    Question: "How do we create a function in JavaScript?",
    Choices: [
      "A. function a()",
      "B. function= a()",
      "C. declareFunction a()",
      "D. fun a()",
    ],
    Answer: "A. function a()",
  },
  {
    Question: "How can we use an element's id to access that element?",
    Choices: [
      "A. getElementbyclass()",
      "B. getElementId()",
      "C. getElementbyid()",
      "D. getid()",
    ],
    Answer: "C. getElementbyid()",
  },
];

var interval = 0;

startButt.addEventListener("click", function () {
  if (interval === 0) {
    interval = setInterval(function () {
      timeStart--;
      timeLeft.innerHTML = "Time " + timeStart;
      if (timeStart <= 0) {
        clearInterval(interval);
        endQuiz();
        timeLeft.innerHTML = "Times Up!";
      }
    }, 1000);
  }
  showQuestion(questionI);
});

function showQuestion(questionI) {
  questionsContainer.innerHTML = "";
  createUl.innerHTML = "";
  for (let i = 0; i < questionsAnswers.length; i++) {
    let userquestion = questionsAnswers[questionI].Question;
    var userAnswer = questionsAnswers[questionI].Choices;
    questionsContainer.textContent = userquestion;
  }
  userAnswer.forEach(function (nextQuestion) {
    let listItem = document.createElement("li");
    listItem.textContent = nextQuestion;
    questionsContainer.appendChild(createUl);
    createUl.appendChild(listItem);
    listItem.addEventListener("click", function (e) {
      let element = e.target;
      if (element.matches("li")) {
        var createDiv = document.createElement("div");
        createDiv.id = "createDiv";
        if (element.textContent == questionsAnswers[questionI].Answer) {
          score++;
          createDiv.textContent =
            "correct!   " + questionsAnswers[questionI].Answer;
        } else {
          timeStart = timeStart - timeSub;
          createDiv.textContent =
            "Wrong! The correct answer is:  " +
            questionsAnswers[questionI].Answer;
        }
      }
      questionI++;
      if (questionI >= questionsAnswers.length) {
        endQuiz();
      } else {
        showQuestion(questionI);
      }
      questionsContainer.appendChild(createDiv);
    });
  });
}

function endQuiz() {
  questionsContainer.innerHTML = "";
  timeLeft.innerHTML = "";
  const createH1 = document.createElement("h1");
  createH1.id = "createH1";
  createH1.textContent = "All Done!";
  questionsContainer.appendChild(createH1);
  const createP = document.createElement("p");
  createP.id = "createP";
  questionsContainer.appendChild(createP);
  if (timeStart >= 0) {
    var timeRemaining = timeStart;
    const createP2 = document.createElement("p");
    clearInterval(interval);
    createP.textContent = "Your final score is: " + timeRemaining * 2;
    questionsContainer.appendChild(createP2);
  }
  const infoPrompt = document.createElement("label");
  infoPrompt.id = "createLabel";
  infoPrompt.textContent = "Enter your initials: ";
  questionsContainer.appendChild(infoPrompt);
  const userInitials = document.createElement("input");
  userInitials.type = "text";
  userInitials.id = "initials";
  userInitials.textContent = "";
  questionsContainer.appendChild(userInitials);
  const saveInfo = document.createElement("button");
  saveInfo.type = "submit";
  saveInfo.id = "Submit";
  saveInfo.textContent = "Submit";
  questionsContainer.appendChild(saveInfo);
  saveInfo.addEventListener("click", function () {
    var initials = userInitials.value;
    var finalScore = {
      initials: initials,
      score: timeRemaining * 2,
    };
    var allScores = localStorage.getItem("allScores");
    if (allScores === null) {
      allScores = [];
    } else {
      allScores = JSON.parse(allScores);
    }
    allScores.push(finalScore);
    var newScore = JSON.stringify(allScores);
    localStorage.setItem("allScores", newScore);
    window.location.replace("scores.html");
  });
}
