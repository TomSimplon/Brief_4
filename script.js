window.addEventListener('load', function() { // On récupère toutes les sections
  const sections = document.querySelectorAll('section:not(#accueil)');
  sections.forEach(function(section) {
    section.classList.add('hidden');
  });


  // Déclaration des constantes
  const numberDiv = document.querySelector('.number');
  const questionSection = document.querySelector('.question');
  const answerSection = document.querySelector('.answer');
  // const answerSection1 = document.querySelector('#answer_1');
  // const answerSection2 = document.querySelector('#answer_2');
  // const answerSection3 = document.querySelector('#answer_3');
  // const answerSection4 = document.querySelector('#answer_4');
  // const answerSection5 = document.querySelector('#answer_5');
  // const answerSection6 = document.querySelector('#answer_6');
  // const answerSection7 = document.querySelector('#answer_7');
  // const answerSection8 = document.querySelector('#answer_8');
  // const answerSection9 = document.querySelector('#answer_9');
  // const answerSection10 = document.querySelector('#answer_10');

  // Script qui cache la section accueil affichée et affiche la section question #question_1
  document.querySelector('.begin').addEventListener('click', function() {
    document.querySelector('#accueil').classList.add('hidden');
    document.querySelector('#question_1').classList.remove('hidden');
    startCountdown();
  });

  // Script qui affiche un cooldown de 35 secondes
  let countdown = 35;
  let countdownInterval;

  function startCountdown() {
    clearInterval(countdownInterval);
    countdownInterval = setInterval(function() {
      if (!questionSection.classList.contains('hidden')) {
        countdown--;
        numberDiv.innerHTML = `<p><strong>${countdown}</strong></p>`;
        if (countdown <= 0) {
          clearInterval(countdownInterval);
          hideQuestionShowAnswer()
        }
      }
    }, 1000);
  }

  // Fonction qui cache la section question affichée et affiche la section réponse suivante
  function hideQuestionShowAnswer() {
    questionSection.classList.add('hidden');
    answerSection.classList.remove('hidden');
  }

  // Script qui cache la section question affichée et affiche la section réponse suivante
  document.querySelector('.answer-btn').addEventListener('click', function() {
    const nextAnswerSection = questionSection.nextElementSibling;
    if (nextAnswerSection) {
      questionSection.classList.add('hidden');
      nextAnswerSection.classList.remove('hidden');
    }
    clearInterval(countdownInterval);
  });
  
  // Script qui cache la section réponse affichée et affiche la section question suivante
  document.querySelector('.next-btn').addEventListener('click', function() {
    const nextQuestionSection = answerSection.nextElementSibling;
    if (nextQuestionSection) {
      answerSection.classList.add('hidden');
      nextQuestionSection.classList.remove('hidden');
    }
    startCountdown();
  });

  //function handleAnswerButtonClick() {
   // hideQuestionShowAnswer();
   // startCountdown();
 // }

  //document.querySelector('#question_1 .answer-btn').addEventListener('click', function() {
   // handleAnswerButtonClick(answerSection1);
  // });

  // document.querySelector('#question_2 .answer-btn').addEventListener('click', function() {
   //  handleAnswerButtonClick(answerSection2);
 // });
  
});
