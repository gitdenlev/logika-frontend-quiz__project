// Контейнер з питаннями
const quizContainer = document.getElementById("quiz");
// Відображення рахунку
const scoreDisplay = document.getElementById("score");

const canvas = document.getElementById("confetti");
const jsConfetti = new JSConfetti();

// Запитання та відповіді
const questions = [
  {
    question: "Столиця України",
    answers: ["Київ", "Запоріжжя", "Львів", "Одеса"],
    correctAnswer: "Київ",
  },
  {
    question: "Яке населення планети Земля",
    answers: ["5 мільярдів", "6 мільярдів", "7 мільярдів", "8 мільярдів"],
    correctAnswer: "8 мільярдів",
  },
  {
    question: "Скільки буде 4+4?",
    answers: ["8", "9", "10", "11"],
    correctAnswer: "8",
  },
  {
    question: "Скільки буде 5+5?",
    answers: ["10", "11", "12", "13"],
    correctAnswer: "10",
  },
  {
    question: "Скільки буде 6+6?",
    answers: ["12", "14", "16", "18"],
    correctAnswer: "12",
  },
];
// Поточний рахунок
let score = 0;

// Функція створення питань
function createQuiz() {
  questions.forEach((question, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. ${question.question}`;

    const answersList = document.createElement("ul");
    question.answers.forEach((answer) => {
      const answerItem = document.createElement("li");
      const answerButton = document.createElement("button");
      answerButton.textContent = answer;
      answerButton.addEventListener("click", () => {
        if (answer === question.correctAnswer) {
          score++;
          scoreDisplay.textContent = score;
          scoreDisplay.classList.add("score");
          jsConfetti.addConfetti();
        } else {
          score--;
          scoreDisplay.textContent = score;
          quizContainer.classList.add("incorrect");
          setTimeout(() => {
            quizContainer.classList.remove("incorrect");
          }, 500); // Длительность анимации совпадает с animation-duration
        }
        answerButton.classList.add("correct");
        setTimeout(() => {
          answerButton.style.display = "none";
          answerButton.style.opacity = "0";
          answerButton.style.overflow = "hidden";
        }, 1000);
      });

      answerItem.appendChild(answerButton);
      answersList.appendChild(answerItem);
    });

    listItem.appendChild(answersList);
    quizContainer.appendChild(listItem);
  });
}

createQuiz();
