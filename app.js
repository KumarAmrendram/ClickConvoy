new fullpage("#fullpage", {
  autoScrolling: true,
  navigaton: true,
  keyboardScrolling: true,
  fixedElements: '.navigation',
  loopTop: true,
  loopBottom: true,
	fixedElements: '.navigation, .social',

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
    tl.from("h4", { stagger: 0.2, x: 100, opacity: 0, duraton: 1.5 }, "-=1");
    tl.from('.partner-li', {y:-200, stagger: 0.2, opacity:0, translate:"translateY(100px)"}, "-=1")
    tl.from('.join-li', {y:-200, stagger: 0.2, opacity:0, translate:"translateY(100px)"}, "-=1.5")
    tl.from(".earn-para", { x: 100, opacity: 0, delay: 0.5, duraton: 1.5 }, "-=1.5");
    tl.from('.brand-img-top', {y:-200, stagger: 0.2, opacity:0, translate:"translateY(100px)"}, "-=1.5")
    tl.from('.brand-img-bottom', {y:200, stagger: 0.2, opacity:0, translate:"translateY(100px)"}, "-=1.5")
    tl.from(".client-h1", { x: -100, opacity: 0, delay: 0.5, duraton: 1.5 });
    tl.from('.logos', {x:-200, stagger: 0.2, opacity:0, translate:"translateY(100px)"}, "-=1")
    tl.from('.box', {y:-200, stagger: 0.2, opacity:0, translate:"translateY(5px)"}, "-=1.5")
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
    tl.to("h1, button", { x: -100, opacity: 1, delay: 0.2, duraton: 0.5 });
    tl.to('.partner-li', {y:-200, stagger: 0.2, delay: 0.1, opacity:0}, "-=0.5")
    tl.to('.brand-img-bottom', {y:200, opacity:0, translate:"translateY(100px)"}, "-=1.5")
    tl.to('.brand-img-top', {y:-200, opacity:0, translate:"translateY(100px)"}, "-=1.5")
    tl.to('.logos', {x:0,delay: 0, opacity:1}, "-=0.1")

  },
}); 