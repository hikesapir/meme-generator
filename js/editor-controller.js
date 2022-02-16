'use strict';

var gCanvas = document.querySelector('#canvas');
var gCtx = gCanvas.getContext('2d');



function renderEditor(urlImg) {
    console.log(urlImg);
    drawImgFromlocal(urlImg)
}

function drawImgFromlocal(urlImg) {
    var img = new Image()
    img.src = urlImg;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xend,yend
    }
}