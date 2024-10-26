// GSAP Animations for Elements
document.querySelectorAll("[data-gsap]").forEach(el => {
    gsap.fromTo(el, { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 1.2,
        scrollTrigger: { trigger: el, start: "top 90%", end: "bottom 60%", scrub: true }
    });
});

