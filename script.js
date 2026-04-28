gsap.registerPlugin(ScrollTrigger);

// Hero bottle gentle float
gsap.to("#hero-bottle", {
  y: -25,
  duration: 4,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// Magnetic 3D Tilt Effect
const bottle = document.getElementById("main-bottle");

bottle.addEventListener("mousemove", (e) => {
  const rect = bottle.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  
  const rotateX = -y / 12;
  const rotateY = x / 12;

  bottle.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
});

bottle.addEventListener("mouseleave", () => {
  bottle.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
});

// Scroll Trigger Timeline
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#showcase",
    start: "top top",
    end: "bottom bottom",
    scrub: 1.5,
    pin: true,
  }
});

tl.to("#main-bottle", { scale: 0.78, rotate: -22, y: -100, duration: 4 })
  .to("#main-bottle", { scale: 1.12, rotate: 18, y: 80, duration: 4 }, "+=0.3")
  .to("#main-bottle", { scale: 1, rotate: 0, y: 0, duration: 3 });

// Content Panels
gsap.to("#panel-1", {
  scrollTrigger: { trigger: "#showcase", start: "20% top", end: "45% top", scrub: true },
  opacity: 0,
  y: -60
});

gsap.from("#panel-2", {
  scrollTrigger: { trigger: "#showcase", start: "40% top", end: "65% top", scrub: true },
  opacity: 0,
  y: 100
});

gsap.from("#panel-3", {
  scrollTrigger: { trigger: "#showcase", start: "65% top", end: "90% top", scrub: true },
  opacity: 0,
  y: 100
});
