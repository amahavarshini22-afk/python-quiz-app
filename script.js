
const questionBank = {
  Beginner: [
    { tag: "VARIABLES", q: "Which symbol is used to assign a value to a variable?", options: ["==", "=", "!=", ":"], answer: 1, explanation: "The single equals sign (=) assigns a value to a variable." },
    { tag: "OUTPUT", q: "What does print(2 + 3) display?", options: ["23", "5", "2 + 3", "Error"], answer: 1, explanation: "Python evaluates 2 + 3 and prints 5." },
    { tag: "DATA TYPES", q: "Which data type stores True or False?", options: ["str", "int", "bool", "list"], answer: 2, explanation: "The bool type stores Boolean values: True and False." },
    { tag: "STRINGS", q: 'What is the type of "Hello"?', options: ["int", "str", "float", "bool"], answer: 1, explanation: "Text enclosed in quotes is a string (str)." },
    { tag: "OPERATORS", q: "What is the result of 17 // 5?", options: ["3.4", "2", "3", "4"], answer: 2, explanation: "Floor division returns the whole-number quotient: 3." },
    { tag: "LISTS", q: "Which brackets create a list in Python?", options: ["()", "{}", "[]", "<>"], answer: 2, explanation: "Square brackets [] create a list." },
    { tag: "INPUT", q: "Which function reads input from a user?", options: ["read()", "input()", "scan()", "get()"], answer: 1, explanation: "input() reads user input as a string." },
    { tag: "CONDITIONS", q: "Which keyword checks another condition after if?", options: ["else if", "elseif", "elif", "then"], answer: 2, explanation: "Python uses elif to check another condition." },
    { tag: "COMMENTS", q: "Which symbol starts a single-line comment?", options: ["//", "#", "/*", "--"], answer: 1, explanation: "The # symbol starts a Python comment." },
    { tag: "LOOPS", q: "Which loop is commonly used to iterate through a list?", options: ["for", "switch", "case", "repeat"], answer: 0, explanation: "A for loop can visit each item in a list." }
  ],
  Intermediate: [
    { tag: "LISTS", q: "What does [1, 2, 3].append(4) do?", options: ["Removes 4", "Adds 4 to the end", "Sorts the list", "Returns 4"], answer: 1, explanation: "append(4) adds 4 to the end of the list." },
    { tag: "FUNCTIONS", q: "Which keyword defines a function?", options: ["function", "define", "def", "fun"], answer: 2, explanation: "Python functions are defined using def." },
    { tag: "RANGE", q: "What numbers does list(range(3)) produce?", options: ["1, 2, 3", "0, 1, 2", "0, 1, 2, 3", "3"], answer: 1, explanation: "range(3) starts at 0 and stops before 3." },
    { tag: "DICTIONARIES", q: 'Which syntax accesses key "name" in d?', options: ['d.name', 'd("name")', 'd["name"]', 'd->name'], answer: 2, explanation: 'Use d["name"] to access a dictionary value by key.' },
    { tag: "STRINGS", q: 'What is "python".upper()?', options: ["Python", "PYTHON", "python", "Error"], answer: 1, explanation: "upper() returns the string in uppercase." },
    { tag: "SLICING", q: "What is [10, 20, 30, 40][1:3]?", options: ["[10, 20]", "[20, 30]", "[20, 30, 40]", "[30, 40]"], answer: 1, explanation: "The start index is included and the stop index is excluded." },
    { tag: "SETS", q: "What is a key feature of a Python set?", options: ["Allows duplicate items", "Stores only strings", "Stores unique items", "Uses integer indexes"], answer: 2, explanation: "Sets contain unique elements and remove duplicates." },
    { tag: "EXCEPTIONS", q: "Which block handles an exception?", options: ["catch", "except", "error", "handle"], answer: 1, explanation: "Python uses try and except to handle exceptions." },
    { tag: "LOOPS", q: "What does break do inside a loop?", options: ["Skips one iteration", "Ends the loop", "Restarts the loop", "Pauses the loop"], answer: 1, explanation: "break immediately exits the nearest enclosing loop." },
    { tag: "LAMBDA", q: "What is lambda used to create?", options: ["A class", "An anonymous function", "A loop", "A module"], answer: 1, explanation: "lambda creates a small anonymous function." }
  ],
  Advanced: [
    { tag: "COMPREHENSIONS", q: "What is [x*x for x in range(3)]?", options: ["[1, 4, 9]", "[0, 1, 4]", "[0, 1, 2]", "[0, 2, 4]"], answer: 1, explanation: "The values 0, 1 and 2 are squared, giving [0, 1, 4]." },
    { tag: "GENERATORS", q: "Which keyword yields a value from a generator?", options: ["return", "yield", "send", "emit"], answer: 1, explanation: "yield produces a value while preserving generator state." },
    { tag: "IDENTITY", q: "What does the 'is' operator check?", options: ["Value equality only", "Object identity", "String length", "Variable type"], answer: 1, explanation: "is checks whether two references point to the same object." },
    { tag: "OOP", q: "Which method commonly initializes a Python instance?", options: ["__start__", "__main__", "__init__", "__create__"], answer: 2, explanation: "__init__ initializes an instance after it is created." },
    { tag: "DECORATORS", q: "Which symbol is used to apply a decorator?", options: ["@", "#", "$", "&"], answer: 0, explanation: "Decorators are commonly written with the @ symbol." },
    { tag: "ITERATORS", q: "Which built-in function obtains an iterator from an iterable?", options: ["next()", "iter()", "loop()", "range()"], answer: 1, explanation: "iter() obtains an iterator; next() advances it." },
    { tag: "ARGUMENTS", q: "In a function definition, what does **kwargs collect?", options: ["Extra positional arguments", "Keyword arguments in a dictionary", "Only integers", "Return values"], answer: 1, explanation: "**kwargs collects extra keyword arguments into a dictionary." },
    { tag: "MUTABILITY", q: "Which of these is mutable?", options: ["tuple", "str", "list", "int"], answer: 2, explanation: "Lists can be modified after they are created." },
    { tag: "FILES", q: "Which file mode appends text to a file?", options: ['"r"', '"w"', '"a"', '"x"'], answer: 2, explanation: 'The "a" mode appends content to a file.' },
    { tag: "COMPLEXITY", q: "What is the average time complexity of dictionary key lookup?", options: ["O(n)", "O(log n)", "O(1)", "O(n²)"], answer: 2, explanation: "Dictionary lookup is O(1) on average, though worst cases can differ." }
  ]
};

