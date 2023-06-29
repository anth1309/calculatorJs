let choice;
let first;
let second;
let operator;
let result;

do {
   choice = prompt('Quel operation souhaitez vous effectuer ?\n\n1. Addition\n2. Soustraction\n3. Multiplication\n4. Division');
} while (choice != '1' && choice != '2' && choice != '3' && choice != '4');

do {
   first = Number(prompt('Entrez un premier nombre'));
   second = Number(prompt('Entrez un deuxiéme nombre'));
} while (isNaN(first) || isNaN(second));

try {

   switch (choice) {
      case '1':
         result = first + second
         operator = "l'addition"
         break;
      case '2':
         result = first - second
         operator = "la soustraction"
         break;
      case '3':
         result = first * second
         operator = "la multiplication"
         break;
      case '4': if (second == 0) {
         throw new Error('On ne peut pas diviser par zéro');
      } else {
         result = first / second
         operator = "la division"
      }
         break;
      default:
         throw new Error('Une erreur est survenue veuillez recommencer')
   }
   alert('le resultat de ' + operator + ' de ' + first + ' et ' + second + ' est : ' + result)

} catch (error) {
   alert(error.message)
}



