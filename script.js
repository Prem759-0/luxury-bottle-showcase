gsap.registerPlugin(ScrollTrigger);

// Hero bottle subtle float
gsap.to("#hero-bottle", {
  y: -30,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// Main Scroll Timeline
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#showcase",
    start: "top top",
    end: "bottom bottom",
    scrub: 1.2,
    pin: true,
  }
});

tl.to("#main-bottle", {
  scale: 0.82,
  rotate: -18,
  y: -80,
  duration: 3
})
.to("#main-bottle", {
  scale: 1.08,
  rotate: 15,
  y: 60,
  duration: 3
}, "+=0.5")
.to("#main-bottle", {
  scale: 1,
  rotate: 0,
  y: 0,
  duration: 2
});

// Panel animations
gsap.timeline({
  scrollTrigger: {
    trigger: "#showcase",
    start: "20% top",
    end: "40% top",
    scrub: true
  }
})
.to("#panel-1", { opacity: 0, y: -40 })

gsap.from("#panel-2", {
  scrollTrigger: {
    trigger: "#showcase",
    start: "35% top",
    end: "55% top",
    scrub: true
  },
  opacity: 0,
  y: 80
});

gsap.from("#panel-3", {
  scrollTrigger: {
    trigger: "#showcase",
    start: "60% top",
    end: "80% top",
    scrub: true
  },
  opacity: 0,
  y: 80
});
