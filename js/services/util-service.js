'use strict';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function flashMsg(msg) {
  const el = document.querySelector('.user-msg');
  el.innerText = msg;
  el.classList.add('open');
  setTimeout(() => {
    el.classList.remove('open')
  }, 3000);
}