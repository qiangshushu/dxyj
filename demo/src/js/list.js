function callback(res) {
  var menus = res.menus;
  var brands = res.brands;
  $(function() {
    $('#category-products').html(menus.map(function(item) {
      return "<li values2=\"".concat(item.value, "\"><a class=\"menu\">").concat(item.name, "</a><ul class=\"submenu\">").concat(item.children.map(function(submenu) {
        return "<li>".concat(submenu.name, "</li>");
      }).join(''), "<div class=\"arrow\"></div></ul></li>");
    }));
    $('#category-brand').html(brands.map(function(item) {
      return "<li>".concat(item, "</li>");
    }));

    var timeout = null;
    $('#brand-more').on('click', function() {
      $('#category-brand').toggleClass('hidden');
    });
    $('#category-products>li').hover(function(e) {
      clearTimeout(timeout);
      $('.submenu').hide();
      var p = $(e.currentTarget).position();
      $(e.currentTarget).find('.submenu').css({
        top: p.top + 'px',
        display: 'flex'
      }).find('.arrow').css({
        left: p.left + 28 + 'px'
      });
    }, function(e) {
      $(e.currentTarget).find('.submenu').hover(function() {
        clearTimeout(timeout);
        $(this).css({
          display: 'flex'
        });
      }, function() {
        $(this).hide();
      });
      timeout = setTimeout(function() {
        $(e.currentTarget).find('.submenu').hide();
      }, 300);
    });
    var data = JSON.parse(decodeURIComponent(window.location.search.substr(1)).substr(5));
    var menuIndex = -1;
    var submenuIndex = -1;

    if (data.categoryId) {
      if (data.categoryId.indexOf('-') != -1) {
        menuIndex = parseInt(data.categoryId.split('-')[0]) - 1;
        submenuIndex = parseInt(data.categoryId.split('-')[1]) - 1;
      } else {
        menuIndex = parseInt(data.categoryId) - 1;
      }
    }

    if (menuIndex != -1) {
      $('#category-products>li').eq(menuIndex).addClass('active');
    }

    if (submenuIndex != -1) {
      $('#category-products>li').eq(menuIndex).find('.submenu>li').eq(submenuIndex).addClass('active');
    }

    $('#category-products>li>a').on('click', function(e) {
      e.stopPropagation();
      $(this).parent().toggleClass('active').siblings().removeClass('active');
    });

    $('#category-products .submenu>li').on('click', function(e) {
      e.stopPropagation();
      $(this).parent().parent().addClass('active').siblings().removeClass('active');
      $(this).toggleClass('active').siblings().removeClass('active');
    });
  })
}
