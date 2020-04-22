//写一个定时器，每隔50毫秒，实现box盒子宽度增加10px

setInterval(function () {

    // box.style.width=box.offsetWidth-1+"px";
    box.style.width=parseInt(getAttr(box,"width"))+1+"px";
},50)

function getAttr(dom,value) {

    if (dom.currentStyle) {
        return dom.currentStyle[value];
    }else{
        return getComputedStyle(dom,null)[value];

    }

}