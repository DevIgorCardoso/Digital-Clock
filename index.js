hours = document.querySelector('#hour');
minutes = document.querySelector('#min');
seconds = document.querySelector('#sec');

let hora = new Date;

let horaAtual = hora.getHours()
let MinutoAtual = hora.getMinutes()
let segundoAtual = hora.getSeconds()

hours.innerHTML = (horaAtual) + 'H'
minutes.innerHTML = (MinutoAtual) + 'MIN'
seconds.innerHTML = (segundoAtual) + 'SEC'

setTimeout(function() {
  window.location.reload(1);
}, 1000);