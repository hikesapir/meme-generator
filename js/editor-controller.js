'use strict';

var gCanvas = document.querySelector('#canvas');
var gCtx = gCanvas.getContext('2d');


function onAddTxt(elTxt){ 
    setLineTxt(elTxt);
    renderMeme();
}

function drawImgFromlocal(urlImg) {
    console.log();
    var img = new Image()
    img.src = urlImg;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xend,yend
        renderTxtImg();
    }
}

function renderMeme(){
    const meme =getMeme();
    const img = getImg(meme.selectedImgId)
    drawImgFromlocal(img.url);
}

function renderTxtImg(){
    const meme =getMeme();
    var txt = meme.lines[0].txt
    gCtx.fillText(txt, 10, 50);
}
