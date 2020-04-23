//全选class  : check-all check
//单选class  : check-one check


var check = getClass("check");
var cartTable = document.getElementById("cartTable");
var tr = cartTable.tBodies[0].rows;
var selectedTotal = document.getElementById("selectedTotal");
var priceTotal = document.getElementById("priceTotal");
for(var i=0;i<check.length;i++){

    check[i].onclick = function(){

        if(this.className=="check-all check"){

            for(var i=0;i<check.length;i++){
                check[i].checked = this.checked;
            }

        }

        getTotal();

    }
}


function getTotal(){
    //结算函数功能
    var select = 0;
    var price =0;
    for(var i=0;i<tr.length;i++){
        //如果是复选框选中的状态，才能把值放入进去
        if(tr[i].getElementsByTagName("input")[0].checked){

           select+= parseInt(tr[i].getElementsByTagName("input")[1].value);
            price+=parseFloat(tr[i].cells[4].innerHTML);

        }
    }

    selectedTotal.innerHTML = select;
    priceTotal.innerHTML = price.toFixed(2);

}
//函数==》实现获取class名称的
function getClass(check){

    var arr = [];
    var doms = document.getElementsByTagName("*");
    for(var i=0;i<doms.length;i++){
        if(doms[i].className==check || doms[i].className.indexOf(" "+check)!=-1 || doms[i].className.indexOf(check+" ")!=-1){
            arr.push(doms[i]);
        }
    }
    return arr;
}


