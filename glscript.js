const lis = Array.prototype.slice.call(document.querySelectorAll('li'));
const length = lis.length;
const time = 2500;

let curIndex = length - 1;
let lastIndex = length - 1;

function setIndexGlitch(index) {
  setTimeout(() => {
    lis[index].setAttribute('class', 'zindex fadeIn');
    lastIndex = index;
    curIndex = index === length - 1 ? 0 : ++index;
  }, time);
}

window.addEventListener('animationend', e => {
  lis[curIndex].setAttribute('class', 'zindex');
  lis[lastIndex].setAttribute('class', '');
  setIndexGlitch(lastIndex);
});

setIndexGlitch(curIndex);