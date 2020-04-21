

// // 冒泡排序
var arr =[3,5,2,4,9,66,88]

for(var i=0;i<arr.length-1;i++){
    for(var j=0;j<arr.length-i-1;j++){ //-i是让每一次比较元素减少，-1是防止越界
        if(arr[j]<arr[j+1]){     //冒泡  改成<就是升序
            var temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
}

alert(arr);

/*相邻两个元素进行比较，如果符合条件进行换位，最值在最后角标位置*/
// function bubbleSort(arr){
//     for(var i=0;i<arr.length-1;i++){
//         for(var j=0;j<arr.length-i-1;j++){ //-i是让每一次比较元素减少，-1是防止越界
//             if(arr[j]>arr[j+1]){
//                 var temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubbleSort([3,11,7,4,8,5]));