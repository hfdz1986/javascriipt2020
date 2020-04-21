var btn=document.getElementById("btn");  //获得btn按钮
    uls=document.getElementById("uls");         //获得ul元素的节点
    txt=document.getElementById("txt");             //获得文本的内容

btn.onclick=function () {
    var lis=document.getElementsByTagName("li");  //获得 全部li 的元素
    var oLi=document.createElement("li");              //1>新增li元素

//     uls.appendChild(oLi);
    uls.insertBefore(oLi,lis[0])       //2>放入到ul元素的节点中



    /*var t=documnet.createTextNode(txt.value);
    oLi.appendChild(t);
     */

    oLi.innerHTML=txt.value+"<a href='javascript:'>删除</a>";     //3>把新增元素的text的value放入到li节点

    //4点击a链接 删除
    var oA=document.getElementsByTagName('a');
    for(var i=0;i<oA.length;i++){
        oA[i].onclick=function () {
           uls.removeChild(this.parentNode);  //删除父节点的内容
        }
    }
}