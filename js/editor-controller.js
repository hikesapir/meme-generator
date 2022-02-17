'use strict';

var gCanvas = document.querySelector('#canvas');
var gCtx = gCanvas.getContext('2d');


function onAddTxt(elTxt) {
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

function renderMeme() {
    const meme = getMeme();
    const img = getImgById(meme.selectedImgId)
    drawImgFromlocal(img.url);
}

function renderTxtImg() {
    const meme = getMeme();
    const memeLines = meme.lines;
    memeLines.forEach(memeLine => {
        gCtx.font = `${memeLine.size}px Georgia`
        gCtx.fillStyle = memeLine.color
        gCtx.fillText(memeLine.txt, memeLine.x, memeLine.y);
    })
}

function onTxtColor(val) {
    setColor(val);
    renderMeme();
}

function onSetFontSize(diff) {
    setFontSize(diff);
    renderMeme();
}

function onAddLine() {
    createLine();
    renderMeme();
}
function onSwitchLine() {
    switchLine();
}

function resizeCanvas() {

    if (window.innerWidth < 290) {
        gCanvas.height = 200
        gCanvas.width = 200
    } else if (window.innerWidth < 830) {
        gCanvas.height = 270
        gCanvas.width = 270
    } else {
        gCanvas.height = 400;
        gCanvas.width = 400;
    }
}

function addCanvasResizeListener() {
    window.addEventListener('resize', () => {
        resizeCanvas(gCanvas)
        renderMeme()
    })
}

function onSaveMeme() {
    console.log('onSaveMeme workes now');
    const data = gCanvas.toDataURL('image/jpeg/png');
    saveMeme(data);
}