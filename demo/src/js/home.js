function pad(num) {
  return ('00000' + num).slice(-5);
}

function category1(event) {
  var e = event || window.event;
  var target = e.target || e.srcElement; //兼容ie

  var target = $(target) || $(e.srcElement);
  var categoryId = target.attr("categoryId");
  var category = target.attr("category");

  if (!categoryId) {
    return;
  }

  var data = {
    categoryId: categoryId,
    category: category,
    orderBy: 0,
    pageNo: 1
  };
  var url = "json=".concat(JSON.stringify(data));
  var encodedUrl = encodeURIComponent(url);
  location.href = "./src/html/list.html?" + encodedUrl;
}

function callback(res) {
  var menus = res.menus;
  console.log(menus);
  $(function() {
    $('#menus').html(menus.map(function(item) {
      return "<li><span class=\"menu-item\" categoryId=\"".concat(item.id, "\" category=\"").concat(item.name, "\">").concat(item.name, "</span>  <ul class=\"submenu\">").concat(item.children.map(function(submenu) {
        return "<li class=\"sub-menu-item\" categoryId=\"".concat(item.id, "-").concat(submenu.id, "\" category=\"").concat(submenu.name, "\">").concat(submenu.name, "</li>");
      }).join(''), "</ul></li>");
    }));

    $('#menus>li').on('click', category1);
    // .map((m,i)=>({...m, id: ('00000' + (i+1)).slice(-5),children: m.children.split('、').map((s,si)=>({name:s, id: ('00000' + (si+1)).slice(-5)}))}))
  })
}
