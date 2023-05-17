//Validacion formulario
let form = document.querySelector('form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    const answer1 = event.target.answer1.value;
    const answer2 = event.target.answer2.value;
    const answer3 = event.target.answer3.value;
    const answer4 = event.target.answer4.value;
    const answer5 = event.target.answer5.value;
    const answer6 = event.target.answer6.value;
    const answer7 = event.target.answer7.value;
    const answer8 = event.target.answer8.value;
    const answer9 = event.target.answer9.value;
    const answer10 = event.target.answer10.value;

 // Comprobar respuestas correctas

  const answers = {
    answer1: 'Adís-adeba',
    answer2: 'Jakarta',
    answer3: 'Bogotá',
    answer4: 'Brasilia',
    answer5: 'Ankara',
    answer6: 'Ottawa',
    answer7: 'Ulan-bator',
    answer8: 'Tiflis',
    answer9: 'Kabul',
    answer10: 'Saná'
  };
   

  let score = 0;

  const questions = document.querySelectorAll('.question');

  questions.forEach((question, index) => {
    const answerSelected = document.querySelector(`input[name=answer${index + 1}]:checked`);
      if (answerSelected) {
        const id = answerSelected.id;
        if (id === answers[`answer${index + 1}`]) {
          score++;
        }
      }
  });
  
  //Pintar respuestas correctas  
  let showScore = document.querySelector('section');
  let printGood = `<h3>Congratulations, You are smarter than the average North American.<br><span> Your score is: ${score}</span></h3>`
  let printBad = `<h3>Oh, No! <br><span>Your score is: ${score}</span><br> Try again after you learnt some geography.<br> Go Cry!</h3>`

  resultMessage = score >= 5 ? printGood : printBad;

  let popupContent = `
    <div class="popup">
    ${resultMessage}
    <a href="quiz.html">Try again</a>
    </div>`;

  showScore.innerHTML += popupContent;
  form.style.display = 'none';
  showScore.style.display = 'flex';

});  
  

   

      
  