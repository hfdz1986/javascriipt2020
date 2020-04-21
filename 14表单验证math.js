// 表单验证

var spans=document.getElementById("spans");
     btn=document.getElementById("btn");
     userName=document.getElementById("userName");
     userPwd=document.getElementById("userPwd");
     yzm=document.getElementById('yzm');
var str="abcdfjadklfjalkjglkjo235n你我的减肥了就";
var str1="";
for (var i=0;i<4;i++){
    str1+=str[Math.floor(Math.random()*str.length)]
}


spans.innerHTML= str1;
btn.onclick=function () {

    if(userName.value=="admin"){
        if(userPwd.value=="admin"){
            if(yzm.value ==spans.innerHTML){
                location.href="a.html";
            }else{
               alert("验证码不对");
        }}
        else  { alert("用户名不对");
    }}
    else{
        alert("用户名不对");

    }
}