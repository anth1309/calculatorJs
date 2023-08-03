let btn = document.querySelector('button');
let message = document.querySelector('#message')

let hidden = true;
message.style.display = "none"


btn.addEventListener('click', () => {
   if (hidden) {
      btn.textContent = "Cacher";
      message.style.display = "block";
      hidden = false;
   }
   else {
      btn.textContent = "Afficher";
      message.style.display = "none";
      hidden = true;
   }
})