const dashboard = document.getElementById("dashboard");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

let level = "Beginner";
let questions = [];
let current = 0;
let score = 0;
let answered = 0;
let correct = 0;
let selected = false;
let secondsLeft = 15 * 60;
let timerInterval = null;
let sessionAnswered = 0;
let sessionCorrect = 0;

const $ = id => document.getElementById(id);

function showScreen(screen) {
  [dashboard, quizScreen, resultScreen].forEach(s => s.classList.add("hidden"));
  screen.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateStats() {
  $("answeredStat").textContent = sessionAnswered;
  $("correctStat").textContent = sessionCorrect;
  $("accuracyStat").textContent = sessionAnswered
    ? Math.round(sessionCorrect / sessionAnswered * 100) + "%"
    : "0%";
}

function startQuiz(chosenLevel) {
  level = chosenLevel;
  questions = [...questionBank[level]];
  current = 0;
  score = 0;
  answered = 0;
  correct = 0;
  selected = false;
  secondsLeft = 15 * 60;

  clearInterval(timerInterval);
  $("quizTitle").textContent = level + " Challenge";
  showScreen(quizScreen);
  renderQuestion();
  updateTimer();
  timerInterval = setInterval(() => {
    secondsLeft--;
    updateTimer();
    if (secondsLeft <= 0) finishQuiz(true);
  }, 1000);
}

function updateTimer() {
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  $("timer").textContent =
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0");
}

function renderQuestion() {
  selected = false;
  const q = questions[current];
  const progress = Math.round((current + 1) / questions.length * 100);

  $("questionCounter").textContent =
    `QUESTION ${current + 1} OF ${questions.length}`;
  $("progressPercent").textContent = progress + "%";
  $("progressBar").style.width = progress + "%";
  $("questionTag").textContent = q.tag;
  $("questionText").textContent = q.q;
  $("feedback").className = "feedback hidden";
  $("feedback").textContent = "";
  $("answerHint").textContent = "Select one answer to continue.";
  $("nextBtn").disabled = true;
  $("nextBtn").textContent =
    current === questions.length - 1 ? "View results →" : "Next question →";

  const optionsBox = $("options");
  optionsBox.replaceChildren();

  q.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option";

    const letter = document.createElement("span");
    letter.className = "letter";
    letter.textContent = String.fromCharCode(65 + index);

    const text = document.createElement("span");
    text.textContent = option;

    button.append(letter, text);
    button.addEventListener("click", () => chooseAnswer(index));
    optionsBox.appendChild(button);
  });
}

