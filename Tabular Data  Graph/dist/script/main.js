async function getData() {
  const res = await fetch("./script/data.csv");
  const data = await res.text();
  console.log(data);
}

getData();
