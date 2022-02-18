'use strict';

function renderImgMeme() {
    const meme = getMeme();
    const img = getImgById(meme.selectedImgId)
    drawImgFromlocal(img.url);
}

function drawImgFromlocal(urlImg) {
    console.log();
    var img = new Image()
    img.src = urlImg;
    img.onload = () => {
        console.log('imgWidth',img.width);
        resizeCanvas(img.width, img.height)
        // gCanvas.width= img.width
        // gCanvas.height= img.height
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

function renderTxtInput() {
    document.querySelector('.text-input').value = getCurrLine().txt
}

function resizeCanvas(imgWidth, imgHeight) {
    console.log('imgWidth',imgWidth);

    if (window.innerWidth < 380) {
        console.log('small');
        console.log(imgWidth);
        const size = keepImgProportion(200, 200, imgWidth, imgHeight);
        gCanvas.height = size.height;
        gCanvas.width = size.width;
        
    } else if (window.innerWidth < 830) {
        console.log('medium');
        const size = keepImgProportion(300, 300, imgWidth, imgHeight)
        gCanvas.height = size.height;
        gCanvas.width = size.width;
        // gCanvas.height = imgWidth * 0.675
        // gCanvas.width = imgHeight * 0.675
    } else {
        console.log('big');
        const size = keepImgProportion(500, 500, imgWidth, imgHeight)
        gCanvas.height = size.height;
        gCanvas.width = size.width;
        // const width = (400 * imgWidth) / imgHeight
        // gCanvas.height = 400;
        // if (width > 500) {
        //     gCanvas.width = 500;
        //     const height = (500 * imgHeight) / imgWidth
        //     gCanvas.height = height;
        // } else {
        //     gCanvas.width = width;
        // }
    }
}

function keepImgProportion(maxWidth, maxHeight, imgWidth, imgHeight) {
    const size = {}
    console.log('imgWidth',imgWidth);
    if (imgWidth < maxWidth && imgHeight < maxHeight) {
        size.height = imgHeight;
        size.width = imgWidth;
        console.log(size);
        return size
    }
    const width = (maxHeight * imgWidth) / imgHeight
    if (width < maxWidth) {
        size.width = width;
        size.height = maxHeight;
    } else {
        const height = (maxWidth * imgHeight) / imgWidth
        size.width = maxWidth;
        size.height = height;
    }
    console.log(size);
    return size
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
    renderImgMeme();
    renderTxtInput()
}

function onRemaveLine() {
    removeLine();
    renderImgMeme();
    renderTxtInput()
}

function onSwitchLine() {
    switchLine();
    renderTxtInput()
}

function onAddSticker(icon) {
    createLine();
    setLineTxt(icon)
    renderImgMeme();
}

function onSaveMeme() {
    const imgurl = getMemeImgUrl()
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

