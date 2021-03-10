(function () {
  let data = document.querySelectorAll('[role="listitem"]');
  let arr = [];
  let questions = [];
  data.forEach((item) => {
    questions.push(item);
    let header = item.querySelector('[role="heading"]');
    if (header) {
      arr.push(header.innerText);
    }
  });

  titleArr = arr.slice(1).sort();
  console.log(titleArr);
  let list = document.querySelector('[role="list"]');
  list.innerHTML = "";
  list.appendChild(questions[0]);
  titleArr.forEach((title) => {
    questions.forEach((question) => {
      let temp = question.querySelector('[role="heading"]');
      if (temp) {
        if (temp.innerText === title) {
          console.log(title, temp);
          list.appendChild(
            temp.parentElement.parentElement.parentElement.parentElement
          );
        }
      }
    });
  });
})();

//header.parentElement.parentElement.parentElement.parentElement

// temp.parentElement.parentElement.parentElement.parentElement
