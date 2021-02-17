async function getData() {
  const res = await fetch("./script/data.csv");
  const data = await res.text();
  modifyData(data);
}

getData();

function modifyData(data) {
  const rows = data.split("\n").slice(1);
  rows.forEach((element) => {
    const row = element.split(",");
    const year = row[0];
    const temp = row[1];
    console.log(year, temp);
  });
}
