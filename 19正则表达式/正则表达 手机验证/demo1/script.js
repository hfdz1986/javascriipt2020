var userTel = document.getElementById("userTel");
//验证手机号的
//手机号是11位数
//手机号都是1开头的
//手机号的第二位。 3  4  5  6  7  8

userTel.onblur = function(){

    var regTel = /^1[3-8]\d{9}$/;
    if(  regTel.test(this.value)   ){
        this.nextElementSibling.innerHTML = "手机号正确";
    }else{
        this.nextElementSibling.innerHTML = "手机号输入有误";
    }

}



//验证用户名的
//可以有： 数字   字母   下划线
//位数必须是： 6-12

var userName = document.getElementById("userName");
userName.onblur = function(){

    var regName = /^\w{6,12}$/;

    if( regName.test(this.value) ){
        this.nextElementSibling.innerHTML = "用户名正确";
    }else{
        this.nextElementSibling.innerHTML  = "用户名输入有误";
    }

}



//验证邮箱的
//zhang_san@163.com
//zhangsan123@qq.cn
//zhan1ab@126.cc


//   zhangsan_123abC    @   163.com
var userEmail = document.getElementById("userEmail");
userEmail.onblur = function(){

    var regEmail = /^\w+@\w{1,6}\.[0-9a-zA-Z]{2,5}$/;

    if( regEmail.test(this.value)  ){
        this.nextElementSibling.innerHTML = "邮箱正确";
    }else{
        this.nextElementSibling.innerHTML = "邮箱输入有误";
    }

}


//验证身份证的
var userS = document.getElementById("userS");
userS.onblur = function(){

    var regS = /^\d{17}[\dX]$/;

    if(  regS.test(this.value)  ){
        this.nextElementSibling.innerHTML = "证件正确";
    }else{
        this.nextElementSibling.innerHTML = "证件输入有误";
    }


}


