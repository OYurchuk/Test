
let img = document.getElementById('img');  //например у нас есть html разметка и картинка с aйдишником img

img.onmousedown = (e) => { // 1. отследить нажатие

    // подготовить к перемещению
    // 2. разместить на том же месте, но в абсолютных координатах
    img.style.position = 'absolute';
    moveAt(e);
    // переместим в body, чтобы картинка была точно не внутри position:relative
    document.body.appendChild(img);

    img.style.zIndex = 1000; // показывать img над другими элементами

    // передвинуть img под координаты курсора
    // при нажатом движении мыши
    function  moveAt (e){
        img.style.left = e.pageX - img.offsetWidth  + 'px';
        img.style.top = e.pageY - img.offsetHeight + 'px';
    }

    // 3, перемещать по экрану
    document.onmousemove = (e) => {
        moveAt(e);
    };

    // 4. отследить окончание переноса
    img.onmouseup = () => {
        document.onmousemove = null;
        img.onmouseup = null;
    }
};
