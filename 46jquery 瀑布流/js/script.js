window.onload = function(){


	waterfall();

	var obj = {
		
		arr:[
			'images/0.jpg',
			'images/1.jpg',
			'images/2.jpg',
			'images/3.jpg',
			'images/4.jpg'
		]

	}

	$(window).scroll(function(){
		
		if(ScrollTop()){

			$.each( obj.arr,function(idx,val){

				var item = $("<div class='item'></div>");
				var pic =  $("<div class='pic'></div>");
				var img = $("<img src='"+obj.arr[idx]+"'>");

				$(".main").append(item);
				item.append(pic);
				pic.append(img);

			})

			waterfall();
		}

	})

}

function ScrollTop(){

	var last = $(".item").last();
	var height = last.outerHeight()/2;
	var offsetTop = last.offset().top;
	var winH = $(window).height();
	var sTop = $(document).scrollTop();


	if((height+offsetTop) < (winH+sTop)){
		return true;
	}else{
		return false;
	}


}

function waterfall(){

	var width = $(window).width();
	//可视区域的宽度

	var oBox = $(".item");
	//获取到所有的item盒子 

	var boxWidth = oBox.first().outerWidth();
	//获取其中一个图片（盒子）宽度
	
	var num = Math.floor(width/boxWidth);
	//一行能放入的个数
	
	$(".main").width(num*boxWidth);
	//设置main盒子宽度

	var hrr = [];
	//放图片的高度值的

	for(var i=0;i<oBox.length;i++){

		if(i<num){

			hrr.push(oBox.eq(i).outerHeight());

		}else{
			
			var min = Math.min.apply(null,hrr);
			//在数组中，求出最小值
			var idx = $.inArray(min,hrr);
			//min最小值在hrr数组中的位置
			oBox.eq(i).css({
				"position":"absolute",
				"left":idx*boxWidth,
				"top":min
			})

			hrr[idx]+=oBox.eq(i).outerHeight();

		}
	}
	//第一排图片不用动
	//动第二排，三，四。。。。 定位
}