gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({defaults: {duration: 1}});

gsap.to('.animate-3', {scrollTrigger:'.animate-3', opacity: 1, duration: 1, delay: 0.5});

timeline
  .from('.lines', { y: '-150%', stagger: 0.1})
  .from('.header-back-image', { y: '-150%'} )
  .from('.animate-1', {opacity: 0},'<2')
  .from('.animate-2', {opacity: 0}, '<1')
