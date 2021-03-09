
const screenWidht = screen.width || 1366
const multiplier = screenWidht / 120
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  direction: 'horizontal',
  lerp: 0.05,
  multiplier,
});

const animationScroll = (e) => {
  if (e.deltaY > 0) console.log('mayor');
  else if (e.deltaY < 0) console.log('menor');
}
