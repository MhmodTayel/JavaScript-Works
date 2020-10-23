// Get input Element
let filterInput = document.getElementById('filterInput');

filterInput.addEventListener('keyup', filterNames);

function filterNames() {
  
  // Get value of input
  let filterValue = document.getElementById('filterInput').value.toUpperCase();
  
  // Get Names ul
  let ul = document.getElementById('names');

  // Get li from ul 
  let li = ul.querySelectorAll('li.col-item');
  // loop through col-item li

  for(let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName('a')[0];
    // If Match
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
      li[i].style.display = '';
      if(filterValue != 0 && a.innerHTML.toUpperCase().indexOf(filterValue) == 0) {
        li[i].style.background = ' rgba(128, 128, 128, 0.058)';
      }
    }else {
      li[i].style.display = 'none';
    }
  }
}
