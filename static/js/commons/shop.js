
var ctxpath=$("#ctxpath").val();
if(ctxpath==undefined||ctxpath=="undefined"){
	ctxpath="";
}

$.ajax({
		
		url :""+ctxpath+"/shop/carnum",
			type:"post",
			dataType:"json", 
		data :
				{}	,
		 error:function(data){
		data = typeof(data) == "string" ? JSON.parse(data) : data; 

				//alert(data.msg);
			},  
			success:function(data){
				
		data = typeof(data) == "string" ? JSON.parse(data) : data; 
      	
      		if(data.num>0){
      			
      			$("#shopNum").show();
      		$("#shopNum").html(data.num);
      		}else{
      			
      			$("#shopNum").hide();
      		}
      	/* else{
      		location.href("pc/index/index");
      	} */	
		
				 }
		});