const quizQuestions = [
  {
    text: "Which of the following is correct about the features of JavaScript?",
    answers: [
      "JavaScript is is complementary to and integrated with HTML.",
      "JavaScript is open and cross-platform.",
      "scripting or programming language that allows you to implement complex features on web pages.",
      "All of the above.",
    ],
  },
  {
    text: "How can you get the type of arguments passed to a function?",
    answers: [
      "Using typeof operator.",
      "Using getType function.",
      "Using type() function",
      "None of the above.",
    ],
  },
  {
    text: "Which built-in method returns the string representation of the number's value?",
    answers: ["ToValue()", "ToNumber()", "ToString()", "None of the above."],
  },
  {
    text: "Which built-in method returns the character at the specified index?",
    answers: ["CharacterAt()", "GetCharAt()", "CharAt()", "None of the above."],
  },
  {
    text: "Which of the following function of the String object returns a number indicating the Unicode value of the character at the given index?",
    answers: ["CharAt()", "Concat()", "CharCodeAt()", "IndexOf()"],
  },
  {
    text: "Which of the following function of the String object returns the index within the calling String object of the last occurrence of the specified value?",
    answers: ["LastIndexOf()", "Search()", "Substr()", "IndexOf()"],
  },
  {
    text: "Which of the following function of the String object creates a string to be displayed in a big font as if it were in a <big> tag?",
    answers: ["Anchor()", "Big()", "Blink()", "Italics()"],
  },
  {
    text: "Which of the following function of the String object causes a string to be displayed as a subscript as if it were in a <sub> tag?",
    answers: ["Sup()", "Small()", "Strike()", "Sub()"],
  },
  {
    text: "Which of the following function of Array object returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found?",
    answers: ["IndexOf()", "Join()", "LastIndexOf()", "Map()"],
  },
  {
    text: "Which of the following function of the Array object returns a string representing the array and its elements?",
    answers: ["ToSource()", "Sort()", "Splice()", "ToString()"],
  },
];

let i = 0;
const scores = { correct: 0, wrong: 0, pass: 0 };
quizDetails();
function quizDetails() {
  let quizQ = quizQuestions[i];
  let quiz = "";
  if (i <= 9) {
    quiz = ` <div id="question-overview">   
    <div id="question">  
      <progress max="100" value="0"></progress>
     <h2>${quizQ.text}</h2>
     </div></div>
  <ul id="answers">
    <li class="answer"><button onclick="answers(${0});">${
      quizQ.answers[0]
    }</button></li>
    <li class="answer"><button onclick="answers(${1});">${
      quizQ.answers[1]
    }</button></li>
    <li class="answer"><button onclick="answers(${2});"> ${
      quizQ.answers[2]
    }</button></li>
    <li class="answer"><button onclick="answers(${3});">${
      quizQ.answers[3]
    }</button></li>
  </ul>`;
  } else {
    quiz = ` 
    <div class='answer-div'> 
    <div class='answer-item'>
    <h3>Correct Answer: </h3>
    <p id='correct'> ${scores.correct} </p>
    </div> 
    <div class='answer-item'>
    <h3>Wrong Answer: </h3>
    <p id='wrong'> ${scores.wrong} </p>
    </div> 
    <div class='answer-item'>
    <h3>No answer: </h3>
    <p id='pass'> ${scores.pass} </p>
    </div> 
  `;
  }
  document.getElementById("quiz").innerHTML = quiz;
}

const interval = setInterval(() => {
  const progress = document.querySelector("progress");
  progress.value += 10;
  if (progress.value === 100) {
    i += 1;
    progress.value = 0;
    scores.pass += 1;
    quizDetails();
  }
  if (i === quizQuestions.length) {
    clearInterval(interval);
  }
}, 1000);

function answers(index) {
  const answer = document.querySelectorAll("button");
  i += 1;
  let answerButton = answer[index].innerText; // button onclick when answering
  let correctAnswer = quizQuestions[index].answers; // correct answer
  if (answerButton === correctAnswer[index]) {
    scores.correct += 1;
  } else {
    scores.wrong += 1;
  }
  quizDetails();
  if (i === quizQuestions.length) {
    clearInterval(interval);
  }
}
//   // 1.d
//   // 2.a
//   // 3.c
//   // 4.c
//   // 5. b
//   // 6. a
//   // 7. b
//   // 8. d
//   // 9. a
//   // 10.d
