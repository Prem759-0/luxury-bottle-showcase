gsap.registerPlugin(ScrollTrigger);

// Hero bottle float
gsap.to("#hero-bottle", {
  y: -30,
  duration: 5,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// Magnetic 3D Tilt
const mainBottle = document.getElementById("main-bottle");

mainBottle.addEventListener("mousemove", (e) => {
  const rect = mainBottle.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  
  const rotateX = -y / 14;
  const rotateY = x / 14;

  mainBottle.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
});

mainBottle.addEventListener("mouseleave", () => {
  mainBottle.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)`;
});

// Scroll Timeline
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#showcase",
    start: "top top",
    end: "bottom bottom",
    scrub: 1.6,
    pin: true,
  }
});

tl.to("#main-bottle", { scale: 0.75, rotate: -25, y: -120, duration: 4 })
  .to("#main-bottle", { scale: 1.15, rotate: 20, y: 90, duration: 4 }, "+=0.4")
  .to("#main-bottle", { scale: 1, rotate: 0, y: 0, duration: 3 });

// Panel animations
gsap.to("#panel-1", {
  scrollTrigger: { trigger: "#showcase", start: "15% top", end: "45% top", scrub: true },
  opacity: 0, y: -80
});

gsap.from("#panel-2", {
  scrollTrigger: { trigger: "#showcase", start: "38% top", end: "65% top", scrub: true },
  opacity: 0, y: 120
});

gsap.from("#panel-3", {
  scrollTrigger: { trigger: "#showcase", start: "65% top", end: "92% top", scrub: true },
  opacity: 0, y: 120
});
