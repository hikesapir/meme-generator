'use strict';

function renderImgMeme() {
    const meme = getMeme();
    console.log(meme);
    const img = getImgById(meme.selectedImgId)
    drawImgFromlocal(img.url);
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

function onChangeTxt(elTxt) {
    setLineTxt(elTxt);
    renderImgMeme();
}

function onTxtColor(val) {
    setColor(val);
    renderImgMeme();
}

function onTxtStrokeColor(val){
    setStrokeColor(val);
    renderImgMeme();
}

function onSetFontSize(diff) {
    setFontSize(diff);
    renderImgMeme();
}

function onselectedfont(val){
    setFont(val);
    renderImgMeme();

}

function onAddLine() {
    createLine();
    renderImgMeme();
    renderTxtInput()
}

function onRemaveLine(){
    removeLine();
    renderImgMeme();
    renderTxtInput()
}

function onSwitchLine() {
    switchLine();
    renderTxtInput()
}

function onAddSticker(icon){
    createLine();
    setLineTxt(icon)
    renderImgMeme();
}

function onSaveMeme() {
    console.log('onSaveMeme workes now');
    const imgurl = getMemeImgUrl()
    // saveMeme(imgurl);
    uploadImg(imgurl);
}


function addCanvasResizeListener() {
    window.addEventListener('resize', () => {
        resizeCanvas(gCanvas)
        renderImgMeme()
    })
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

