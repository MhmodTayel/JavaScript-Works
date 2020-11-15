function breakChain() {
  let chain = document.getElementById("chain");
  chain.className = "fas fa-link";
  setTimeout(() => {
    chain.className = "fas fa-unlink";
  }, 1000);
}

setInterval(breakChain, 2000);

function batteryLoad() {
  let battery = document.getElementById('battery');
  battery.className = 'fas fa-battery-empty';
  setTimeout(()=> {
    battery.className = 'fas fa-battery-quarter'
  },1000)
  setTimeout(()=> {
    battery.className = 'fas fa-battery-half'
  },2000)
  setTimeout(()=> {
    battery.className = 'fas fa-battery-three-quarters'
  },3000)
  setTimeout(()=> {
    battery.className = 'fas fa-battery-full'
  },4000)
}

setInterval(batteryLoad,4000)

