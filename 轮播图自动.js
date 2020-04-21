// 轮播图 ，自动播放

var lis=document.getElementsByTagName("li");
var index=0;

var box=document.getElementById("box");
var time=setInterval(function () {

for(var i=0;i<lis.length;i++){

    lis[i].style.display="none";

}
    index++;
if(index>lis.length-1) {
    index = 0;
}
    lis[index].style.display = "block";


},1000);

box.onclick=function () {
    clearInterval(time)

}