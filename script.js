window.addEventListener('load', function() {
  // Récupère toutes les sections sauf celle de l'accueil
  const sections = document.querySelectorAll('section:not(#accueil)');
  // Cache toutes les sections
  sections.forEach(function(section) {
    section.classList.add('hidden');
  });

  const numberDiv = document.querySelector('.number');
  const questionSection = document.querySelector('.question');

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
    }
      }
    }, 1000);
  }

  startCountdown();

  const boutonCommencer = document.querySelector('.begin');
  const sectionAccueil = document.querySelector('#accueil');
  const sectionQuestion1 = document.querySelector('#question_1');

  boutonCommencer.addEventListener('click', function() {
    sectionAccueil.classList.add('hidden');
    sectionQuestion1.classList.remove('hidden');
    startCountdown();
  });
});