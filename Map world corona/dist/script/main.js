async function getData() {
  const res = await fetch("./LatLong.txt");
  const output = await res.text();
  showData(output);
}

getData();

function showData(data) {
  const countriesData = [];
  const rows = data.split(/\n/).slice(1);
  rows.forEach((element) => {
    const row = element.split(/,/);
    const lat = row[2];
    const lon = row[3];
    const country = row[1];
    countriesData.push({ country, lat, lon });
  });
  getCases(countriesData);
}

async function getCases(countriesData) {
  const res = await fetch("https://corona-api.com/countries");
  const output = await res.json();
  showCases(countriesData, output.data);
}

function showCases(countriesData, data) {
  data.forEach((country) => {
    countriesData.forEach((countryData) => {
      if (countryData.country === country.code) {
        countryData.confirmed = country.latest_data.confirmed;
      }
    });
  });
  countriesData.forEach((test) =>
    console.log(test.country, test.confirmed, test.lon, test.lat)
  );
  countriesData.forEach((data) => {
    let { lat, lon, confirmed } = data;
    if (confirmed) {
      if (confirmed > 1000000) {
        confirmed = 1000000;
      }
      addData(lat, lon, confirmed);
    }
  });
}

var mymap = L.map("mapid", {
  center: [0, 0],
  zoom: 2,
});

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    maxZoom: 4,
    minZoom: 2,
    id: "mapbox/dark-v9",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoibWhtb2R0YXllbCIsImEiOiJja2s4dDFtd3kwcjF1MnBueDZ2ZTVjejlhIn0.LGV-zcABzaUSBOKYfWC0rA",
  }
).addTo(mymap);
document.querySelector('a[href="https://leafletjs.com"').remove();

function addData(lat, lon, count) {
  var circle = L.circle([lat, lon], {
    color: "red",
    fillOpacity: 0.5,
    radius: count,
    stroke: false,
  }).addTo(mymap);
}

// var canvas = document.getElementById("viewport"),
//   context = canvas.getContext("2d");
// make_base();

// function make_base() {
//   base_image = new Image();
//   base_image.src =
//     "https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1,0,0/1024x512?access_token=pk.eyJ1IjoibWhtb2R0YXllbCIsImEiOiJja2s4dDFtd3kwcjF1MnBueDZ2ZTVjejlhIn0.LGV-zcABzaUSBOKYfWC0rA";
//   base_image.onload = function () {
//     context.drawImage(base_image, 0, 0);
//   };
// }

// context.globalCompositeOperation = "destination-over";

// function drawData(lon, lat) {
//   const centerX = canvas.width / 2;
//   const centerY = canvas.height / 2;
//   var cx = canvas.width / 2;
//   var cy = canvas.height / 2;
//   var x = mercX(lon) - cx +90;
//   var y = mercY(lat) - cy;
//   console.log(cx, cy);
//   const radius = 10;
//   context.beginPath();
//   context.arc(x, y, radius, 0, 2 * Math.PI, false);
//   context.fillStyle = "#ff0000";
//   context.fill();
// }

// // 30.033333, 31.233334
// var lat = 40.712776;
// var lon = -74.005974;

// function mercX(lon) {
//   lon = (lon * Math.PI) / 180;
//   let a = (512 / Math.PI) * Math.pow(2, 1);
//   let b = lon + Math.PI;
//   return a * b;
// }

// function mercY(lat) {
//   lat = (lat * Math.PI) / 180;
//   let a = (256 / Math.PI) * Math.pow(2, 1);
//   let b = Math.tan(Math.PI / 4 + lat / 2);
//   let c = Math.PI - Math.log(b);
//   return a * c;
// }

// drawData(lon, lat);
