/*// 移動到目標點。插值運算
gsap.to(".logo", {
  duration: "2",
  x: "600",
  background: "#222222",
  borderRadius: "20%",
  border: "5px solid green",
});
// 縮小
gsap.to(".logo", {
  duration: 1,
  scale: 0.1,
  y: 40,
  ease: "power1.inOut",
  stagger: {
    grid: [7, 15],
    from: "random",
    axis: "y",
    ease: "power2.in",
    amount: 1.5
  }
});*/

let tl = gsap.timeline({
  repeat: 1,
  yoyo: true,// 倒放
});
tl.to(".logo", {
  duration: 1,
  scale: 0.1,
  y: 40,
  ease: "power1.inOut",
  stagger: {
    grid: [7, 15],
    from: "random",
    axis: "y",
    ease: "power2.in",
    amount: 1.5
  }
});



//TODO:設計menu text的動畫
