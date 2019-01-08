$(function() {
	//header焦点事件
	$(".NewActiveSearch input").focus(function() {
		$(".SearchBoxInner").show()
	})
	$(".NewActiveSearch input").blur(function() {
		$(".SearchBoxInner").hide()
	})
	$(".SearchBoxInner p a").click(function() {
		$(".SearchBoxInner").hide()

	})
	//头部右边
	$(".manageInfo").hover(function() {
		$(this).find(".xiala").show()
		$(this).find(".heng-g").css("opacity", "1")
		$(this).siblings().find(".heng-g").attr("style", "")
		$(this).siblings().find(".xiala").hide()
		$(this).addClass("boxShadow").siblings().removeClass("boxShadow")
	}, function() {
		$(".manageInfo").removeClass("boxShadow").find(".xiala").hide()
		$(".manageInfo").find(".heng-g").attr("style", "")

	})

	/*下拉2的选项卡*/
	$(".xiala2-btn a").mouseover(function() {
		$(this).addClass("xialaActive").siblings().removeClass("xialaActive")
		$(".xiala2-bottom>li").eq($(this).index()).show().siblings().hide()
	})

	//全部大选项卡
	$(".section-aside a").click(function() {
		$(this).addClass("ACtive").siblings().removeClass("ACtive").find(".sanjiao").hide()
		$(this).find(".sanjiao").show()
		$(".article-right-big>li").eq($(this).index()).show().siblings().hide()
	})

	//	滚动条

	//banner
	var timer = null;
	var now = 0
	$(".BtnLeft").click(function() {
		now--
		if(now < 0) {
			now = 1;
		}
		$(".longBanner").css("left", now * -1776)
		$(this).hide().siblings().show()
	})
	$(".BtnRight").click(function() {
		tmi()
		$(this).hide().siblings().show()
	})
	timer = setInterval(tmi, 4000)

	function tmi() {
		now++;
		if(now > 1) {
			now = 0
		}
		$(".longBanner").css("left", now * -1776)
	}
	$(".article-banner").hover(function() {
		if(now == 0) {
			$(".BtnRight").show().siblings().hide()
		} else {
			$(".BtnLeft").show().siblings().hide()
		}
		clearInterval(timer)
	}, function() {
		$(".BtnRight").hide()
		$(".BtnLeft").hide()
		timer = setInterval(tmi, 4000)
	})

})

/*选项卡*/
$(function() {
	//一级菜单
	$(".NewCatTitle a").on("click", function() {
		$(this).addClass("aCtiveTitle").siblings().removeClass("aCtiveTitle")
		$(".NewCatTitle").removeClass("titleBorder")
		$(".NewCatTitle a").removeClass("aCtiveBorder").find("i").removeClass("up")
		$(".slideDown").hide()
		//通过属性选择器来筛选出需要的内容来显示，其余的隐藏
		var x=$(this).find("span").html()
		$(".ActiveContent li").hide().filter("[shuangshier="+$(this).find("span").html()+"]").show()
		if(x==$(".ActiveContent li").attr("blass")){
			$(".ActiveContent li").show()
		}
		
		
		
		
	})
	/*点击下拉*/
	$(".downSlide").on("click", function() {
		$(this).addClass("aCtiveBorder").siblings().removeClass("aCtiveBorder").find("i").addClass("up")
		$(".NewCatTitle").addClass("titleBorder")
		$(".slideDown").toggle()
		$(".slideDownLone").eq($(this).index(".downSlide")).show().siblings().hide();
		$(this).find("i").addClass("up")
		$(this).siblings().find("i").removeClass("up")
	})

	/*二级下拉*/
	//通过选择另外的一个属性来筛选出需要显示隐藏的东西
	$(".slideDownLone a").on("click", function() {
		$(this).addClass("aCtiveTitle").siblings().removeClass("aCtiveTitle")
		$(".divDown").hide()
		//通过属性选择器来筛选出需要的内容来显示，其余的隐藏
		$(".ActiveContent li").hide().filter("[xiamiande="+$(this).find("span").html()+"]").show()
		
		
	})
	$(".slideDownLone em").click(function() {
		$(this).addClass("aCtiveTitle")
		$(".divDown").toggle()
	})
	$(".divDown a").on("click", function(ev) {
		$(".divDown").css("display", "none")
		ev.stopPropagation() /*清除事件冒泡*/

	})

	$(".ActiveContent").delegate("li", "hover", function() {
		$(this).find(".showPic").toggle()
		$(this).find(".showGif").toggle()
		$(this).find(".actCreateImg").toggleClass("actCreateImgHover")

	})

	//获取

	var pageStart = 0
	function getList() {
		var result = listData["listData0" + pageStart];
		var list = result.data.list;
		if(pageStart == 0) {
			$("#articleList").html("");
		}
		for(var i = 0; i < list.length; i++) {
			var htmlmodel = $('.tiHuanHtml').html()
			htmlmodel = htmlmodel.replace("$articleId$", list[i].sysId); /*详情页跳转*/
			htmlmodel = htmlmodel.replace("img/AAEIABACGAAgjJnK1wUogNjluQQwwgM4_gE.jpg", list[i].coverImg);
			htmlmodel = htmlmodel.replace("img/AAEIABADGAAgj5nK1wUosMG9-gEw4QE4fQ.gif", list[i].coverGif);
			htmlmodel = htmlmodel.replace("url(img/hot.png)", list[i].articleBg);
			htmlmodel = htmlmodel.replace("$title$", list[i].title);
			htmlmodel = htmlmodel.replace("all", list[i].articleId);
			htmlmodel = htmlmodel.replace("articlefs", list[i].articlefs);
			htmlmodel = htmlmodel.replace("articlesh", list[i].articlesh);
			$("#articleList").append(htmlmodel);

		}
	}
	getList()
})

$(function() {
	$(".Weifabu").click(function() {
		$(".quanbuzhuangtai").toggle()
	})

	$(".div10").click(function() {
		$(this).find(".autoXIala").toggle()
		var This=$(this).find(".content")
		$(".autoXIala span").click(function(ev) {
			This.html($(this).html())
			$(".autoXIala").hide()
			ev.stopPropagation()
		})
	})

	/*核销选项卡*/

	$(".MyactiveTitle span").click(function() {
		$(this).find(".heng").addClass("hexiao")
		$(this).siblings().find(".heng").removeClass("hexiao")
		$(".HexiaoBottom").eq($(this).index()).show().siblings(".HexiaoBottom").hide()

	})
})