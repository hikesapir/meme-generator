'use strict';

var gCanvas = document.querySelector('#canvas');
var gCtx = gCanvas.getContext('2d');


function onChangeTxt(elTxt) {
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
        gCtx.font = `${memeLine.size}px ${memeLine.font}`;
        gCtx.fillStyle = memeLine.fillColor;
        gCtx.strokeStyle = memeLine.strokeColor;
        gCtx.lineWidth = 2;
        gCtx.strokeText(memeLine.txt, memeLine.x, memeLine.y);
        gCtx.fillText(memeLine.txt, memeLine.x, memeLine.y);
    })
}

function onTxtColor(val) {
    setColor(val);
    renderMeme();
}

function onTxtStrokeColor(val){
    setStrokeColor(val);
    renderMeme();
}

function onSetFontSize(diff) {
    setFontSize(diff);
    renderMeme();
}

function onselectedfont(val){
    setFont(val);
    renderMeme();

}

function onAddLine() {
    createLine();
    renderMeme();
    renderTxtInput()
}

function onRemaveLine(){
    removeLine();
    renderMeme();
    renderTxtInput()
}

function onSwitchLine() {
    switchLine();
    renderTxtInput()
}

function renderTxtInput(){
    document.querySelector('.text-input').value=getCurrLine().txt
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

function onAddSticker(icon){
    createLine();
    setLineTxt(icon)
    renderMeme();
}

function addListeners() {
    addMouseListeners()
    addTouchListeners()
}

function addMouseListeners() {
    gCanvas.addEventListener('mousemove', onMove);
    gCanvas.addEventListener('mousedown', onDown);
    gCanvas.addEventListener('mouseup', onUp);
}

function addTouchListeners() {
    gCanvas.addEventListener('touchmove', onMove)
    gCanvas.addEventListener('touchstart', onDown)
    gCanvas.addEventListener('touchend', onUp)
}