function chooseAnswer(index) {
  if (selected) return;
  selected = true;
  answered++;
  sessionAnswered++;

  const q = questions[current];
  const buttons = [...$("options").querySelectorAll(".option")];
  const feedback = $("feedback");

  buttons.forEach((button, i) => {
    button.disabled = true;
    if (i === q.answer) button.classList.add("correct");
  });

  if (index === q.answer) {
    score += 10;
    correct++;
    sessionCorrect++;
    feedback.textContent = "✓ Correct! " + q.explanation;
    feedback.className = "feedback good";
  } else {
    buttons[index].classList.add("wrong");
    feedback.textContent = "Not quite! " + q.explanation;
    feedback.className = "feedback bad";
  }

  $("answerHint").textContent = "Answer recorded.";
  $("nextBtn").disabled = false;
  updateStats();
}

function finishQuiz(timeUp = false) {
  clearInterval(timerInterval);
  showScreen(resultScreen);

  const total = questions.length;
  const accuracy = total ? Math.round(correct / total * 100) : 0;

  $("finalScore").textContent = score + "/" + (total * 10);
  $("resultCorrect").textContent = correct;
  $("resultWrong").textContent = total - correct;
  $("resultAccuracy").textContent = accuracy + "%";

  if (accuracy >= 80) {
    $("resultIcon").textContent = "🏆";
    $("resultTitle").textContent = "Outstanding work!";
    $("resultMessage").textContent = "Fantastic! You have a strong understanding of " + level + " Python.";
  } else if (accuracy >= 50) {
    $("resultIcon").textContent = "🚀";
    $("resultTitle").textContent = "Great progress!";
    $("resultMessage").textContent = "You are improving. Review the concepts and challenge yourself again.";
  } else {
    $("resultIcon").textContent = "🌱";
    $("resultTitle").textContent = "Keep growing!";
    $("resultMessage").textContent = "Every expert starts somewhere. Practise the basics and try again.";
  }

  if (timeUp) $("resultMessage").textContent += " Your time is up.";
}

$("startBtn").addEventListener("click", () => startQuiz("Beginner"));
document.querySelectorAll("[data-level]").forEach(button => {
  button.addEventListener("click", () => startQuiz(button.dataset.level));
});

$("nextBtn").addEventListener("click", () => {
  if (!selected) return;
  if (current < questions.length - 1) {
    current++;
    renderQuestion();
  } else {
    finishQuiz();
  }
});

$("backBtn").addEventListener("click", () => {
  clearInterval(timerInterval);
  updateStats();
  showScreen(dashboard);
});

$("homeBtn").addEventListener("click", () => {
  clearInterval(timerInterval);
  updateStats();
  showScreen(dashboard);
});

$("challengeBtn").addEventListener("click", () => startQuiz("Beginner"));
$("retryBtn").addEventListener("click", () => startQuiz(level));
$("dashboardBtn").addEventListener("click", () => {
  updateStats();
  showScreen(dashboard);
});

updateStats();
