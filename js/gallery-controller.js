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
    displayEditorPage()
}

function renderSavedGallery() {
    const imgs = getSavedMemes();
    console.log(imgs);
    var strHTML = '';
    if (!imgs.length) {
        strHTML = 'No saved meme'
    }else{
        strHTML = imgs.map(img => {
            return `<img class="img" src="${img}">`
        })
        strHTML = strHTML.join('');
    }
    document.querySelector('.gallery-container').innerHTML = strHTML;
}