'use strict';

function onInit() {
    init();
    renderGallery()
}

function onClickImg(imgId) {
    setMeme(imgId)
    renderMeme()
}

function renderGallery() {
    const imgs = getImgs()
    var strHTML = imgs.map(img => {
        return `<img class="img" onclick="onClickImg(${img.id})" src="imgs/meme-imgs/${img.id}.jpg">`
    })
    document.querySelector('.gallery-container').innerHTML = strHTML.join('');
}