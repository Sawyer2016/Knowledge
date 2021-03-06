function keydown(e) {
  const keys = [32, 33, 34, 35, 36, 37, 38, 39, 40];
  keys.forEach((key) => {
    if (key === e.keyCode) {
      stopEvent(e);
    }
  });
}
function stopEvent(e) {
    let event = e || window.event;
    if (event.preventDefault) {
        event.preventDefault();
    }
    event.returnValue = false;
}
const disableScroll = () => {
  if (window.addEventListener) {
    window.addEventListener('DOMMouseScroll', stopEvent, false); // FF
  }
  window.onmousewheel = stopEvent;
  window.addEventListener('touchmove', stopEvent, { passive: false }); // deal with preventDefault in mobile touchmove event
  window.onkeydown = keydown;
  document.body.setAttribute('style', 'overflow-y:hidden'); //禁止底层body滚动
};
const enableScroll = () => {
  window.removeEventListener('DOMMouseScroll', stopEvent, false);
  window.onmousewheel = null;
  window.ontouchmove = null;
  window.onkeydown = null;
  document.body.setAttribute('style', 'overflow-y:');
};

//2
//JSON.parse(JSON.stringify(obj));