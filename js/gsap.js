const h1Text = document.querySelector(".stagger-up-txt");
const targetText = h1Text.textContent;

const splittedText = targetText.split(" ");

var clutter = "";

splittedText.forEach(function(elem){
  clutter += `<span>${elem}</span> `;
})

h1Text.innerHTML = clutter;

gsap.from(".stagger-up-txt span", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power4.out",
  stagger: 0.15 // Adds a 0.15-second delay between each word's animation
});

gsap.from(".up-stagger", {
  opacity: 0,
  y: 40,
  duration: 1,
  ease: "power4.out",
  stagger: 0.15
});

gsap.from(".up-stagger-onscroll", {
  opacity: 0,
  y: 40,
  duration: 0.7,
  ease: "power4.out",
  stagger: 0.15,
  scrollTrigger: {
    trigger: ".how-we-do",
    start: "top 90%"
  }
});

gsap.from(".right-stagger", {
  opacity: 0,
  y: 20,
  duration: 1,
  ease: "power4.out",
  stagger: 0.15, // Adds a 0.15-second delay between each word's animation
  scrollTrigger: {
    trigger: ".section-title-txt",
    start: "top 90%", // Starts animation when the top of .title-txt is 80% down the viewport
    marker: true
  }
});


gsap.from(".section-title-txt", {
  opacity: 0,
  y: 20,
  duration: 1,
  ease: "power4.out",
  stagger: 0.15, // Adds a 0.15-second delay between each word's animation
  scrollTrigger: {
    trigger: ".section-title-txt",
    start: "top 90%", // Starts animation when the top of .title-txt is 80% down the viewport
    marker: true
  }
});

gsap.from(".box-element", {
  opacity: 0,
  x: 80,
  duration: 1,
  ease: "power4.out",
  stagger: 0.15, // Adds a 0.15-second delay between each word's animation
  scrollTrigger: {
    trigger: ".section-title-txt",
    start: "top 70%", // Starts animation when the top of .title-txt is 80% down the viewport
    marker: true
  }
});

gsap.from(".box-num",{
  opacity: 0,
  rotate: -360,
  duration: 0.8,
  x: 10,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".wws",
    start: "top 70%"
  }
})