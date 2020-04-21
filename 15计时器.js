var hours=document.getElementById("hours")
var minutes=document.getElementById("minutes");
var seconds=document.getElementById("seconds");



function fn() {
   var date=new Date();
hours.innerHTML=time(date.getHours())+"时";
minutes.innerHTML=time(date.getMinutes())+"分";
seconds.innerHTML=time(date.getSeconds())+"秒";
}

setInterval(function () {
    fn();
},1000)

//如果事件是1，2，3。。。应该变为01/02/03
function time(str) {
    if (str < 10) {

        return "0" + str;
    } else {
        return str;

    }
}

//因为一刷新页面，出现的是00；00；00，这是定时器的原因
// 直接调用fn();
fn();