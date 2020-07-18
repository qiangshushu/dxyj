var ctxpath=$("#ctxpath").val();
if(ctxpath==undefined||ctxpath=="undefined"){
	ctxpath="";
}


var _hmt = _hmt || [];
	(function() {
		var hm = document.createElement("script");
		hm.src = "${baiduStatistical}";
		var s = document.getElementsByTagName("script")[0];
		s.parentNode.insertBefore(hm, s);
	})();

/////////////////////////////////////////////////////////////////////////////////////////







window.onbeforeunload = function()
 {
	 
	// delCookie("CSESSIONID");
    
 }

//删除cookies  
 function delCookie(name)  
 {  
     var exp = new Date();  
     exp.setTime(exp.getTime() - 1);  
     var cval=getCookie(name);  
     if(cval!=null)  
         document.cookie= name + "="+cval+";expires="+exp.toGMTString();  
 }

function getCookie(name) {
	var start = document.cookie.indexOf(name + "=");
	var len = start + name.length + 1;
	if ((!start) && (name != document.cookie.substring(0, name.length))) {
		return null;
	}
	if (start == -1) return null;
	var end = document.cookie.indexOf(';', len);
	if (end == -1) end = document.cookie.length;
	return unescape(document.cookie.substring(len, end));
};

   function myYJ(){ 	
	 
	 $.ajax({
			url:""+ctxpath+"/user/findper",
			type:"POST",
			async:false,
	        success:function(data){
	        	if(data.status == 0){
	        		if(data.data.status == 0){
	        			registerbtn();
	        		}else{
				 		location.href=""+ctxpath+"/user/personal"
				 	}
			 	}
	        }
	 
 	});
   }
   
   
   
   /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   $(function(){
	    /*
	     * 模拟网页中所有的下拉列表select
	     */
	    function selectModel(){
	        var $box = $('div.model-select-box');
	        var $option = $('ul.model-select-option', $box);
	        var $txt = $('div.model-select-text', $box);
	        var speed = 10;
//	      var lis=$(".model-select-option li");
//	      console.log(lis);
	       
	       
	       
	       
	        $txt.click(function(e) {
	                $option.not($(this).siblings('ul.model-select-option')).slideUp(speed, function(){
	                    int($(this));
	                });
	                $(this).siblings('ul.model-select-option').slideToggle(speed, function(){
	                    int($(this));
	                });
	                return false;
	            });
	       
	        $option.find('li').each(function(index, element) {
	                if($(this).hasClass('seleced')){
	                    $(this).addClass('data-selected');
	                }
	            })
	            .mousedown(function(){
	                $(this).parent().siblings('div.model-select-text').text($(this).text())
	                    .attr('data-value', $(this).attr('data-option'));
	                if($(this).text()=="<spring:message code='language.cn'/>"){
	                	//alert("切换中文");
	                	window.location = ""+ctxpath+"/index?locale=zh";

	                }else{
	                	//alert("切换英文");
	                	window.location =""+ctxpath+ "/index?locale=en";
		
	                };
	                $option.slideUp(speed, function(){
	                    int($(this));
	                });
	                $(this).addClass('seleced data-selected').siblings('li').removeClass('seleced data-selected');
	                return false;
	            })
	            .mouseover(function(){
	                $(this).addClass('seleced').siblings('li').removeClass('seleced');
	            });
	        $(document).click(function(e) {
	            $option.slideUp(speed, function(){
	            	
	                int($(this));
	            });
	        });
	        function int(obj){
	            obj.find('li.data-selected').addClass('seleced').siblings('li').removeClass('seleced');
	        }
	    }
	    selectModel();
	    
	});
   