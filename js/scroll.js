

 const widthScre = screen.width / 120
 const scroll = new LocomotiveScroll({
   el: document.querySelector('[data-scroll-container]'),
   smooth: true,
   direction: 'horizontal',
   multiplier: widthScre
 });

const animationScroll = (e) => {
  if (e.deltaY > 0) console.log('mayor');
  else if (e.deltaY < 0) console.log('menor');
}
