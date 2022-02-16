'use strict';

function onInit(){
    init();
    console.log('heyyyy<3');
    renderGallery()
}

function renderGallery(){
    const imgs = getImgs()
    var strHTML =imgs.map(img=>{
        return`<img class="img" onclick="onSetEditor('${img.url}')" src="imgs/meme-imgs/${img.id}.jpg">`
    })
    document.querySelector('.gallery-container').innerHTML=strHTML.join('');
}

function onSetEditor(urlImg){
    renderEditor(urlImg);
}