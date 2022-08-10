new fullpage("#fullpage", {
  autoScrolling: true,
  keyboardScrolling: true,
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
    tl.from('.icon', {y:-200, stagger: 0.3, opacity:0, translate:"translateY(5px)"}, "-=1.5")
    tl.from(".earn-para", { x:100, opacity: 0, delay: 0.5, duraton: 1.5 }, "-=1");
    tl.from('.mission-img', {x:200, stagger: 0.2, opacity:0, translate:"translateY(100px)"}, "-=1")
    tl.from('.box, .brand-box, .pub-box', {x:200, stagger: 0.2, opacity:0, translate:"translateY(5px)"}, "-=0.5")
    tl.from('.brand-img', {x:-200, stagger: 0.2, opacity:0, translate:"translateY(50px)"}, "-=1.5")
    tl.from('.advertiser-card, adv', {x:200, stagger: 0.2, opacity:0, translate:"translateY(5px)"}, "-=0.5")
    
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