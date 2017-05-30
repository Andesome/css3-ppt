$(function(){
	
	//1、设置ppt宽高
	var $pptBox = $(".ppt-box");
	var bw = getBrowserWH().w;
	var bh = getBrowserWH().h;
	$pptBox.css({width:bw,height:bh});
	$(window).resize(function(){
		var bw = getBrowserWH().w;
		var bh = getBrowserWH().h;
		$pptBox.css({width:bw,height:bh});
	})
	
	//2.切换上一页、下一页
	var $oBtnSwitch = $(".ppt-box .page-switch");
	var pptBoxArr = [];
	var i = 0;
	$oBtnSwitch.click(function(){
		var $currPPtBox = $(this).parents(".ppt-box");
		pptBoxArr.push($currPPtBox);
		var currBtnClass = $(this).attr("class");
		var regPre = /page-switch-pre/;
		var regNext = /page-switch-next/;
		if(regPre.test(currBtnClass)){
			if(i > 0){
				i--;
				pptBoxArr[i].addClass("active").removeClass("unactive");				
			}else{
				i=0;
			}
		}
		if(regNext.test(currBtnClass)){
			i++;
			$currPPtBox.addClass("unactive").siblings(".ppt-box").addClass("active");
		}
		
	})
	
	
		
	
	
	//获取浏览器宽、高
	function getBrowserWH(){
		var bw =  $(window).width();
		var bh = $(window).height();
		
		return {w:bw,h:bh};
	}
	
})
