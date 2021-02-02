anime({
  targets: ".anime",
  translateX: 400,
  rotateZ: 360,
  scale: 2,
  duration: 3000,
  loop: true,
  keyframes: [
    { translateX: 700 },
    { translateY: 50 },
    { translateX: 100 },
    { translateY: -50 },
  ],
});

anime({
  targets: "#counter",
  value: [0, 100000],
  duration: 3000,
  round: 1,
  easing: "linear",
  loop: true,
  direction: "alternate",
});
