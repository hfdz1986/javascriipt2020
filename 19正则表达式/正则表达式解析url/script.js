//封装一个函数，功能类似于字符串中的trim方法

/*function t(str){

    //把前空格和后空格，替换成  "空"

    var reg = /^\s*|\s*$/g;

    var str1 = str.replace(reg,"");

    return str1;

}

console.log(  t("  A  B  C  ")    );*/


//封装一个函数，获取class名称的
/*function getClass(cName){

//1》把页面上所有的dom节点，全部选取
//2》循环所有节点，if判断，如果页面上节点的className==lis
//3》把节点添加到数组中
    var arr = [];
    var doms = document.getElementsByTagName("*");
    for(var i=0;i<doms.length;i++){
        if(doms[i].className == cName){
            arr.push(doms[i]);
        }
    }
    return arr;
}
alert(  getClass("lis").length );*/




function getClass(cName) {

    var arr = [];
    var doms = document.getElementsByTagName("*");
    var reg = new RegExp("\\b"+cName+"\\b");

   for(var i=0;i<doms.length;i++){

       if(reg.test(doms[i].className)){

           arr.push(doms[i]);

       }
    }
    return arr;

}
var li = getClass("lis");
for(var i=0;i<li.length;i++){

    li[i].style.background = "red";
}














