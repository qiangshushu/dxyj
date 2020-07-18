var ctxpath = $("#ctxpath").val();
if (ctxpath == undefined || ctxpath == "undefined") {
  ctxpath = "";
}

function findbrand1(event) {
  var e = event || window.event;
  var target = e.target || e.srcElement;
  //兼容ie	
  var target = $(target) || $(e.srcElement);
  var brand = target.html();
  var brandId = target.find(".menu").text();
  var ctxpath = $("#ctxpath").val();

  var b = $("#bname").val();
  var bid = $("#bname").attr("values2");
  var url = "json={'categoryId':'" + bid + "','category':'" + b + "','brandId':'" + brandId + "','brand':'" + brand + "','orderBy':'0','pageNo':'1'}";
  var encodedUrl = encodeURIComponent(url);
  location.href = ctxpath + "/pro/list?" + encodedUrl;

}

function category1(event) {
  var e = event || window.event;
  var target = e.target || e.srcElement;

  //兼容ie	
  var target = $(target) || $(e.srcElement);
  var menu = target.attr('menu');
  var submenu = target.attr('submenu');
  if(!menu) {
    return;
  }

  var data = {
    menu: menu,
    submenu: submenu
  }

  var url = `data=${JSON.stringify(data)}`;
  var encodedUrl = encodeURIComponent(url);
  location.href = ctxpath + "/pro/list?" + encodedUrl;
}

function accessories(event) {
  var e = event || window.event;
  var target = e.target || e.srcElement;
  //兼容ie	
  var target = $(target) || $(e.srcElement);
  console.log(target);
  var s = target.html();
  var brandId = target.attr("values2");
  var c = $("#cname").val();
  var ctxpath = $("#ctxpath").val();
  var cid = $("#cname").attr("values2");

  var url = "json={'categoryId':'" + cid + "','category':'" + c + "','brand':'" + s + "','brandId':'" + brandId + "','orderBy':'0','pageNo':'1'}";
  var encodedUrl = encodeURIComponent(url);
  //	alert(encodedUrl);
  ////alert(ctx);
  location.href = ctxpath + "/pro/list?" + encodedUrl;
}



function course(event) {
  var event = event || window.event;
  var target = event.target || event.srcElement;
  //兼容ie	
  var target = $(target) || $(e.srcElement);
  console.log(target);
  var s = target.html();
  var c = $("#course").val();
  var cid = $("#course").attr("values2");

  var ctxpath = $("#ctxpath").val();
  var url = "json={'category':'" + c + "','categoryId':'" + cid + "','orderBy':'0','pageNo':'1'}";
  var encodedUrl = encodeURIComponent(url);
  //	alert(encodedUrl);
  ////alert(ctx);
  location.href = ctxpath + "/pro/list?" + encodedUrl;
}

function system(event) {
  var event = event || window.event;
  var target = event.target || event.srcElement;
  //兼容ie	
  var target = $(target) || $(e.srcElement);
  console.log(target);
  var s = target.html();
  var c = $("#system").val();
  var cid = $("#system").attr("values2");


  var ctxpath = $("#ctxpath").val();
  var url = "json={'category':'" + c + "','categoryId':'" + cid + "','orderBy':'0','pageNo':'1'}";
  var encodedUrl = encodeURIComponent(url);
  //	alert(encodedUrl);
  ////alert(ctx);
  location.href = ctxpath + "/pro/list?" + encodedUrl;
}

function golist(event) {
  var event = event || window.event;
  var target = event.target || event.srcElement;
  //兼容ie	
  var target = $(target) || $(e.srcElement);
  var cid = target.attr("values2");
  var c = target.attr("values1");
  var ctxpath = $("#ctxpath").val();
  var url = "json={'category':'" + c + "','categoryId':'" + cid + "','orderBy':'0','pageNo':'1'}";
  var encodedUrl = encodeURIComponent(url);

  location.href = ctxpath + "/pro/list?" + encodedUrl;

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
