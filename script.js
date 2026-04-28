gsap.registerPlugin(ScrollTrigger);

// Initial bottle float animation
gsap.from("#bottle", {
  y: 80,
  opacity: 0,
  duration: 1.8,
  ease: "power3.out"
});

// Main ScrollTrigger Animation
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#pinned-section",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    pin: true,
    anticipatePin: 1
  }
});

// Animate the pinned bottle
tl.to("#pinned-bottle", {
  scale: 0.85,
  rotate: -12,
  y: -60,
  duration: 2
})
.to("#pinned-bottle", {
  scale: 1.05,
  rotate: 8,
  y: 40,
  duration: 2
}, "+=0.5");

// Content reveals
gsap.to("#content-1", {
  scrollTrigger: {
    trigger: "#pinned-section",
    start: "top 30%",
    end: "30% 30%",
    scrub: true,
    toggleActions: "play none none reverse"
  },
  opacity: 0
});

gsap.from("#content-2", {
  scrollTrigger: {
    trigger: "#pinned-section",
    start: "25% 40%",
    end: "50% 40%",
    scrub: true
  },
  opacity: 0,
  y: 50
});

gsap.from("#content-3", {
  scrollTrigger: {
    trigger: "#pinned-section",
    start: "55% 40%",
    end: "80% 40%",
    scrub: true
  },
  opacity: 0,
  y: 50
});
