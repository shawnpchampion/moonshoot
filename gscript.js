const glitchFilter = document.querySelector('#filter');
const displacements = [{
  selector: 'r2',
  duration: 200,
  index: 0,
  values: [0, -5, 0, -18, -2, -4, 0, -3, 0]
}, {
  selector: 'g2', 
  duration: 150,
  index: 0,
  values: [0, 0, 0, -3, 0, 8, 0, -1, 0]
}, {
  selector: 'b2',
  duration: 350,
  index: 0,
  values: [0, 3, -1, 4, 0, 2, 0, 18, 0]
}];

const images = document.querySelectorAll('img');
let glitchedImg;


            

		
// document.querySelector('button').addEventListener('click', () => {
window.addEventListener("load", () => {   
  const promises = [];
  setTimeout(() => {
    switchGlitchedImage();
    Promise.all(displacements.map(glitch)).then(intervals => {
      finishGlitch(intervals);
      switchGlitchedImage();
      return Promise.all(displacements.map(glitch));  
    }).then(intervals => {
      finishGlitch(intervals);
    });
  }, 300);
});

setInterval(() => { 
const promises = [];
  setTimeout(() => {
    switchGlitchedImage();
    Promise.all(displacements.map(glitch)).then(intervals => {
      finishGlitch(intervals);
      switchGlitchedImage();
      return Promise.all(displacements.map(glitch));  
    }).then(intervals => {
      finishGlitch(intervals);
    });
  }, 300);
        }, 6000);

function glitch({ values, index, duration, selector }) {
  const feOffset = document.querySelector(`[result=${selector}]`);
  return new Promise(resolve => {
    const id = setInterval(() => {
      index = index + 1 >= values.length ? 0 : index + 1;
      feOffset.setAttribute('dx', values[index]);

      if (index - 1 < 0) {
        resolve(id);
      }
    }, duration / values.length);
  });
}

function finishGlitch(intervals) {
  intervals.forEach(interval => clearInterval(interval));
  glitchedImg.classList.remove('glitch');
}

function switchGlitchedImage() {
  if (glitchedImg) {
    glitchedImg.classList.add('hide');
    glitchedImg.classList.remove('glitch');
  }
  glitchedImg = Array.from(images).find(img => img !== glitchedImg);
  glitchedImg.classList.remove('hide');
  glitchedImg.classList.add('glitch');
}