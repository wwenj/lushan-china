$(function(){
	/*大背景轮播，css3，火狐不兼容*/
	var i=1;
	setInterval(function(){
		if(i<4){
			i++;
		}else{
			i=1;
		}
		$(".topBack").css({
				background:'url(img/background/'+i+'.jpg)',
		});
	},5000);
	
	/*三个图标移入显示二维码*/
	$(".img").hover(
		function(){
			$(".imgTop").stop(true,true).eq($(this).index()).fadeIn();
		},
		function(){
			$(".imgTop").stop(true,true).eq($(this).index()).fadeOut();
		}
	);
	
	/*旋转木马轮播图*/
	Carousel.init($(".J_Poster"));
	
	/*中间选项卡*/
	$(".h1").click(function(){
		$(this).addClass('addcss').css('border-bottom','none').siblings().removeClass('addcss').css('border-bottom','1px solid #e5e5e5');
		$(".h1-con").eq($(this).index()).css('display','block').siblings().css('display','none');
	});
	
	/*菜单按钮移入背景色滑过  上下滑动效果*/
	$(".maskNav").hover(
		function(){
			$('.maskText').eq($(this).index()).css('color','white');
			$(this).children('.maskNav1').stop().css('transform','rotateX(180deg)');
		},
		function(){
			$('.maskText').eq($(this).index()).css('color','#439fde');
			$(this).children('.maskNav1').stop().css('transform','rotateX(90deg)');
		}
	);
	
	/*菜单按钮移入背景色滑过  左右滑动效果*/
	$(".btnCon").hover(
		function(){
			$(this).prev().css({
				background:'#FFA300',
				transform:'rotateY(180deg)'
			});
		},
		function(){
			$(this).prev().css({
				background:'#439fde',
				transform:'rotateY(90deg)'
			});
		}
	);
	
	/*定时器转盘*/
	var a=1
	timer=setInterval(move,20);
	
	function move(){
		$(".zhuan").css({transform: 'rotate('+a+'deg)'});
		if(a==360){a=0};
		a+=1;
	}
	$(".zhuan").hover(
		function(){clearInterval(timer)},
		function(){timer=setInterval(move,20)}
	);
	
	/*返回顶部侧边栏*/
	//滑轮滑动出现
	$(document).scroll(function(){
		var sctTop=$(document).scrollTop();
		if(sctTop>=1000){
			$(".goTop").css({
				opacity:'0.7',
				top:'73%',
				transform:'rotateX(0deg)'
			});
		}else{
			$(".goTop").css({
				opacity:'0',
				top:'101%',
				transform:'rotateX(800deg)'
			});
		}
	});
	//移入样式增强
	$(".goTop").hover(
		function(){
			$(this).css('opacity','1')
		},
		function(){
			$(this).css('opacity','0.7')
		}
	);
	//点击返回顶部
	$(".goTop").click(function(){
		timer=setInterval(goTop,1);
		function goTop(){
			var i=$(document).scrollTop();
			if(i>0){
				$(document).scrollTop(i-30);
			}else{
				clearInterval(timer);
			}
		};
	})
	
	
	
	
})