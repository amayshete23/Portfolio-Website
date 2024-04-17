document.addEventListener('DOMContentLoaded', (event) => {
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const nextButton = document.getElementById('next-button');
  let currentQuestionIndex = 0;

  const questions = [
      {
          question: "Who developed Python Programming Language ?",
          options: ["Wick van Rossum","Rasmus Lerdorf", "Guido van Rossum", "Niene Stom"],
          answer: "Guido van Rossum"
      },
      
      {
        question: "What is the maximum length of a Python identifier?",
        options: ["32", "16", "128", "No fixed length is specified"],
        answer: "No fixed length is specified"
      },

      {
        question: "Which type of Programming does Python support?",
        options: ["object-oriented programming","structured programming","functional programming","all of the mentioned"],
        answer: "all of the mentioned"
      },

      {
        question: "Which of the following is the correct extension of the Python file?",
        options: [".python",".pl",".py",".p"],
        answer: ".py"
      },

      {
        question: "Is Python code compiled or interpreted?",
        options: ["Python code is both compiled and interpreted","Python code is neither compiled nor interpreted","Python code is only compiled"," Python code is only interpreted"],
        answer: "Python code is both compiled and interpreted"
      },

      {
        question: "All keywords in Python are in _________",
        options: ["Capitalized","lower case","UPPER CASE","None of the mentioned"],
        answer: "None of the mentioned"
      },

      {
        question: "Which keyword is used for function in Python language?",
        options: ["Function","def","Fun","Define"],
        answer: "def"
      },

      {
        question: "Which of the following character is used to give single-line comments in Python?",
        options: ["//","#","!","/*"],
        answer: "#"
      }
  ];

  function loadQuestion(questionIndex) {
      const question = questions[questionIndex];
      questionElement.textContent = question.question;
      optionsElement.innerHTML = '';
      question.options.forEach(option => {
          const button = document.createElement('button');
          button.textContent = option;
          button.classList.add('btn', 'btn-option');
          button.onclick = () => selectOption(option);
          optionsElement.appendChild(button);
      });
  }

  function selectOption(selected) {
      const question = questions[currentQuestionIndex];
      if (selected === question.answer) {
          alert('Correct!');
      } else {
          alert('Wrong!');
      }
  }

  nextButton.addEventListener('click', () => {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
          loadQuestion(currentQuestionIndex);
      } else {
          alert('Quiz completed!');
          currentQuestionIndex = 0;
      }
      loadQuestion(currentQuestionIndex);
  });

  // Load the first question
  loadQuestion(currentQuestionIndex);
});