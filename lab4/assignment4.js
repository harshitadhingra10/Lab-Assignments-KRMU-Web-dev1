function startQuiz() {
  let questions = [
    { q: "What does HTML stand for?", a: "hypertext markup language" },
    { q: "What is the capital of India?", a: "new delhi" },
    { q: "Which planet is known as the red planet?", a: "mars" }
  ];

  let score = 0;

  alert("Welcome to my simple quiz");

  for (let i = 0; i < questions.length; i++) {
    let userAns = prompt(questions[i].q);

    if (userAns === null) {
      alert("You left the quiz.");
      return;
    }

    userAns = userAns.toLowerCase().trim();

    if (userAns === questions[i].a) {
      alert("Correct!");
      score++;
    } else {
      alert("Wrong! The right answer is: " + questions[i].a);
    }
  }

  alert("Quiz finished! Your score is " + score + " out of " + questions.length);
}

startQuiz();
