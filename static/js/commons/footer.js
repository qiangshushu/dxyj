	$("#goodNames").on('focus',function(){
							$("#goodNames").keyup(function(event){
								if(event.keyCode ==13){
									  //$("[#globelSearch]").click(); 
								    $("#globelSearch2").click();
								  }
								});
							
						})				
						
	
	function searchGoods(){
		var ids = [];
		var good = document.getElementById("goodNames").value;
		if(good==null||good==""||good=="请输入关键字"||good=="Please enter a keyword"){
			ids.push("{'goodsName':'','orderBy':'0','pageNo':'1'}");
			
			var ctxpath=$("#ctxpath").val();
			var url ="json={'goodsName':'','orderBy':'0','pageNo':'1'}";
			var encodedUrl = encodeURIComponent(url);

			location.href=ctxpath+"/pro/list?"+encodedUrl;		
		//post('${ctxpath}/pro/list', {json :"{'goodsName':'','orderBy':'e.market_date DESC','pageNo':'1'}"})
		}else{						
			ids.push("{'goodsName':'"+good+"','orderBy':'0','pageNo':'1'}");
			
			var ctxpath=$("#ctxpath").val();
			var url ="json={'goodsName':'"+good+"','orderBy':'0','pageNo':'1'}";
			var encodedUrl = encodeURIComponent(url);
		
				
			location.href=ctxpath+"/pro/list?"+encodedUrl;			
			
			
			//post('${ctxpath}/pro/list', {json :"{'goodsName':'"+good+"','orderBy':'e.market_date DESC','pageNo':'1'}"});
		}
	}
	function post(URL, PARAMS) {        
				    var temp = document.createElement("form");        
				    temp.action = URL;        
				    temp.method = "post";        
				    temp.style.display = "none";        
				    for (var x in PARAMS) {        
				        var opt = document.createElement("textarea");        
				        opt.name = x;        
				        opt.value = PARAMS[x];        
				        // alert(opt.name)        
				        temp.appendChild(opt);        
				    }        
				    document.body.appendChild(temp);        
				    temp.submit();        
				    return temp;        
				}  