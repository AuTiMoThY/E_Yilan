<!doctype html>
<!--[if lt IE 7 ]> <html class="ie ie6 ie-lt10 ie-lt9 ie-lt8 ie-lt7 no-js" lang="zh"> <![endif]-->
<!--[if IE 7 ]>    <html class="ie ie7 ie-lt10 ie-lt9 ie-lt8 no-js" lang="zh"> <![endif]-->
<!--[if IE 8 ]>    <html class="ie ie8 ie-lt10 ie-lt9 no-js" lang="zh"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie ie9 ie-lt10 no-js" lang="zh"> <![endif]-->
<!--[if gt IE 9]><!--><html class="no-js" lang="zh"><!--<![endif]-->
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>我要投票 | 2015宜蘭四季創意旅程</title>

<?php
// -------------------------------
// SEO
// CSS
// Script in the HEAD
// -------------------------------
  include_once 'inc/HEAD.php';
 ?>


<?php
//app
  include_once 'inc/Social.php';
 ?>

<!--[if lt IE 9]>
  <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->

</head>

<body class="index_page">

<div class="fullBg vote"></div>

<?php
// -------------------------------
// Header
// -------------------------------
  include_once 'inc/Header.php';
 ?>

<div id="fancyAu" class="close">
	<div id="fancyAuBg" class="fancyAu-black"></div>
	<div id="fancyAuBlock" class="fancyAu-block">
		<form action="" class="">
			<p>感謝您參與本次宜蘭四季遊程投票活動，填寫下列資訊即可完成您的投票，謝謝！</p>
			<ul>
				<li>
					<label for="" class="ib">姓　　名</label><input type="text" name="" id="" class="ib">
				</li>
				<li>
					<label for="" class="ib">聯絡電話</label><input type="text" name="" id="" class="ib">
				</li>
				<li>
					<label for="" class="ib">電子郵件</label><input type="text" name="" id="" class="ib">
				</li>
			</ul>
			<button type="button" class="btn-submit"></button>
			<button type="button" id="closeFancyAu" class="btn-closeFancyAu"></button>
		</form>
	</div>
</div>

<main>
	<section class="slide sec-vote">
		<div class="slide-wrap">
			<div class="slide-container">
				<article id="slideVote" class="slide-content vote">
					<section class="vote-wrap">
						<div class="vote-container">
							<hgroup>
								<h1>明池 x 宜蘭 - 前進北橫尋秋趣【2014台灣紅葉最前線】</h1>
								<p>
									<span><i class="icon icon1"></i>參加單位│玩全宜蘭</span>
									<span><i class="icon icon2"></i>目前票數│368</span>
								</p>
							</hgroup>
							<div class="vote-top-pic"><div class="pic"><img src="images/temp/tem5.jpg" alt=""></div></div>
							<div class="vote-cnt">
								<button type="button" class="btn-goVote2 hide_txt" onclick="openFancyAu();">我要投票</button>
								<!-- 圖文編輯器 -->
								<img src="images/temp/tem6.jpg" alt="" class="temporary">
							</div>
						</div>
						<div class="btns cf">
							<div class="btn-goList left"><a href="vote.php" class="hide_txt">返回列表</a></div>
							<div class="btn-goVote left"><a href="javascript:void 0;" class="hide_txt" onclick="openFancyAu();">我要投票</a></div>
						</div>
					</section>

				</article>
			</div>
		</div>
	</section>
</main>

<footer class="global_ft">
	<div class="ocean"><img src="images/frontBg.png" alt=""></div>
</footer>




<?php
// -------------------------------
// Script in the FOOT
// -------------------------------
  include_once 'inc/ScriptFOOT.php';
 ?>
<script>
$(".apply").hover(function() {
	$(this).addClass('animated').addClass('tada');
}, function() {
	$(this).removeClass('animated').removeClass('tada');
});
</script>
<?php
// -------------------------------
// google analytics
// -------------------------------
  include_once 'inc/ga.php';
 ?>

</body>
</html>
