'use strict';
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']


function onDown(ev) {
    ev.preventDefault()
    const pos = getEvPos(ev)
    const idx = getIdxLineBypos(pos)
    switchLine(idx)
    renderImgMeme();
    if (idx < 0) return
    addKeydownListeners()
    console.log();
    setLineDrag(true)
    document.querySelector('.canvas-container').style.cursor = 'grabbing'
    renderTxtInput()
}

function onMove(ev) {
    const line = getCurrLine()
    if (!line) return
    if (line.isDrag) {
        const pos = getEvPos(ev)
        const dx = pos.x - line.x
        const dy = pos.y - line.y
        moveLine(dx, dy, line)
        renderImgMeme()
    }
}

function onUp() {
    setLineDrag(false)
    document.querySelector('.canvas-container').style.cursor = 'grab'
}

function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    if (gTouchEvs.includes(ev.type)) {
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
        }
    }
    return pos
}

function getIdxLineBypos(clickedPos) {
    const memeLines = getMemeLines();
    return memeLines.findIndex(memeLine => {
        var xStart = memeLine.x;
        var xEnd = gCtx.measureText(memeLine.txt).width + memeLine.x;
        var yStart = memeLine.y;
        var yEnd = memeLine.y - memeLine.size;
        return (clickedPos.x <= xEnd && clickedPos.x >= xStart && clickedPos.y <= yStart && clickedPos.y >= yEnd)
    })
}

function setLineDrag(isDrag) {
    const memeLine = getCurrLine()
    memeLine.isDrag = isDrag
}

function moveLine(dx, dy, line) {
    line.x += dx
    line.y += dy
}

function addResizeListener() {
    window.addEventListener('resize', () => {
        resizeCanvas(gCanvas)
        renderImgMeme()
    })
}

function addListeners() {
    addMouseListeners()
    addTouchListeners()
    addResizeListener()
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

function addKeydownListeners() {
    document.addEventListener('keydown', onKeydown, false)
}

function onKeydown(ev) {
    ev.preventDefault()
    const lineText = getCurrLine().txt;

    if (ev.keyCode === 8) {
        var txt = lineText.slice(0, -1)
        onChangeTxt(txt);
        renderTxtInput();
    } else if ((ev.keyCode >= 48 && ev.keyCode <= 90)
       || (ev.keyCode >= 96 && ev.keyCode <= 111)
       || (ev.keyCode >= 187 && ev.keyCode <= 222)) {
        var txt = lineText + ev.key
        onChangeTxt(txt);
        renderTxtInput();
    }

}