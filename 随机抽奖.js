var arr=['米线','面条','盖饭','饼'];
var btn=document.getElementById("btn");
var stop=document.getElementById("stop");

    box=document.getElementById("box");
    index=0;
    time=null;

btn.onclick=function () {

  time=  setInterval(function () {
        if(index>arr.length-1){
            index=0;

        }
        box.innerHTML=arr[index];
        index++;
        console.log(index);
    },100);
}

stop.onclick=function () {
    clearInterval(time);
}