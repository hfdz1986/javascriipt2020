// >1鼠标移入到（container）显示出来left和right 图标

var container=document.getElementById("container");
    left=document.getElementById("left");
    right=document.getElementById("right");
    uls=document.getElementById("uls");
    lis=uls.getElementsByTagName("li");
    ols=document.getElementById("ols");
    olis=ols.getElementsByTagName("li");

    index=0;


    container.onmouseover=function () {
        left.style.display="block";
        right.style.display="block";
    }

    container.onmouseout=function () {
        left.style.display="none";
        right.style.display="none";
    }

    // 2>点击right切换图片
    right.onclick=function () {

        //3>先把所有的li图片先隐藏起来
        for (var i = 0; i < lis.length; i++) {

            lis[i].style.display = "none";
            olis[i].className="";
        }
        index++;
        if(index>lis.length-1){
            index=0;
        }
        lis[index].style.display="block";
        olis[index].className="bg";
    }

// 2>点击leftt切换图片
left.onclick=function () {

    //3>先把所有的li图片先隐藏起来
    for (var i = 0; i < lis.length; i++) {

        lis[i].style.display = "none";
        olis[i].className="";
    }
    index--;
    if(index<0){
        index=lis.length-1;
    }
    lis[index].style.display="block";
    olis[index].className="bg";
}

