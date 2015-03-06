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
	var $footerWrap = $("#footerWrap"),
		$body = $("body"),
		wrapLeft = $(".leftBar").innerWidth() + $(".global_hd").innerWidth(),
		viewPortWH = viewPortWidthHeight(),
		viewPortW = viewPortWH.width,
		viewPortH = viewPortWH.height,
		viewPortW2 = document.body.clientWidth;

	$body.height(viewPortH);


}


$(window).on('resize', function () {
	
	resizeBlock();

});

$(function () {
	resizeBlock();


})
