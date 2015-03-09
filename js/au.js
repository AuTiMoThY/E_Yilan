/*--------------------------------------*\
	宜蘭縣政府活動
	yilantourism
			by DFocus AuTiMoThY
\*--------------------------------------*/



function viewPortWidthHeight() {

  var wh = {};

  if(window.innerWidth) {
      wh.width = window.innerWidth;
      wh.height = window.innerHeight;
  }
  else if(document.documentElement.clientWidth) {
      wh.width = document.documentElement.clientWidth;
      wh.height = document.documentElement.clientHeight;
  }
  else if(document.body.clientWidth) {
      wh.width = document.body.clientWidth;
      wh.height = document.body.clientHeight;
  }
  return wh;
}

function resizeBlock (){
	var viewPortWH = viewPortWidthHeight(),
		viewPortW = viewPortWH.width,
		viewPortH = viewPortWH.height,
		viewPortW2 = document.body.clientWidth,
		viewPortH2 = document.body.clientHeight,
		$body = $("body");


	$body.height(viewPortH);
	$("#slide1, #slide3, #slide4").width(viewPortW2);
	$("#slide1, #slide3, #slide4").height(viewPortH2);
}


/*------------------------------------------------------------------------*\
/*------------------------------------------------------------------------*\
/*========================================================================*\
          tabs  function
\*========================================================================*/
function tabs(tabBlock) {
     // 預設顯示第一個 Tab
     var _showTab = 0;
     $(tabBlock).each(function(){
          // 目前的頁籤區塊
          var $tab = $(this);

          var $defaultLi = $('ul.tabs li', $tab).eq(_showTab).addClass('active');
          $($defaultLi.find('a').attr('href')).siblings().hide();

          // 當 li 頁籤被點擊時...
          // 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
          $('ul.tabs li', $tab).click(function() {
               // 找出 li 中的超連結 href(#id)
               var $this = $(this),
                    _clickTab = $this.find('a').attr('href');
               // 把目前點擊到的 li 頁籤加上 .active
               // 並把兄弟元素中有 .active 的都移除 class
               $this.addClass('active').siblings('.active').removeClass('active');
               // 淡入相對應的內容並隱藏兄弟元素
               $(_clickTab).stop(false, true).fadeIn().siblings().hide();

               return false;
          }).find('a').focus(function(){
               this.blur();
          });
     });
}


//mCustomScrollbar
$(window).load(function(){
	
	$.mCustomScrollbar.defaults.theme="inset"; //set "inset" as the default theme
	$.mCustomScrollbar.defaults.scrollButtons.enable=true; //enable scrolling buttons by default
	
	$(".scrollbar").mCustomScrollbar({
		// setHeight: 1300,
		theme:"rounded-dots",
		// scrollInertia:400
		snapAmount : 80,
		scrollInertia : 10,
		whileScrolling: false,
		mouseWheel :{ enable: true, normalizeDelta: true, scrollAmount: 50 },
		// mouseWheel :{ scrollAmount: 200 },
		scrollButtons:{ enable: false },
		advanced   :{autoExpandHorizontalScroll:false}
	});

	// $('#wra').find('#mCSB_2_scrollbar_vertical').css('opacity', '1');

});


$(window).on('resize', function () {
	
	resizeBlock();

});

$(function () {
	resizeBlock();

	$('.js-goWhere').localScroll();

	if( userAgent.match(/(msie|MSIE)/) || userAgent.match(/(T|t)rident/)  ) {
		// $(".loading .ip-loader .ip-inner").append('LOADING');
	}else {
		// console.log('not ie');
		$.material.init();
		var s = skrollr.init({
			forceHeight: false,
			render: function(data) {
					//Debugging - Log the current scroll position.
					console.log(data.curTop);
			}
		});
		s.refresh($('.slide'));
	}

	var $tabs = $("#infTab");
	if ($tabs.length) {
		tabs($tabs);
	};

})
