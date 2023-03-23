window.addEventListener('load', function() { // On récupère toutes les sections
  const sections = document.querySelectorAll('section:not(#accueil)');
  sections.forEach(function(section) {
    section.classList.add('hidden');
  });


  // Déclaration des constantes
  const numberDiv1 = document.querySelector('#number1');
  const numberDiv2 = document.querySelector('#number2');
  const numberDiv3 = document.querySelector('#number3');
  const numberDiv4 = document.querySelector('#number4');
  const numberDiv5 = document.querySelector('#number5');
  const numberDiv6 = document.querySelector('#number6');
  const numberDiv7 = document.querySelector('#number7');
  const numberDiv8 = document.querySelector('#number8');
  const numberDiv9 = document.querySelector('#number9');
  const numberDiv10 = document.querySelector('#number10');
  const numberDivBonus = document.querySelector('#numberBonus');

  const questionSection1 = document.querySelector('#question_1');
  const questionSection2 = document.querySelector('#question_2');
  const questionSection3 = document.querySelector('#question_3');
  const questionSection4 = document.querySelector('#question_4');
  const questionSection5 = document.querySelector('#question_5');
  const questionSection6 = document.querySelector('#question_6');
  const questionSection7 = document.querySelector('#question_7');
  const questionSection8 = document.querySelector('#question_8');
  const questionSection9 = document.querySelector('#question_9');
  const questionSection10 = document.querySelector('#question_10');
  const bonusSection = document.querySelector('#bonus');
  const arrivéeSection = document.querySelector('#arrivée');

  const answerSection1 = document.querySelector('#answer_1');
  const answerSection2 = document.querySelector('#answer_2');
  const answerSection3 = document.querySelector('#answer_3');
  const answerSection4 = document.querySelector('#answer_4');
  const answerSection5 = document.querySelector('#answer_5');
  const answerSection6 = document.querySelector('#answer_6');
  const answerSection7 = document.querySelector('#answer_7');
  const answerSection8 = document.querySelector('#answer_8');
  const answerSection9 = document.querySelector('#answer_9');
  const answerSection10 = document.querySelector('#answer_10');

   // Script qui affiche un cooldown de 35 secondes
   let countdown1 = 35;
   let countdown2 = 35;
   let countdown3 = 35;
   let countdown4 = 35;
   let countdown5 = 35;
   let countdown6 = 35;
   let countdown7 = 35;
   let countdown8 = 35;
   let countdown9 = 35;
   let countdown10 = 35;
   let countdown11 = 35;

   let countdownInterval;
   

  // Script qui cache la section accueil affichée et affiche la section question #question_1
  document.querySelector('.begin').addEventListener('click', function() {
    document.querySelector('#accueil').classList.add('hidden');
    document.querySelector('#question_1').classList.remove('hidden');
    function startCountdown() {
      clearInterval(countdownInterval);
      countdownInterval = setInterval(function() {
        if (!questionSection1.classList.contains('hidden')) {
          countdown1--;
          numberDiv1.innerHTML = `<p><strong>${countdown1}</strong></p>`;
          if (countdown1 <= 0) {
            clearInterval(countdownInterval);
            hideQuestionShowAnswer()
          }
        }
      }, 1000);
    }
    startCountdown();
  });

  // Fonction qui cache la section question affichée et affiche la section réponse suivante
  function hideQuestionShowAnswer() {
    questionSection1.classList.add('hidden');
    answerSection1.classList.remove('hidden');
    }

    function hideQuestionShowAnswer2() {
      questionSection2.classList.add('hidden');
      answerSection2.classList.remove('hidden');
    }

    function hideQuestionShowAnswer3() {
      questionSection3.classList.add('hidden');
      answerSection3.classList.remove('hidden');
    }

    function hideQuestionShowAnswer4() {
      questionSection4.classList.add('hidden');
      answerSection4.classList.remove('hidden');
    }

    function hideQuestionShowAnswer5() {
      questionSection5.classList.add('hidden');
      answerSection5.classList.remove('hidden');
    }

    function hideQuestionShowAnswer6() {
      questionSection6.classList.add('hidden');
      answerSection6.classList.remove('hidden');
    }

    function hideQuestionShowAnswer7() {
      questionSection7.classList.add('hidden');
      answerSection7.classList.remove('hidden');
    }

    function hideQuestionShowAnswer8() {
      questionSection8.classList.add('hidden');
      answerSection8.classList.remove('hidden');
    }

    function hideQuestionShowAnswer9() {
      questionSection9.classList.add('hidden');
      answerSection9.classList.remove('hidden');
    }

    function hideQuestionShowAnswer10() {
      questionSection10.classList.add('hidden');
      answerSection10.classList.remove('hidden');
    }

    function hideQuestionShowAnswer11() {
      bonusSection.classList.add('hidden');
      arrivéeSection.classList.remove('hidden');
    }

  // Script qui cache la section question affichée et affiche la section réponse suivante
  
    const answerBtns1 = document.querySelectorAll("#question_1 .answer-btn");
    answerBtns1.forEach(btn => {
      btn.addEventListener("click", () => {
      questionSection1.classList.add('hidden');
      answerSection1.classList.remove('hidden');
      clearInterval(countdownInterval);
      // Récupérer le bouton de réponse avec la classe .good_answer
      const goodAnswerBtn = document.querySelector('#question_1 .good_answer');
      // Récupérer tous les boutons de réponse avec la classe .bad_answer
      const badAnswerBtns = document.querySelectorAll('#question_1 .bad_answer');
      // Récupérer l'élément de réponse correspondant
      const responseElem = document.querySelector('.réponse_1');
      // Définir une variable pour stocker si la réponse a été trouvée
      let responseFound = false;
      // Ajouter un événement au bouton de bonne réponse
      goodAnswerBtn.addEventListener('click', function() {
      responseElem.style.backgroundColor = 'green';
      responseFound = true;
      });
      // Ajouter des événements à tous les boutons de mauvaise réponse
      badAnswerBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
      responseElem.style.backgroundColor = 'red';
      responseFound = true;
      });
      });
      });
    });
  

    const answerBtns2 = document.querySelectorAll("#question_2 .answer-btn");
    answerBtns2.forEach(btn => {
      btn.addEventListener("click", () => {
      questionSection2.classList.add('hidden');
      answerSection2.classList.remove('hidden');
      clearInterval(countdownInterval);
      // Récupérer le bouton de réponse avec la classe .good_answer
      const goodAnswerBtn = document.querySelector('#question_2 .good_answer');
      // Récupérer tous les boutons de réponse avec la classe .bad_answer
      const badAnswerBtns = document.querySelectorAll('#question_2 .bad_answer');
      // Récupérer l'élément de réponse correspondant
      const responseElem = document.querySelector('.réponse_2');
      // Définir une variable pour stocker si la réponse a été trouvée
      let responseFound = false;
      // Ajouter un événement au bouton de bonne réponse
      goodAnswerBtn.addEventListener('click', function() {
      responseElem.style.backgroundColor = 'green';
      responseFound = true;
      });
      // Ajouter des événements à tous les boutons de mauvaise réponse
      badAnswerBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
      responseElem.style.backgroundColor = 'red';
      responseFound = true;
      });
      });
      });
    });

    const answerBtns3 = document.querySelectorAll("#question_3 .answer-btn");
    answerBtns3.forEach(btn => {
      btn.addEventListener("click", () => {
      questionSection3.classList.add('hidden');
      answerSection3.classList.remove('hidden');
      clearInterval(countdownInterval);
      // Récupérer le bouton de réponse avec la classe .good_answer
      const goodAnswerBtn = document.querySelector('#question_3 .good_answer');
      // Récupérer tous les boutons de réponse avec la classe .bad_answer
      const badAnswerBtns = document.querySelectorAll('#question_3 .bad_answer');
      // Récupérer l'élément de réponse correspondant
      const responseElem = document.querySelector('.réponse_3');
      // Définir une variable pour stocker si la réponse a été trouvée
      let responseFound = false;
      // Ajouter un événement au bouton de bonne réponse
      goodAnswerBtn.addEventListener('click', function() {
      responseElem.style.backgroundColor = 'green';
      responseFound = true;
      });
      // Ajouter des événements à tous les boutons de mauvaise réponse
      badAnswerBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
      responseElem.style.backgroundColor = 'red';
      responseFound = true;
      });
      });
      });
    });

    const answerBtns4 = document.querySelectorAll("#question_4 .answer-btn");
    answerBtns4.forEach(btn => {
      btn.addEventListener("click", () => {
      questionSection4.classList.add('hidden');
      answerSection4.classList.remove('hidden');
      clearInterval(countdownInterval);
      // Récupérer le bouton de réponse avec la classe .good_answer
      const goodAnswerBtn = document.querySelector('#question_4 .good_answer');
      // Récupérer tous les boutons de réponse avec la classe .bad_answer
      const badAnswerBtns = document.querySelectorAll('#question_4 .bad_answer');
      // Récupérer l'élément de réponse correspondant
      const responseElem = document.querySelector('.réponse_4');
      // Définir une variable pour stocker si la réponse a été trouvée
      let responseFound = false;
      // Ajouter un événement au bouton de bonne réponse
      goodAnswerBtn.addEventListener('click', function() {
      responseElem.style.backgroundColor = 'green';
      responseFound = true;
      });
      // Ajouter des événements à tous les boutons de mauvaise réponse
      badAnswerBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
      responseElem.style.backgroundColor = 'red';
      responseFound = true;
      });
      });
      });
    });

    const answerBtns5 = document.querySelectorAll("#question_5 .answer-btn");
    answerBtns5.forEach(btn => {
      btn.addEventListener("click", () => {
      questionSection5.classList.add('hidden');
      answerSection5.classList.remove('hidden');
      clearInterval(countdownInterval);
      // Récupérer le bouton de réponse avec la classe .good_answer
      const goodAnswerBtn = document.querySelector('#question_5 .good_answer');
      // Récupérer tous les boutons de réponse avec la classe .bad_answer
      const badAnswerBtns = document.querySelectorAll('#question_5 .bad_answer');
      // Récupérer l'élément de réponse correspondant
      const responseElem = document.querySelector('.réponse_5');
      // Définir une variable pour stocker si la réponse a été trouvée
      let responseFound = false;
      // Ajouter un événement au bouton de bonne réponse
      goodAnswerBtn.addEventListener('click', function() {
      responseElem.style.backgroundColor = 'green';
      responseFound = true;
      });
      // Ajouter des événements à tous les boutons de mauvaise réponse
      badAnswerBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
      responseElem.style.backgroundColor = 'red';
      responseFound = true;
      });
      });
      });
    });

    const answerBtns6 = document.querySelectorAll("#question_6 .answer-btn");
    answerBtns6.forEach(btn => {
      btn.addEventListener("click", () => {
      questionSection6.classList.add('hidden');
      answerSection6.classList.remove('hidden');
      clearInterval(countdownInterval);
      // Récupérer le bouton de réponse avec la classe .good_answer
      const goodAnswerBtn = document.querySelector('#question_6 .good_answer');
      // Récupérer tous les boutons de réponse avec la classe .bad_answer
      const badAnswerBtns = document.querySelectorAll('#question_6 .bad_answer');
      // Récupérer l'élément de réponse correspondant
      const responseElem = document.querySelector('.réponse_6');
      // Définir une variable pour stocker si la réponse a été trouvée
      let responseFound = false;
      // Ajouter un événement au bouton de bonne réponse
      goodAnswerBtn.addEventListener('click', function() {
      responseElem.style.backgroundColor = 'green';
      responseFound = true;
      });
      // Ajouter des événements à tous les boutons de mauvaise réponse
      badAnswerBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
      responseElem.style.backgroundColor = 'red';
      responseFound = true;
      });
      });
      });
    });

    const answerBtns7 = document.querySelectorAll("#question_7 .answer-btn");
    answerBtns7.forEach(btn => {
      btn.addEventListener("click", () => {
      questionSection7.classList.add('hidden');
      answerSection7.classList.remove('hidden');
      clearInterval(countdownInterval);
      // Récupérer le bouton de réponse avec la classe .good_answer
      const goodAnswerBtn = document.querySelector('#question_7 .good_answer');
      // Récupérer tous les boutons de réponse avec la classe .bad_answer
      const badAnswerBtns = document.querySelectorAll('#question_7 .bad_answer');
      // Récupérer l'élément de réponse correspondant
      const responseElem = document.querySelector('.réponse_7');
      // Définir une variable pour stocker si la réponse a été trouvée
      let responseFound = false;
      // Ajouter un événement au bouton de bonne réponse
      goodAnswerBtn.addEventListener('click', function() {
      responseElem.style.backgroundColor = 'green';
      responseFound = true;
      });
      // Ajouter des événements à tous les boutons de mauvaise réponse
      badAnswerBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
      responseElem.style.backgroundColor = 'red';
      responseFound = true;
      });
      });
      });
    });

    const answerBtns8 = document.querySelectorAll("#question_8 .answer-btn");
    answerBtns8.forEach(btn => {
      btn.addEventListener("click", () => {
      questionSection8.classList.add('hidden');
      answerSection8.classList.remove('hidden');
      clearInterval(countdownInterval);
      // Récupérer le bouton de réponse avec la classe .good_answer
      const goodAnswerBtn = document.querySelector('#question_8 .good_answer');
      // Récupérer tous les boutons de réponse avec la classe .bad_answer
      const badAnswerBtns = document.querySelectorAll('#question_8 .bad_answer');
      // Récupérer l'élément de réponse correspondant
      const responseElem = document.querySelector('.réponse_8');
      // Définir une variable pour stocker si la réponse a été trouvée
      let responseFound = false;
      // Ajouter un événement au bouton de bonne réponse
      goodAnswerBtn.addEventListener('click', function() {
      responseElem.style.backgroundColor = 'green';
      responseFound = true;
      });
      // Ajouter des événements à tous les boutons de mauvaise réponse
      badAnswerBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
      responseElem.style.backgroundColor = 'red';
      responseFound = true;
      });
      });
      });
    })

    const answerBtns9 = document.querySelectorAll("#question_9 .answer-btn");
    answerBtns9.forEach(btn => {
      btn.addEventListener("click", () => {
      questionSection9.classList.add('hidden');
      answerSection9.classList.remove('hidden');
      clearInterval(countdownInterval);
      // Récupérer le bouton de réponse avec la classe .good_answer
      const goodAnswerBtn = document.querySelector('#question_9 .good_answer');
      // Récupérer tous les boutons de réponse avec la classe .bad_answer
      const badAnswerBtns = document.querySelectorAll('#question_9 .bad_answer');
      // Récupérer l'élément de réponse correspondant
      const responseElem = document.querySelector('.réponse_9');
      // Définir une variable pour stocker si la réponse a été trouvée
      let responseFound = false;
      // Ajouter un événement au bouton de bonne réponse
      goodAnswerBtn.addEventListener('click', function() {
      responseElem.style.backgroundColor = 'green';
      responseFound = true;
      });
      // Ajouter des événements à tous les boutons de mauvaise réponse
      badAnswerBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
      responseElem.style.backgroundColor = 'red';
      responseFound = true;
      });
      });
      });
    })

    const answerBtns10 = document.querySelectorAll("#question_10 .answer-btn");
    answerBtns10.forEach(btn => {
      btn.addEventListener("click", () => {
      questionSection10.classList.add('hidden');
      answerSection10.classList.remove('hidden');
      clearInterval(countdownInterval);
      // Récupérer le bouton de réponse avec la classe .good_answer
      const goodAnswerBtn = document.querySelector('#question_10 .good_answer');
      // Récupérer tous les boutons de réponse avec la classe .bad_answer
      const badAnswerBtns = document.querySelectorAll('#question_10 .bad_answer');
      // Récupérer l'élément de réponse correspondant
      const responseElem = document.querySelector('.réponse_10');
      // Définir une variable pour stocker si la réponse a été trouvée
      let responseFound = false;
      // Ajouter un événement au bouton de bonne réponse
      goodAnswerBtn.addEventListener('click', function() {
      responseElem.style.backgroundColor = 'green';
      responseFound = true;
      });
      // Ajouter des événements à tous les boutons de mauvaise réponse
      badAnswerBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
      responseElem.style.backgroundColor = 'red';
      responseFound = true;
      });
      });
      });
    })

