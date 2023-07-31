let btn = document.querySelector('button');
let second = 5;
let interval
function start() {
   interval = setInterval(decompte, 1000)
}

function stop() {
   clearInterval(interval)
   document.body.innerHTML += "Stop c est finit !!"
}

function decompte() {
   second--;
   if (second == 0) {
      stop();
   }
   else {
      document.body.innerHTML += second + '<br>';
   }
}

btn.addEventListener('click', start)