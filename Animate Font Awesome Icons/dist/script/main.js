function breakChain() {
  let chain = document.getElementById("chain");
  chain.className = "fas fa-link";
  setTimeout(() => {
    chain.className = "fas fa-unlink";
  }, 1000);
}

setInterval(breakChain, 2000);