document.querySelector('#bonus .answer-btn').addEventListener('click', function() {
  bonusSection.classList.add('hidden');
  arrivéeSection.classList.remove('hidden');
  clearInterval(countdownInterval);
});
  
  // Script qui cache la section réponse affichée et affiche la section question suivante
  document.querySelector('#answer_1 .next-btn').addEventListener('click', function() {
    answerSection1.classList.add('hidden');
    questionSection2.classList.remove('hidden');
    function startCountdown2() {
      clearInterval(countdownInterval);
      countdownInterval = setInterval(function() {
        if (!questionSection2.classList.contains('hidden')) {
          countdown2--;
          numberDiv2.innerHTML = `<p><strong>${countdown2}</strong></p>`;
          if (countdown2 <= 0) {
            clearInterval(countdownInterval);
            hideQuestionShowAnswer2()
          }
        }
      }, 1000);
    }
    startCountdown2();
  });

  document.querySelector('#answer_2 .next-btn').addEventListener('click', function() {
    answerSection2.classList.add('hidden');
    questionSection3.classList.remove('hidden');
    function startCountdown3() {
      clearInterval(countdownInterval);
      countdownInterval = setInterval(function() {
        if (!questionSection3.classList.contains('hidden')) {
          countdown3--;
          numberDiv3.innerHTML = `<p><strong>${countdown3}</strong></p>`;
          if (countdown3 <= 0) {
            clearInterval(countdownInterval);
            hideQuestionShowAnswer3()
          }
        }
      }, 1000);
    }
    startCountdown3();
  });

  document.querySelector('#answer_3 .next-btn').addEventListener('click', function() {
    answerSection3.classList.add('hidden');
    questionSection4.classList.remove('hidden');
    function startCountdown4() {
      clearInterval(countdownInterval);
      countdownInterval = setInterval(function() {
        if (!questionSection4.classList.contains('hidden')) {
          countdown4--;
          numberDiv4.innerHTML = `<p><strong>${countdown4}</strong></p>`;
          if (countdown4 <= 0) {
            clearInterval(countdownInterval);
            hideQuestionShowAnswer4()
          }
        }
      }, 1000);
    }
    startCountdown4();
  });

  document.querySelector('#answer_4 .next-btn').addEventListener('click', function() {
    answerSection4.classList.add('hidden');
    questionSection5.classList.remove('hidden');
    function startCountdown5() {
      clearInterval(countdownInterval);
      countdownInterval = setInterval(function() {
        if (!questionSection5.classList.contains('hidden')) {
          countdown5--;
          numberDiv5.innerHTML = `<p><strong>${countdown5}</strong></p>`;
          if (countdown5 <= 0) {
            clearInterval(countdownInterval);
            hideQuestionShowAnswer5()
          }
        }
      }, 1000);
    }
    startCountdown5();
  });

  document.querySelector('#answer_5 .next-btn').addEventListener('click', function() {
    answerSection5.classList.add('hidden');
    questionSection6.classList.remove('hidden');
    function startCountdown6() {
      clearInterval(countdownInterval);
      countdownInterval = setInterval(function() {
        if (!questionSection6.classList.contains('hidden')) {
          countdown6--;
          numberDiv6.innerHTML = `<p><strong>${countdown6}</strong></p>`;
          if (countdown6 <= 0) {
            clearInterval(countdownInterval);
            hideQuestionShowAnswer6()
          }
        }
      }, 1000);
    }
    startCountdown6();
  });

    document.querySelector('#answer_6 .next-btn').addEventListener('click', function() {
      answerSection6.classList.add('hidden');
      questionSection7.classList.remove('hidden');
      function startCountdown7() {
        clearInterval(countdownInterval);
        countdownInterval = setInterval(function() {
          if (!questionSection7.classList.contains('hidden')) {
            countdown7--;
            numberDiv7.innerHTML = `<p><strong>${countdown7}</strong></p>`;
            if (countdown7 <= 0) {
              clearInterval(countdownInterval);
              hideQuestionShowAnswer7()
            }
          }
        }, 1000);
      }
      startCountdown7();
  });

  document.querySelector('#answer_7 .next-btn').addEventListener('click', function() {
    answerSection7.classList.add('hidden');
    questionSection8.classList.remove('hidden');
    function startCountdown8() {
      clearInterval(countdownInterval);
      countdownInterval = setInterval(function() {
        if (!questionSection8.classList.contains('hidden')) {
          countdown8--;
          numberDiv8.innerHTML = `<p><strong>${countdown8}</strong></p>`;
          if (countdown8 <= 0) {
            clearInterval(countdownInterval);
            hideQuestionShowAnswer8()
          }
        }
      }, 1000);
    }
    startCountdown8();
});

