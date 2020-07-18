/// <reference path="jquery-1.9.1.min.js" />


$(document).ready(function(){
	$(".topbar-show").hide();
	$(function () {
	$(window).scroll(function(){
	if ($(window).scrollTop()>200){
		$(".topbar-show").fadeIn(1500);
	}
	else
	{
		$(".topbar-show").fadeOut(1500);
	}
	});
		//当点击跳转链接后，回到页面顶部位置
		$("#back-to-top").click(function(){
		$("body,html").animate({scrollTop:0},1000);
		return false;
	});
	});
});

$(function(){
	
	$(".ny-header-menubox").hover(function(){
		
		$(this).children(".ny-header-menu").slideDown(300);
		$(this).addClass("ny-header-btnbg")
	},
	function(){
		$(this).children(".ny-header-menu").slideUp(300);
		$(this).removeClass("ny-header-btnbg")
	});
	
	
	$(".pp-more-btn").click(function(){
		var url=window.location.href;
		 
		 if(url.indexOf("?")>0){
			
			 if($(this).hasClass(".dd2")){
				
					$(this).parent(".screenBox dl dd").css({'height' : '48px','overflow' : 'hidden'});
			 		$(this).removeClass(".dd2");
				}
				else{
				
					$(this).parent(".screenBox dl dd").css({'height' : 'auto','overflow' : 'auto'});
			 		$(this).addClass(".dd2");	
				}
			 
		 }else{
		
			 if($(this).hasClass("dd2")){
			
					$(this).parent(".screenBox dl dd").css({'height' : '48px','overflow' : 'hidden'});
			 		$(this).removeClass("dd2");
				}
				else{
					
					$(this).parent(".screenBox dl dd").css({'height' : 'auto','overflow' : 'auto'});
			 		$(this).addClass("dd2");	
				}
		 }
		
	});
	

	$(".listcon-filter a").click(function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
		}else{
			$(this).addClass('on');
		};
	});


	$(function(){
		$(".deta-dd-xz a").click(function(){
		if($(this).hasClass("deta-dd-xzbg")){
		 $(this).removeClass("deta-dd-xzbg");
		 }
		 else{ 
		 $(this).siblings(".deta-dd-xz a").removeClass("deta-dd-xzbg");
		 $(this).addClass("deta-dd-xzbg");		 
		 }
		})
	});
	
	$(function(){
		$(".set-part1-list li").click(function(){
		
		 $(".set-part1-list li").removeClass("set-part1-li");
		 $(this).addClass("set-part1-li");		 
		
		})
	});
	$(function(){
		$(".set-part2-list a").click(function(){
			
			$(".set-part2-list a").removeClass("set-part2-a");
			$(this).addClass("set-part2-a");		 
			
		})
	});
	
	

	
	
	$(function(){
	    function tabs(tabTit,on,tabCon){
		$(tabCon).each(function(){
		  $(this).children().eq(0).show();
		  });
		$(tabTit).each(function(){
		  $(this).children().eq(0).addClass(on);
		  });
	     $(tabTit).children().click(function(){
	        $(this).addClass(on).siblings().removeClass(on);
	         var index = $(tabTit).children().index(this);
	         $(tabCon).children().eq(index).show().siblings().hide();
	    });
	     }
	tabs(".tab-hd","active",".tab-bd");
	   });

	
	
	$('.pro-i-detele').click(function(){
	    $(this).parent("li").remove();
	})
	
	
	
	
	$(function(){
		$(".d-dl4-dd span").click(function(){
			
			$(".d-dl4-dd span").removeClass("d-dl4-on");
			$(this).addClass("d-dl4-on");		 
			
		})
	});
	
	
	$(".pay-area-dd").hover(function(){
		
		$(this).addClass("pay-area-dd-on");
		$(this).children(".pay-area-dropdown").stop(true,true).slideDown(300);
	},function(){
		
		$(this).removeClass("pay-area-dd-on");
		$(this).children(".pay-area-dropdown").stop(true,true).slideUp(300);
	})
	
	$(".pay-area-dropdown a").click(function(){      
		$(".pay-area-txt").text($(this).html());    
		$(".pay-area-dropdown").hide();       
	});
	
	
	$(".pay-m1-btn").click(function(){      
		if ($(this).children("span").text()=="订单详情") {
			$(this).addClass("pay-m1-btn-on");
			$(this).children("span").text("收起详情");
			$(this).parents(".pay-m1").find(".pay-m1-hide").slideDown(300);
		} else{
			$(this).removeClass("pay-m1-btn-on");
			$(this).children("span").text("订单详情");
			$(this).parents(".pay-m1").find(".pay-m1-hide").slideUp(300);
		}      
	});
	
})

jQuery(function($){
	$('.reduce').click(function () {
	   var $input = $(this).next();
	   var val = $input.val();
	   if (val <= 1) {
		   	$(this).css("color","#999");
		   return false;
		} else {
		   $input.val(--val);
		   $(this).css("color","#333");

		   var pr=$(".cell.s-price").html().trim();
		  // alert(pr);
		   var xj=pr*val;
		
			//   $(this).parent().parent().parent().find(".s-subtotal").html(xj);
 
		}
	
	  
	});
	
	//var num=2;
	 $('.add').click(function () {
        var $input = $(this).prev();
        var val = $input.val();
        if (val < 999) {
            $input.val(++val);
            var pr=$(this).parent().parent().parent().find(".s-price").html().trim();
            //  alert(pr);
            var xj=pr*val;

            // $(this).parent().parent().parent().find(".s-subtotal").html(xj);
        } else {
           // alert('不能大于999');
        }

        if($('input[name="Gqty"]').val()<="1"){
            $(".reduce").css("color","#999");
        }else{
            $(".reduce").css("color","#333");
        }


	 });
	
	$('input[name="Gqty"]').blur(function(){
	     
	      if ($(this).val() == 0) {
	         alert('不能小于1');
	         $(this).val(1);
	      } else if ($(this).val() > 999) {
	         alert('不能大于999');
	         $(this).val(1);
	      }
	  
	});

});


function modifybtn(){
	layer.open({
	  type: 1,
	  title: false,
	  closeBtn: 0,
	  skin: 'border-modify',
	  shadeClose: true,
	  area: ['450px', '335px'], //宽高
	  content: $(".modify-pop"),
		
		
	})
}
function closebtn(){
	layer.closeAll();
	
}


function paymentbtn(){
	layer.open({
	  type: 1,
	  title: false,
	  closeBtn: 0,
	  skin: 'border-modify',
	  shadeClose: true,
	  area: ['450px', '460px'], //宽高
	  content: $(".payment-pop"),
		
		
	})
}


function registerbtn(){
	layer.open({
	  type: 1,
	  title: false,
	  closeBtn: 0,
	  skin: 'border-modify',
	  shadeClose: true,
	  area: ['450px', '220px'], //宽高
	  content: $(".register-pop"),
		
		
	})
}
















































