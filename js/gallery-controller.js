'use strict';



function renderGallery() {
    const imgs = getImgs()
    var strHTML = imgs.map(img => {
        return `<img class="img" onclick="onImgSelect(${img.id})" src="imgs/meme-imgs/${img.id}.jpg">`
    })
    document.querySelector('.gallery-container').innerHTML = strHTML.join('');
}

function onImgSelect(imgId) {
    setMeme(imgId)
    renderMeme()
    toggelHomepage()
}

function toggelHomepage(){
    document.querySelector('.homepage').classList.toggle('hidden')
    document.querySelector('.meme-editor').classList.toggle('hidden')
}