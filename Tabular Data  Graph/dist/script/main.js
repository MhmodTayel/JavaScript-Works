async function getData() {
  const res = await fetch("./script/data.csv");
  const data = await res.text();
  modifyData(data);
}

getData();

function modifyData(data) {
  const tabel = data.split("\n").slice(1);
  let xlabels = [];
  let ytemps = [];
  tabel.forEach((row) => {
    const columns = row.split(",");
    const year = columns[0];
    xlabels.push(year);
    const temp = columns[1];
    ytemps.push(+temp + 14);
    console.log(year, temp);
  });
  drawChart(xlabels, ytemps);
}

function drawChart(xlabels, ytemps) {
  var ctx = document.getElementById("chart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: xlabels,
      datasets: [
        {
          label: "Global Average Temperature",
          data: ytemps,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          fill: false,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: false,
            },
          },
        ],
      },
      responsive: false,
    },
  });
}
