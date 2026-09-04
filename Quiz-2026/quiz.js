const categories = [
  { id: "javascript", name: "JavaScript", icon: "JS" },
  { id: "python", name: "Python", icon: "PY" },
  { id: "java", name: "Java", icon: "JV" },
  { id: "databases", name: "Databases & SQL", icon: "DB" },
  { id: "interview", name: "Developer Interview", icon: "DEV" },
  { id: "system-design", name: "System Design", icon: "SD" },
];
const storageKey = "quiz-2026-session";

const setupView = document.querySelector("#setup-view");
const quizView = document.querySelector("#quiz-view");
const resultsView = document.querySelector("#results-view");
const categoryGrid = document.querySelector("#category-grid");
const startButton = document.querySelector("#start-button");
const nextButton = document.querySelector("#next-button");
const restartButton = document.querySelector("#restart-button");
let selectedCategory;
let activeQuestions = [];
let currentQuestion = 0;
let answers = [];

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function renderCategories() {
  categoryGrid.innerHTML = categories.map((category) => `
    <button class="category-button" type="button" data-category="${category.id}" aria-pressed="false">
      <span class="category-icon">${category.icon}</span>
      <span class="category-name">${category.name}</span>
      <span class="category-count">${window.quizQuestionBanks[category.id].length} prompts</span>
    </button>`).join("");
}

function chooseCategory(categoryId) {
  selectedCategory = categories.find((category) => category.id === categoryId);
  document.querySelectorAll(".category-button").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.category === categoryId));
  });
  startButton.disabled = false;
}

function startQuiz() {
  const choice = document.querySelector('input[name="question-count"]:checked').value;
  activeQuestions = shuffle(window.quizQuestionBanks[selectedCategory.id]).slice(0, Number(choice));
  currentQuestion = 0;
  answers = [];
  setupView.classList.add("is-hidden");
  quizView.classList.remove("is-hidden");
  document.querySelector("#quiz-category").textContent = selectedCategory.name;
  saveSession();
  showQuestion();
}

function showQuestion() {
  const [question, options] = activeQuestions[currentQuestion];
  document.querySelector("#question-number").textContent = `Question ${currentQuestion + 1}`;
  document.querySelector("#question-text").textContent = question;
  document.querySelector("#progress-text").textContent = `${currentQuestion + 1} / ${activeQuestions.length}`;
  document.querySelector("#progress-bar").style.width = `${(currentQuestion / activeQuestions.length) * 100}%`;
  document.querySelector("#answers").innerHTML = options.map((option, index) => `<button class="answer-button" type="button" data-answer="${index}">${option}</button>`).join("");
  const feedback = document.querySelector("#answer-feedback");
  feedback.textContent = "";
  feedback.className = "feedback";
  nextButton.classList.add("is-hidden");
  const savedAnswer = answers[currentQuestion];
  if (savedAnswer) showAnswerResult(savedAnswer.selected, savedAnswer.isCorrect, activeQuestions[currentQuestion][3]);
}

function selectAnswer(answerIndex) {
  const [, , correctIndex, explanation] = activeQuestions[currentQuestion];
  const isCorrect = answerIndex === correctIndex;
  answers.push({ question: activeQuestions[currentQuestion], selected: answerIndex, isCorrect });
  saveSession();
  showAnswerResult(answerIndex, isCorrect, explanation);
}

function showAnswerResult(answerIndex, isCorrect, explanation) {
  const [, , correctIndex] = activeQuestions[currentQuestion];
  document.querySelectorAll(".answer-button").forEach((button) => {
    const index = Number(button.dataset.answer);
    button.disabled = true;
    button.classList.toggle("is-correct", index === correctIndex);
    button.classList.toggle("is-incorrect", index === answerIndex && !isCorrect);
  });
  const feedback = document.querySelector("#answer-feedback");
  feedback.textContent = `${isCorrect ? "Correct." : "Not quite."} ${explanation}`;
  feedback.classList.add(isCorrect ? "is-correct" : "is-incorrect");
  nextButton.textContent = currentQuestion === activeQuestions.length - 1 ? "See results" : "Next question";
  nextButton.classList.remove("is-hidden");
}

function advanceQuiz() {
  currentQuestion += 1;
  if (currentQuestion < activeQuestions.length) {
    saveSession();
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  const score = answers.filter((answer) => answer.isCorrect).length;
  localStorage.removeItem(storageKey);
  quizView.classList.add("is-hidden");
  resultsView.classList.remove("is-hidden");
  document.querySelector("#score-summary").textContent = `You answered ${score} of ${answers.length} questions correctly in ${selectedCategory.name}.`;
  document.querySelector("#review-list").innerHTML = answers.map(({ question, selected, isCorrect }) => {
    const [prompt, options, correctIndex] = question;
    return `<article class="review-item ${isCorrect ? "" : "is-missed"}">
      <p class="review-question">${isCorrect ? "Correct" : "Review"}: ${prompt}</p>
      <p class="review-answer">Your answer: ${options[selected]}<br />Correct answer: ${options[correctIndex]}</p>
    </article>`;
  }).join("");
}

function saveSession() {
  localStorage.setItem(storageKey, JSON.stringify({
    selectedCategoryId: selectedCategory.id,
    activeQuestions,
    currentQuestion,
    answers,
  }));
}

function restoreSession() {
  const storedSession = localStorage.getItem(storageKey);
  if (!storedSession) return;
  try {
    const session = JSON.parse(storedSession);
    const category = categories.find(({ id }) => id === session.selectedCategoryId);
    if (!category || !Array.isArray(session.activeQuestions) || !session.activeQuestions.length) throw new Error("Invalid session");
    selectedCategory = category;
    activeQuestions = session.activeQuestions;
    currentQuestion = session.currentQuestion;
    answers = session.answers || [];
    setupView.classList.add("is-hidden");
    quizView.classList.remove("is-hidden");
    document.querySelector("#quiz-category").textContent = selectedCategory.name;
    showQuestion();
  } catch {
    localStorage.removeItem(storageKey);
  }
}

categoryGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (button) chooseCategory(button.dataset.category);
});
startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", advanceQuiz);
restartButton.addEventListener("click", () => {
  localStorage.removeItem(storageKey);
  resultsView.classList.add("is-hidden");
  setupView.classList.remove("is-hidden");
});
document.querySelector("#answers").addEventListener("click", (event) => {
  const button = event.target.closest("[data-answer]");
  if (button && !button.disabled) selectAnswer(Number(button.dataset.answer));
});

renderCategories();
restoreSession();