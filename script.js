gsap.registerPlugin(ScrollTrigger);

// Hero float animation
gsap.to("#hero-bottle", {
  y: -35,
  duration: 6,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// Advanced Scroll Animation for Gallery Bottle
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#gallery",
    start: "top top",
    end: "bottom bottom",
    scrub: 1.8,
    pin: true,
  }
});

tl.to("#gallery-bottle", {
  scale: 0.85,
  rotate: -28,
  y: -80,
  duration: 3
})
.to("#gallery-bottle", {
  scale: 1.1,
  rotate: 22,
  y: 60,
  duration: 3
})
.to("#gallery-bottle", {
  scale: 1,
  rotate: 0,
  y: 0,
  duration: 2
});

// Horizontal scroll sync
gsap.to("#horizontal", {
  scrollTrigger: {
    trigger: "#gallery",
    start: "top top",
    end: "bottom bottom",
    scrub: 2,
  },
  x: () => -(document.getElementById("horizontal").scrollWidth - window.innerWidth) * 0.7
});
