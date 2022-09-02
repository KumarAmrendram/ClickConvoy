new fullpage("#fullpage", {
  autoScrolling: true,
  keyboardScrolling: true,
  loopBottom: true,
	fixedElements: '.navigation, .social',
  lazyLoading: true,

  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector("h1");


    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "section",
        toggleActions: "restart none none none",
      },
    });
    tl.from("h1, button", { x: -100, opacity: 0, delay: 0.5, duraton: 1.5 });
    tl.from('.icon, .banner-text', {x:200, opacity:0, delay: 0.5}, "-=1.5")
    tl.from('.mission-img', {x:200, stagger: 0.2, opacity:0}, "-=1.5")
    tl.from('.brand-box', {x:200, stagger: 0.2, opacity:0}, "-=1.5")
    tl.from('.brand-img', {x:-200, stagger: 0.2, opacity:0, translate:"translateY(50px)"}, "-=1.5")
    tl.from('.adv-img', {y:-200, stagger: 0.2, opacity:0}, "-=1.5")
    tl.from('.pub-box, .join-li', {y:200, stagger: 0.2, opacity:0}, "-=1.5")
    tl.from('.pub-img', {x:-200, stagger: 0.2, opacity:0}, "-=1.5") 
    tl.from(".mission-para",{opacity: 0, delay: 0.5, duraton: 1.5 }, "-=1.5");
  },
  BeforeLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector("h1");


    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "section",
        toggleActions: "restart none none none",
      },
    });
    tl.to(".section", { x: -1000, opacity: 0, delay: 0, duraton: 0.5 });
  },
}); 