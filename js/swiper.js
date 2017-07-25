var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',
		    loop: true,
		    
		    // 如果需要分页器
		    pagination: '.swiper-pagination',
		    
		    // 如果需要前进后退按钮
		    //nextButton: '.swiper-button-next',
		    //prevButton: '.swiper-button-prev',
		    
		    // 如果需要滚动条
		    //scrollbar: '.swiper-scrollbar',
		    
		    //自动轮播
		    autoplay: 4000,
		    
		    //滑动速度
		    speed : 1500,
		    //点击分页符可以进行图片切换
		    paginationClickable :true,
		  })        