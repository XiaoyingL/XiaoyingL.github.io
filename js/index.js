//轮播图
$(function() {
    //大屏幕用大图 小屏幕用小图
    //小图用用图片标签的方式显示 大图用背景图的方式显示
    //小于768px认为是小屏  大于768认为是大屏
    //获取屏幕宽度 然后判断
    $(window).on("resize", function() {
        var winWidth = $(window).width();
        var itemImage = $(".carousel-inner .item");
        if (winWidth > 768) {
            itemImage.each(function(index, el) {
                var $item = $(el);
                var imgSrc = $item.data("large-image");
                $item.css("background-image", "url(" + imgSrc + ")");
                $item.html("");
            });
        } else if (winWidth <= 768) {
            itemImage.each(function(index, el) {
                var $item = $(el);
                var imgSrc = $item.data("small-image");
                // console.log(imgSrc);
                $item.html("<img src=" + imgSrc + ">");
                $item.css("background-image", "");
            });
        }
    }).trigger("resize");
    //1.添加滑动事件
    //2.判断滑动的方向如果是从左往右就切换到上一张 .carousel('prev')
    //3.从右往左切换到下一张 .carousel('next')
    //获取轮播图外面的容器
    var slide=document.querySelector("#slide");
    var startX = 0;
    var endX = 0;
    var carousel = $('#slide .carousel');
    slide.addEventListener("touchstart", function(e) {
    	startX = e.touches[0].clientX;
    });
    slide.addEventListener("touchend", function(e) {
    	endX = e.changedTouches[0].clientX;
    	if(endX - startX > 0) {
    		//往右滑
    		//调用Bootstrap提供的切换上一张图片的方法 里面的参数就是一个'prev'字符串
    		carousel.carousel("prev");
    	}else {
    		carousel.carousel("next");
    	}
    });

});
