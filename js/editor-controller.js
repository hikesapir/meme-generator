'use strict';

function renderImgMeme() {
    const meme = getMeme();
    const img = getImgById(meme.selectedImgId);
    drawImgFromlocal(img.url);
}

function drawImgFromlocal(urlImg) {
    var img = new Image();
    img.src = urlImg;
    img.onload = () => {
        resizeCanvas(img.width, img.height);
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xend,yend
        renderTxtImg();
        drawMarkerLine();
    }
}

function resizeCanvas(imgWidth, imgHeight) {
    if (window.innerWidth < 580) {
        const size = keepImgProportion(200, 200, imgWidth, imgHeight);
        gCanvas.height = size.height;
        gCanvas.width = size.width;

    } else if (window.innerWidth < 830) {
        const size = keepImgProportion(300, 300, imgWidth, imgHeight);
        gCanvas.height = size.height;
        gCanvas.width = size.width;
    } else {
        const size = keepImgProportion(400, 400, imgWidth, imgHeight);
        gCanvas.height = size.height;
        gCanvas.width = size.width;
    }
}

function keepImgProportion(maxWidth, maxHeight, imgWidth, imgHeight) {
    const size = {}
    if (imgWidth < maxWidth && imgHeight < maxHeight) {
        size.height = imgHeight;
        size.width = imgWidth;
        return size
    }
    const width = (maxHeight * imgWidth) / imgHeight;
    if (width < maxWidth) {
        size.width = width;
        size.height = maxHeight;
    } else {
        const height = (maxWidth * imgHeight) / imgWidth;
        size.width = maxWidth;
        size.height = height;
    }
    return size
}

function renderTxtImg() {
    const meme = getMeme();
    const memeLines = meme.lines;
    memeLines.forEach(memeLine => {
        gCtx.font = `${memeLine.size}px ${memeLine.font}`;
        gCtx.fillStyle = memeLine.fillColor;
        gCtx.strokeStyle = memeLine.strokeColor;
        gCtx.lineWidth = 2;
        gCtx.textAlign = memeLine.align;
        gCtx.strokeText(memeLine.txt, memeLine.x, memeLine.y);
        gCtx.fillText(memeLine.txt, memeLine.x, memeLine.y);
    })
}

function onChangeTextAlign(val) {
    setTextAlignLine(val);
    renderImgMeme();
}

function renderTxtInput() {
    document.querySelector('.text-input').value = getCurrLine().txt;
}

function drawMarkerLine() {
    if (!getMarker()) return;
    var lineSize = getMarker();
    gCtx.beginPath();
    gCtx.lineWidth = '2';
    gCtx.strokeStyle = '#ff8000';
    gCtx.rect(lineSize.x, lineSize.y, lineSize.width, lineSize.height);
    gCtx.closePath();
    gCtx.stroke();
}

function onChangeTxt(elTxt) {
    setLineTxt(elTxt);
    renderImgMeme();
}

function onTxtColor(val) {
    setColor(val);
    renderImgMeme();
}

function onTxtStrokeColor(val) {
    setStrokeColor(val);
    renderImgMeme();
}

function onSetFontSize(diff) {
    setFontSize(diff);
    renderImgMeme();
}

function onselectedfont(val) {
    setFont(val);
    renderImgMeme();

}

function onAddLine() {
    createLine();
    if (gMeme.selectedLineIdx < 0 || gMeme.lines.length < 0) switchLine(0);
    renderImgMeme();
    renderTxtInput();
}

function onRemaveLine() {
    removeLine();
    renderImgMeme();
    // renderTxtInput();
}

function onSwitchLine() {
    switchLine();
    renderTxtInput();
    renderImgMeme();
}

function onAddSticker(icon) {
    createLine();
    setLineTxt(icon);
    renderTxtInput();
    renderImgMeme();
}

function onSaveMeme() {
    const imgurl = getMemeImgUrl()
    uploadImg(imgurl);
    flashMsg('Meme saved');
}

function downloadImg(elLink) {
    var imgContent = gCanvas.toDataURL('image/jpeg');
    elLink.download = 'My-Meme';
    elLink.href = imgContent;
}