document.querySelector('#answer_8 .next-btn').addEventListener('click', function() {
  answerSection8.classList.add('hidden');
  questionSection9.classList.remove('hidden');
  function startCountdown9() {
    clearInterval(countdownInterval);
    countdownInterval = setInterval(function() {
      if (!questionSection9.classList.contains('hidden')) {
        countdown9--;
        numberDiv9.innerHTML = `<p><strong>${countdown9}</strong></p>`;
        if (countdown9 <= 0) {
          clearInterval(countdownInterval);
          hideQuestionShowAnswer9()
        }
      }
    }, 1000);
  }
  startCountdown9();
});

document.querySelector('#answer_9 .next-btn').addEventListener('click', function() {
  answerSection9.classList.add('hidden');
  questionSection10.classList.remove('hidden');
  function startCountdown10() {
    clearInterval(countdownInterval);
    countdownInterval = setInterval(function() {
      if (!questionSection10.classList.contains('hidden')) {
        countdown10--;
        numberDiv10.innerHTML = `<p><strong>${countdown10}</strong></p>`;
        if (countdown10 <= 0) {
          clearInterval(countdownInterval);
          hideQuestionShowAnswer10()
        }
      }
    }, 1000);
  }
  startCountdown10();
});

document.querySelector('#answer_10 .next-btn').addEventListener('click', function() {
  answerSection10.classList.add('hidden');
  bonusSection.classList.remove('hidden');
  function startCountdown11() {
    clearInterval(countdownInterval);
    countdownInterval = setInterval(function() {
      if (!bonusSection.classList.contains('hidden')) {
        countdown11--;
        numberDivBonus.innerHTML = `<p><strong>${countdown11}</strong></p>`;
        if (countdown11 <= 0) {
          clearInterval(countdownInterval);
          hideQuestionShowAnswer11()
        }
      }
    }, 1000);
  }
  startCountdown11();
});

});