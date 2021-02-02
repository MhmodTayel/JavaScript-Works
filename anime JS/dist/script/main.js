// anime({
//   targets: ".anime",
//   translateX: 400,
//   rotateZ: 360,
//   scale: 2,
//   duration: 3000,
//   loop: true,
//   keyframes: [
//     { translateX: 700 },
//     { translateY: 50 },
//     { translateX: 100 },
//     { translateY: -50 },
//   ],
// });

// anime({
//   targets: "#counter",
//   value: [0, 100000],
//   duration: 3000,
//   round: 1,
//   easing: "linear",
//   loop: true,
//   direction: "alternate",
// });

// var logEl = document.querySelector(".battery-log");

// var battery = {
//   charged: "0%",
//   cycles: 120,
// };

// anime({
//   targets: battery,
//   charged: "100%",
//   cycles: 130,
//   duration: 50000,
//   round: 1,
//   easing: "linear",
//   update() {
//     logEl.innerHTML = JSON.stringify(battery);
//   },
// });

// anime({
//   targets: ['.svg-attributes-demo polygon', 'feTurbulence', 'feDisplacementMap'],
//   points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
//   baseFrequency: 0,
//   scale: 1,
//   loop: true,
//   direction: 'alternate',
//   easing: 'easeInOutExpo'
// });

anime({
  targets: '.line-drawing-demo .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});