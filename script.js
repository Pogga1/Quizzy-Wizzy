let beginButton = document.getElementById("startButt");
let score=0;
let questionIndex=0;
let timeStart=60;
let article1= document.getElementById("information");
let questionsContainer= document.getElementById("questionsBox");
let createUl= document.createElement("ul");
let startButt = document.getElementById("startButt");
let timeLeft=document.getElementById("timeLeft");
let timeSub= 3;
const multiQuestions = [{
        Question: "Where is the data in localStorage stored?",
        Choices: ["A. The cloud", "B.User's Browser", "C. Your Local Drive", "D. A random company's server"],
        Answer: "B.User's Browser"
    },
    {
        Question: "What do we need to do to stop event bubbling?",
        Choices: ["A. use Document.getElementbyId", "B. use event.stopPropogate()", "C. use Document.appendChild", "D. Use event.stopPropogation"],
        Answer: "D. Use event.stopPropogation()"
    },
    {
        Question: "Which two parameters does the addEventListener() method need to execute?",
        Choices: ["A. name of event, action", "B. Number, id", "C. function, action", "D. name of event, #class"], 
        Answer:"A. name of event, action"
    },
    {
        Question: "How do we create a function in JavaScript?",
        Choices:["A. function a()","B. function= a()","C. declareFunction a()", "D, fun a()"],
        Answer:"A. function a()"
    },
    {
        Question: "How can we use an element's id to access that element?",
        Choices: ["A. getElementbyclass()","B. getElementId()","C. getElementbyid()","D.getid()"],
        Answer:"C. getElementbyid()"
    }
];

startButt.addEventListener("click",function());



function jumpIn() {

}












//click Jump in button to start quiz
//i want a timer to appear in the middle and start ticking down
//i want a question and four clickable answers  to appear
//when i click one answer it takes me to the next question
//when i click a wrong answer then time is subtracted from the clock
//when i am done answering all questions then a prompt will appear telling me how many i got wrong and how many i got right.
//it will then ask if i would like to input username to log into highscores sheet
//