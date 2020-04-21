// 字符串首字母大写

var str="my-name-is-leo";

function fn(s) {
// getelement by id 这4快内容先得到

    var arr=s.split("-");
    var str1="";

    for (var i=0;i<arr.length;i++){
        str1+=arr[i][0].toUpperCase()+arr[i].substring(1);

    }

   return str1;

}

document.write(fn(str));