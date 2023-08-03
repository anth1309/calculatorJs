document.addEventListener("DOMContentLoaded", function () {


   let button = document.querySelector('button');
   let input = document.querySelector('#price');
   let error = document.querySelector('small');
   let form = document.querySelector('#form');
   let randomNumber = Math.floor(Math.random() * 1001);
   let round = 0;
   let numberChoice;

   error.style.display = 'none';

   function check(numberChoice) {
      let instruction = document.createElement('div');
      if (numberChoice < randomNumber) {
         instruction.textContent = "#" + round + " essai(s) (votre choix " + numberChoice + ") C'est plus !"
         instruction.className = 'instruction more'
      }
      else if (numberChoice > randomNumber) {
         instruction.textContent = "#" + round + " essais (s) (Votre choix" + numberChoice + ") C'est moins !"
         instruction.className = 'instruction less'
      }
      else {
         instruction.textContent = "#" + round + " essais (s) (" + numberChoice + ") Felicitation c est gagné !!!!"
         instruction.className = 'instruction end'
         input.disables = true
      }
      document.querySelector('#instructions').prepend(instruction);

   }
   input.addEventListener('keyup', () => {
      if (!isNaN(price.value)) {
         error.style.display = 'none'
      }
      else {
         error.style.display = 'block'
      }
   })

   form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (isNaN(price.value) || price.value == "") {
         input.style.borderColor = 'red';
      }
      else {
         round++;
         console.log(round);
         input.style.borderColor = 'silver';
         numberChoice = price.value;
         input.value = '';
         check(numberChoice);
      }
   })
   //console.log(round, ' nombre ', numberChoice);

});