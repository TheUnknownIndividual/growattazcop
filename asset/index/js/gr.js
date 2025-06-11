// $(document).ready(function() {
// 	var winHei = $(window).height(),
// 		winWid = $(window).width()
// 	$(".imgbox").css({
// 		'width': winWid,
// 		'height': winHei
// 	})
// 	$(".imgbox #swiper_ban").css({
// 		'height': winHei
// 	})
// })
// documnet
$(document).ready(function() {
	var he = $(window).height();
	//$(".ban").css("height",he)
	//$(".imgbox img").css("height",he)
})


$(document).ready(function() {
	$('.nava').hover(function() {
		$(this).find('.navb').stop().slideDown();
		//$('.he_pcbx').addClass('border');
	}, function() {
		$(this).find('.navb').stop().slideUp();
		//$('.he_pcbx').removeClass('border');
	})
})

$(document).ready(function() {
	$('.level2').click(function() {
		let display = $(this).siblings('.level3').is(":visible");
		$('.level3').hide();
		if(display){
			$(this).siblings('.level3').hide();
		}else{
			$(this).siblings('.level3').show();
		}

	})
})

$(document).ready(function() {

	$(".topa_c").hover(function() {
		$(this).find(".topa_a2").stop().slideDown(300);
	}, function() {
		$(this).find(".topa_a2").stop().slideUp(300);
	});
	$(".top").mouseleave(function() {
		$(this).find(".topa_a2").slideUp(300);
	})
})


$(document).ready(function() {
	$(".topa_a3").slideUp()
	$(".topa_d").hover(function() {
		$(this).find(".topa_a3").stop().slideDown(300);
	}, function() {
		$(this).find(".topa_a3").stop().slideUp(300);
	});
	$(".top").mouseleave(function() {
		$(this).find(".topa_a3").slideUp(300);
	})
})
$(document).ready(function() {
	$(".topa_a1").slideUp()
	$(".topa_b").hover(function() {
		$(this).find(".topa_a1").stop().slideDown(300);
	}, function() {
		$(this).find(".topa_a1").stop().slideUp(300);
	});
})

$(document).ready(function() {
	$(".topa_a3sj").slideUp()
	$(".topa_dsj img").click(function() {
		$(".topa_a3sj").slideToggle();
		$(".topa_a1sj").slideUp();
		$(".topa_a2sj").slideUp();
	})
})
$(document).ready(function() {
	$(".topa_a2sj").slideUp()
	$(".topa_csj img").click(function() {
		$(".topa_a2sj").slideToggle();
		$(".topa_a1sj").slideUp();
		$(".topa_a3sj").slideUp();
	})
})
$(document).ready(function() {
	$(".topa_a1sj").slideUp()
	$(".topa_bsj img").click(function() {
		$(".topa_a1sj").slideToggle();
		$(".topa_a2sj").slideUp();
		$(".topa_a3sj").slideUp();
	})
})


//手机菜单效果
$(document).ready(function() {
	$(".sjdhb_aa").slideUp()
	$(".sjdhb_ah1 .sjdhb_aa").slideDown();
	$(".sjdhb_a").click(function() {
		if ($(this).find(".sjdhb_aa").css('display') == "none") {
			$(this).find(".sjdhb_aa").slideDown();
			$(this).siblings().find(".sjdhb_aa").slideUp();
			$(this).addClass("sjdhb_ah1");
			$(this).siblings().removeClass("sjdhb_ah1");
		} else {
			$(this).find(".sjdhb_aa").slideUp();
			$(this).removeClass("sjdhb_ah1");
		}
	})
})

//轮播图
$(document).ready(function() {
	var fv = 0
	var gs = $(".imgbox_a").length;
	//	var m =$(".imgbox img").index+1;
	$(".imgbox_a").hide().first().fadeIn();
	$(".flip li").click(function() {
		$(this).addClass("ppp").siblings().removeClass("ppp");
		fv = $(this).index();
		$(".imgbox_a").fadeOut().eq(fv).fadeIn();
	});
	//点击右箭头
	$(".bt-f").click(function() {
		if (fv < gs - 1) {
			fv = fv + 1;
		} else {
			fv = 0;
		}
		$(".imgbox_a").fadeOut().eq(fv).fadeIn();
		$(".flip li").eq(fv).addClass("ppp").siblings().removeClass("ppp");
		$(".bt-f").addClass("boya");
		$(".bt-b").removeClass("boya");
	});
	//点击左箭头
	$(".bt-b").click(function() {
		if (fv > 0) {
			fv = fv - 1;
		} else {
			fv = 0;
		}
		$(".imgbox_a").fadeOut().eq(fv).fadeIn();
		$(".flip li").eq(fv).addClass("ppp").siblings().removeClass("ppp");
		$(".bt-b").addClass("boya");
		$(".bt-f").removeClass("boya");
	});
	//自动轮播
	setInterval(function() {
		if (fv < gs - 1) {
			fv = fv + 1;
		} else {
			fv = 0;
		}
		$(".imgbox_a").fadeOut().eq(fv).fadeIn();
		$(".flip li").eq(fv).addClass("ppp").siblings().removeClass("ppp");
	}, 5000);
	$(".bt-a").hide();
	$(".bt-k").hide();
	$(".ban").mouseenter(function() {
		$(".bt-a").fadeIn();
		$(".bt-k").fadeIn();
	});
	$(".ban").mouseleave(function() {
		$(".bt-a").fadeOut();
		$(".bt-k").fadeOut();
	})
})


//关于切换
$(document).ready(function() {
	$(".gy1b_a").click(function() {
		$(this).addClass("gy1b_b").siblings().removeClass("gy1b_b");
	})
})


//里程碑切换
$(document).ready(function() {
	var n = 0
	var fv = 0
	var num = 1
	var b = $(".gy1ed_a").length;
	var o = $(".gy1ec").width();
	var c = $(".gy1ed").width(o * b / 9);
	var a = $(".gy1ed_a").width(b / 9 * o / b);
	var gs = $(".gy1eaa").length;
	//	$(".gy1eaa").hide().eq(0).show()
	$(".gy1ed_a").click(function() {
		num = 0
		fv = $(this).index();
		$(".gy1eaa").removeClass("onx").eq(fv).addClass("onx");
		$(this).addClass("on").siblings().removeClass("on");
		setTimeout(function() {
			num = 1
		}, 10000);
	});
	//点击右箭头
	$(".gy1eb_y").click(function() {

		num = 0
		if (n < b - 9) {
			n++;
		} else {}
		$(".gy1ed").animate({
			marginLeft: -b / 9 * o / b * n
		}, 500, "easeInOutCubic");
		setTimeout(function() {
			num = 1
		}, 10000);

	});
	$(".gy1eb_y").click(function() {
		if (fv < gs) {
			fv = fv + 1;
		} else {}
		if (fv == gs) {
			fv = 0
			n = 0
			$(".gy1ed").animate({
				marginLeft: 0
			}, 500, "easeInOutCubic");
		}
		$(".gy1eaa").removeClass("onx").eq(fv).addClass("onx");
		$(".gy1ed_a").eq(fv).addClass("on").siblings().removeClass("on");
	});

	//点击左箭头
	$(".gy1eb_z").click(function() {
		num = 0
		if (n > 0) {
			n = n - 1;
		} else {
			n = 0;
		}
		if (fv == 0) {
			fv = gs
			n = gs - 9
			$(".gy1ed").animate({
				marginLeft: -b / 9 * o / b * n
			}, 500, "easeInOutCubic");
		}
		$(".gy1ed").animate({
			marginLeft: -b / 9 * o / b * n
		}, 500, "easeInOutCubic");
		setTimeout(function() {
			num = 1
		}, 10000);
	});
	$(".gy1eb_z").click(function() {
		if (fv > 0) {
			fv = fv - 1;
		} else {
			fv = 0;
		}
		$(".gy1eaa").removeClass("onx").eq(fv).addClass("onx");
		$(".gy1ed_a").eq(fv).addClass("on").siblings().removeClass("on");
	});
	setInterval(function() {
		if (num == 1) {
			if (n < b - 9) {
				n++;
			} else {}
			if (fv < gs) {
				fv = fv + 1;
			} else {}
			if (fv == gs) {
				fv = 0
				n = 0
				$(".gy1ed").animate({
					marginLeft: 0
				}, 500, "easeInOutCubic");
			}
			$(".gy1ed").animate({
				marginLeft: -b / 9 * o / b * n
			}, 500, "easeInOutCubic");
			$(".gy1eaa").removeClass("onx").eq(fv).addClass("onx");
			$(".gy1ed_a").eq(fv).addClass("on").siblings().removeClass("on");
		} else {}
	}, 5000)
})
$(document).ready(function() {
	var n = 0
	var fv = 0
	var b = $(".gy2ed_a").length;
	var o = $(".gy2ec").width();
	var c = $(".gy2ed").width(o * b / 5);
	var a = $(".gy2ed_a").width(b / 5 * o / b);
	var gs = $(".gy1eaa").length;
	//	$(".gy1eaa").hide().eq(0).show()
	$(".gy2ed_a").click(function() {
		fv = $(this).index();
		$(".gy1eaa").hide().eq(fv).fadeIn();
		$(this).addClass("on").siblings().removeClass("on");
	});
	//点击右箭头
	$(".gy2eb_y").click(function() {
		if (n < b - 5) {
			n++;
		} else {}
		$(".gy2ed").animate({
			marginLeft: -b / 5 * o / b * n
		}, 500, "easeInOutCubic");
	});
	$(".gy2eb_y").click(function() {
		if (fv < gs) {
			fv = fv + 1;
		} else {}
		if (fv == gs) {
			fv = 0
			n = 0
			$(".gy2ed").animate({
				marginLeft: 0
			}, 500, "easeInOutCubic");
		}
		$(".gy1eaa").hide().eq(fv).fadeIn(500);
		$(".gy2ed_a").eq(fv).addClass("on").siblings().removeClass("on");
	});
	//点击左箭头
	$(".gy2eb_z").click(function() {
		if (n > 0) {
			n = n - 1;
		} else {
			n = 0;
		}
		if (fv == 0) {
			fv = gs
			n = gs - 5
			$(".gy1ed").animate({
				marginLeft: -b / 5 * o / b * n
			}, 500, "easeInOutCubic");
		}
		$(".gy2ed").animate({
			marginLeft: -b / 5 * o / b * n
		}, 500, "easeInOutCubic");
	});
	$(".gy2eb_z").click(function() {
		if (fv > 0) {
			fv = fv - 1;
		} else {
			fv = 0;
		}
		$(".gy1eaa").hide().eq(fv).fadeIn(500);
		$(".gy2ed_a").eq(fv).addClass("on").siblings().removeClass("on");
	})
})

//荣誉切换
$(document).ready(function() {
	var n = 0
	var b = $(".gy1fa_b").length;
	var o = $(".gy1fa_a").width();
	var c = $(".gy1fb").width(o * b / 5);
	var a = $(".gy1fa_b").width(b / 5 * o / b);
	//点击右箭头
	$(".gy1fa_y").click(function() {
		if (n < b - 5) {
			n++;
		} else {
			n = 0
		}
		$(".gy1fb").animate({
			marginLeft: -b / 5 * o / b * n
		}, 500, "easeInOutCubic");
	})

	//点击左箭头
	$(".gy1fa_z").click(function() {
		if (n > 0) {
			n = n - 1;
		} else {
			n = 0;
		}
		$(".gy1fb").animate({
			marginLeft: -b / 5 * o / b * n
		}, 500, "easeInOutCubic");
	});
	setInterval(function() {
		if (n < b - 5) {
			n++;
		} else {
			n = 0;
		}
		$(".gy1fb").animate({
			marginLeft: -b / 5 * o / b * n
		}, 500, "easeInOutCubic");
	}, 5000)
})

//问题切换
$(document).ready(function() {
	var fv = 0
	var gs = $(".gy2a_ta").length;
	//	var m =$(".imgbox img").index+1;
	//	$(".gy2a_ta").hide().first().fadeIn();
	//点击右箭头
	$(".gy2a_y").click(function() {
		if (fv < gs - 1) {
			fv = fv + 1;
		} else {
			fv = 0;
		}
		$(".gy2a_ta").removeClass("onx").eq(fv).addClass("onx");
	});
	//点击左箭头
	$(".gy2a_z").click(function() {
		if (fv > 0) {
			fv = fv - 1;
		} else {
			fv = 0;
		}
		$(".gy2a_ta").removeClass("onx").eq(fv).addClass("onx");
	})
})

//文化切换
$(document).ready(function() {
	var n = 0
	var b = $(".gy3ca_2").length;
	var o = $(".gy3ca_1").width();
	var c = $(".gy3cb").width(o * b / 3);
	var a = $(".gy3ca_2").width(b / 3 * o / b);
	var q = 0;
	//点击右箭头
	$(".gy3ca_y").click(function() {
		if (n < b - 3) {
			n++;
		} else {
			n = 0
		}
		$(".gy3cb").animate({
			marginLeft: -b / 3 * o / b * n
		}, 500, "easeInOutCubic");

	});
	// 增加一个判断
	if($(".gy3ca_2 video").length){
        setInterval(function() {
            if($(".gy3ca_2 video").get(0).paused){
                q = 0
            }else{
                q = 1
            }
        }, 10)
	}

	//点击左箭头
	$(".gy3ca_z").click(function() {
		if (n > 0) {
			n = n - 1;
		} else {
			n = 0;
		}
		$(".gy3cb").animate({
			marginLeft: -b / 3 * o / b * n
		}, 500, "easeInOutCubic");
	});

	setInterval(function() {
		if (q == 0) {
			if (n < b - 3) {
				n++;
			} else {
				n = 0;
			}
			$(".gy3cb").animate({
				marginLeft: -b / 3 * o / b * n
			}, 500, "easeInOutCubic");
		}
	}, 5000)
})


//案例切换
$(document).ready(function() {
	var fv = 0
	//var gs = $(".altcb").length;
	var n = 0
	var b = $(".altcb").length;
	var o = $(".altca").width();
	var c = $(".altca_width").width(o * b / 1);
	var a = $(".altcb").width(b / 1 * o / b);
	//	$(".altcb").hide().first().fadeIn();
	$("body").on('click', ".alla", function() {
		b = $(".altcb").length;
		n = $(this).index();
		$(".altc").show()
		// $(".altcb").hide().eq(fv).show();
		$(".altca_width").animate({
			marginLeft: -b / 1 * o / b * n
		}, 0, "easeInOutCubic");
		$("html").css("overflow-y", "hidden")
		$(".altcb").eq(n).find(".altcb_t img").removeClass("imga").eq(0).addClass("imga");
	})
	//	$(".altcb").hide().first().fadeIn();
	$("body").on('click', ".jjyeb_a", function() {
		b = $(".altcb").length;
		n = $(this).index();
		$(".altc").show()
		// $(".altcb").hide().eq(fv).show();
		$(".altca_width").animate({
			marginLeft: -b / 1 * o / b * n
		}, 0, "easeInOutCubic");
		$("html").css("overflow-y", "hidden")
		$(".altcb").eq(n).find(".altcb_t img").removeClass("imga").eq(0).addClass("imga");
	})
	//点击右箭头
	$("body").on('click', ".altc_y", function() {
		b = $(".altcb").length;
		if (n < b - 1) {
			n++;
		} else {
			n = 0
		}
		$(".altca_width").animate({
			marginLeft: -b / 1 * o / b * n
		}, 500, "easeInOutCubic");
		$(".altcb").eq(n).find(".altcb_t img").removeClass("imga").eq(0).addClass("imga");
	})

	//点击左箭头
	$("body").on("click", ".altc_z", function() {
		if (n > 0) {
			n = n - 1;
		} else {
			n = 0;
		}
		$(".altca_width").animate({
			marginLeft: -b / 1 * o / b * n
		}, 500, "easeInOutCubic");
		$(".altcb").eq(n).find(".altcb_t img").removeClass("imga").eq(0).addClass("imga");
	})
	//	点击关闭
	$("body").on("click", ".guanb", function() {
		$(".altc").hide();
		$("html").css("overflow-y", "auto");
	});
	$("body").on("click", ".altc", function() {
		$(".altc").hide();
		$("html").css("overflow-y", "auto");
	});
	$("body").on("click", ".altca", function(event) {
		event.stopPropagation();
	});
	$("body").on("click", ".altc_z", function(event) {
		event.stopPropagation();
	});
	$("body").on("click", ".altc_y", function(event) {
		event.stopPropagation();
	})
})

//案例图片切换
$(document).ready(function() {
	var n = 0
	var l = 0
	var o = 0
	$(".altcb_t img").removeClass("imga").eq(0).addClass("imga")
	$("body").on("click", ".altcb_tul li", function() {
		$(this).parents(".altcb_t").children("img").removeClass("imga").eq($(this).index()).addClass(
			"imga");
		$(this).addClass("on").siblings().removeClass("on");
	});
	$("body").on("click", '.altcb_t_l', function() {
		var b = $(this).parents(".altcb_t").children("img").length
		if (n > 0) {
			n = n - 1
			l = l - 1
		} else {
			n = b - 1
			l = b - 1
		}
		$(this).parents(".altcb_t").children("img").removeClass("imga")
		$(this).parents(".altcb_t").children("img").eq(n).addClass("imga")
		$(this).prevAll(".altcb_tul").children("li").removeClass("on")
		$(this).prevAll(".altcb_tul").children("li").eq(n).addClass("on");
	})
	$("body").on("click", '.altcb_t_r', function() {
		var b = $(this).parents(".altcb_t").children("img").length
		if (n < b - 1) {
			n++
			l++
		} else {
			n = 0
			l = 0
		}
		$(this).parents(".altcb_t").children("img").removeClass("imga")
		$(this).parents(".altcb_t").children("img").eq(n).addClass("imga")
		$(this).prevAll(".altcb_tul").children("li").removeClass("on")
		$(this).prevAll(".altcb_tul").children("li").eq(n).addClass("on");
	})
	var altLen = $('.altcb').length
	setInterval(function() {
		var b = $('.altcb').eq(1).find('.altcb_t >img').length
		if (n < b - 1) {
			n++
		} else {
			n = 0
		}
		if (l < b - 2) {
			l++
		} else {
			l = 0
		}
		$('.altcb').eq(0).find('.altcb_t >img').removeClass("imga")
		$('.altcb').eq(0).find('.altcb_t >img').eq(n).addClass("imga")
		$('.altcb').eq(0).find('.altcb_t >ul').children("li").removeClass("on")
		$('.altcb').eq(0).find('.altcb_t >ul').children("li").eq(n).addClass("on");
		$('.altcb').eq(1).find('.altcb_t >img').removeClass("imga")
		$('.altcb').eq(1).find('.altcb_t >img').eq(n).addClass("imga")
		$('.altcb').eq(1).find('.altcb_t >ul').children("li").removeClass("on")
		$('.altcb').eq(1).find('.altcb_t >ul').children("li").eq(n).addClass("on");
		$('.altcb').eq(2).find('.altcb_t >img').removeClass("imga")
		$('.altcb').eq(2).find('.altcb_t >img').eq(l).addClass("imga")
		$('.altcb').eq(2).find('.altcb_t >ul').children("li").removeClass("on")
		$('.altcb').eq(2).find('.altcb_t >ul').children("li").eq(n).addClass("on");
		$('.altcb').eq(3).find('.altcb_t >img').removeClass("imga")
		$('.altcb').eq(3).find('.altcb_t >img').eq(l).addClass("imga")
		$('.altcb').eq(3).find('.altcb_t >ul').children("li").removeClass("on")
		$('.altcb').eq(3).find('.altcb_t >ul').children("li").eq(n).addClass("on");
		$('.altcb').eq(4).find('.altcb_t >img').removeClass("imga")
		$('.altcb').eq(4).find('.altcb_t >img').eq(l).addClass("imga")
		$('.altcb').eq(4).find('.altcb_t >ul').children("li").removeClass("on")
		$('.altcb').eq(4).find('.altcb_t >ul').children("li").eq(n).addClass("on");
		$('.altcb').eq(5).find('.altcb_t >img').removeClass("imga")
		$('.altcb').eq(5).find('.altcb_t >img').eq(l).addClass("imga")
		$('.altcb').eq(5).find('.altcb_t >ul').children("li").removeClass("on")
		$('.altcb').eq(5).find('.altcb_t >ul').children("li").eq(n).addClass("on");
	}, 3000)
})

//联系我们切换
// $(document).ready(function() {
// 	$(".lxyca").hide().eq(0).show()
// 	$(".lxyba_a").click(function() {
// 		$(".lxyca").hide().eq($(this).index()).fadeIn();
// 		$(this).addClass("lxyba_on").siblings().removeClass("lxyba_on");
// 	})
// })

//首页新闻切换
$(document).ready(function() {
	$(".xwc img").removeClass("on").eq(0).addClass("on")
	$(".xwda").mouseenter(function() {
		$(".xwc img").removeClass("on").eq($(this).index()).addClass("on");
	})
})

//订阅弹框
// $(document).ready(function() {
// 	$(".yja p").click(function() {
// 		$(".sytk").show();
// 		$("html").css("overflow-y", "hidden");
// 	});
// 	$(".dy_close").click(function() {
// 		$(".sytk").hide();
// 		$("html").css("overflow-y", "auto");
// 	});
// 	$(".sytk").click(function() {
// 		$(".sytk").hide();
// 		$("html").css("overflow-y", "auto");
// 	});
// 	$(".sytka").click(function(event) {
// 		event.stopPropagation();
// 	})
// })


//招聘切换
$(document).ready(function() {
	$(".jryca").eq(0).children(".jryca_b").show()
	$(".jryca").eq(0).children(".jryca_a").children("img").css("transform", "rotate(90deg)")
	$(".jryca_a").click(function() {
		if ($(this).siblings(".jryca_b").css('display') == "none") {
			$(this).siblings(".jryca_b").slideDown();
			$(this).parents(".jryca").siblings().children(".jryca_b").slideUp();
			$(this).parents(".jryca").siblings().children(".jryca_a").children("img").css("transform",
				"rotate(0deg)");
			$(this).children("img").css("transform", "rotate(90deg)");
		} else {
			$(this).siblings(".jryca_b").slideUp();
			$(this).children("img").css("transform", "rotate(0deg)");
		}
	})
})


//产品菜单切换
$(document).ready(function() {
	//	$(".cplz_a p").slideUp()
	$(".cplz_a").click(function() {
		$(this).children("p").stop(true, true).slideDown();
		$(this).addClass("on").siblings().removeClass("on")
		$(this).siblings().children("p").stop(true, true).slideUp();
	})
})


//产品内页下载切换
$(document).ready(function() {
	$(".cpxzc").hide().eq(0).show()
	$(".cpxza p").click(function() {
		$(".cpxzc").hide().eq($(this).index()).fadeIn();
		$(this).addClass("on").siblings().removeClass("on");
	})
})


//常见问题切换
$(document).ready(function() {
	$(".jryca").eq(0).children(".cjya_b").show()
	$(".jryca").eq(0).children(".jryca_a").children("span").css("background-image", "url(../img/g80.png)")
	$(".cjya_a").click(function() {
		if ($(this).siblings(".cjya_b").css('display') == "none") {
			$(this).siblings(".cjya_b").slideDown();
			$(this).parents(".cjya").siblings().children(".cjya_b").slideUp();
			$(this).parents(".cjya").addClass("on");
			$(this).parents(".cjya").siblings().removeClass("on");
		} else {
			$(this).siblings(".cjya_b").slideUp();
			$(this).parents(".cjya").removeClass("on");
		}
	})
})

//解决方案切换1
$(document).ready(function() {
	$(".jjyaa_a").click(function() {
		$(this).addClass("on").siblings().removeClass("on");
		var num = $('.jjyab').eq($(this).index()).offset().top,
			numh = $(".jjyaa").height()
		navh = $(".nav").height()
		if (($(window).width()) <= 1000) {
			navh = $(".sjdhgd").height()
		} else {
			navh = $(".nav").height()
		}
		$("html,body").animate({
			scrollTop: num - numh - navh - 20
		}, "slow");
		$(".jjyaa").addClass('pofx')
	});
	if ($('.jjyaa').length) {
		var nybonh = $('.jjyaa').offset().top,
			nybonhnnn = $(window).height() / 3,
			nybonhaaaa = $('.jjyaa').height()

		console.log(nybonh)
		$(window).scroll(function() {
			var wt = $(window).scrollTop(),
				l = $('.jjyab'),
				s = l.length - 1;
			console.log(wt)
			if (wt < nybonh || wt >= l.last().offset().top + l.last().height() + 50) {
				$('.jjyaa').removeClass('pofx');
				$('.jjyaa .jjyaa_a:first').addClass('on').siblings().removeClass('on');
			} else {
				if (wt > nybonh) {
					$('.jjyaa').addClass('pofx');
				}
				for (var i = 0; i < s; i++) {
					if (wt >= parseInt(l.eq(i).offset().top - 500) && wt < parseInt(l.eq(i + 1).offset()
							.top - 500)) {
						s = i;
						break;
					}
				}
				$('.jjyaa .jjyaa_a:eq(' + s + ')').addClass('on').siblings().removeClass('on');
			}
		})
	}
});
//解决方案切换2
$(document).ready(function() {
	var fv = 0
	var gs = $(".jjycc img").length;
	//	var m =$(".imgbox img").index+1;
	$(".jjycc img").hide().first().fadeIn();
	$(".jjyca p").click(function() {
		$(this).addClass("on").siblings().removeClass("on");
		fv = $(this).index();
		$(".jjycc img").hide().eq(fv).fadeIn();
	});
	//点击右箭头
	$(".jjycb_y").click(function() {
		if (fv < gs - 1) {
			fv = fv + 1;
		} else {
			fv = 0;
		}
		$(".jjycc img").hide().eq(fv).fadeIn();
		$(".jjyca p").eq(fv).addClass("on").siblings().removeClass("on");
	});
	//点击左箭头
	$(".jjycb_z").click(function() {
		if (fv > 0) {
			fv = fv - 1;
		} else {
			fv = 0;
		}
		$(".jjycc img").hide().eq(fv).fadeIn();
		$(".jjyca p").eq(fv).addClass("on").siblings().removeClass("on");
	});
});


//解决方案切换3
$(document).ready(function() {
	var fv = 0
	var gs = $(".jjyeb").length;
	$(".jjyeb").hide().eq(0).show()
	$(".jjye_ul li").click(function() {
		$(".jjyeb").hide().eq($(this).index()).fadeIn();
		$(this).addClass("on").siblings().removeClass("on");
	});
	//自动轮播
	setInterval(function() {
		if (fv < gs - 1) {
			fv = fv + 1;
		} else {
			fv = 0;
		}
		$(".jjyeb").hide().eq(fv).fadeIn();
		$(".jjye_ul li").eq(fv).addClass("on").siblings().removeClass("on");
	}, 6000);
});


//培训切换
$(document).ready(function() {
	$(".jryca").eq(0).children(".xlyc_ab").show()
	$(".jryca").eq(0).children(".jryca_a").children("span").css("background-image", "url(../img/g80.png)")
	$(".xlyc_aa").click(function() {
		if ($(this).siblings(".xlyc_ab").css('display') == "none") {
			$(this).siblings(".xlyc_ab").slideDown();
			$(this).parents(".xlyc_a").siblings().children(".xlyc_ab").slideUp();
			$(this).parents(".xlyc_a").addClass("on");
			$(this).parents(".xlyc_a").siblings().removeClass("on");
		} else {
			$(this).siblings(".xlyc_ab").slideUp();
			$(this).parents(".xlyc_a").removeClass("on");
		}
	})
})
$(document).ready(function() {
	$(".xlyca_h61").click(function() {
		$(".xlyc_ayc1").show();
		$(".xlyca_h61").hide();
	})
	$(".xlyca_h62").click(function() {
		$(".xlyc_ayc2").show();
		$(".xlyca_h62").hide();
	})
	$(".xlyca_h63").click(function() {
		$(".xlyc_ayc3").show();
		$(".xlyca_h63").hide();
	})
})
$(document).ready(function() {
	$(".xlyca").hide().eq(0).show()
	$(".xlyb p").click(function() {
		$(".xlyca").hide().eq($(this).index()).fadeIn();
		$(this).addClass("on").siblings().removeClass("on");
	})
})

//担保切换
$(document).ready(function() {
	$(".dbye").hide().eq(0).show()
	$(".dbyc p").click(function() {
		$(".dbye").hide().eq($(this).index()).fadeIn();
		$(this).addClass("on").siblings().removeClass("on");
	});

});

/*cookie弹出框*/
$(document).ready(function() {
	$(".cookie_ab h6").click(function() {
		$(".cookie").hide();
		localStorage.setItem("growatt_cookie_auth", 1);
	});
	$(".cookie_ab p").click(function() {
		$(".cookie").hide();
		localStorage.removeItem("growatt_cookie_auth", 1);
	});

	// 检查cookie是否展示
	let cookie_auth = localStorage.getItem("growatt_cookie_auth");
	if (!cookie_auth == 1) {
		$(".cookie").show();
	}
})

/*导航效果*/
$(document).ready(function() {
	$(window).scroll(function() {
		var ma = $(window).scrollTop();
		if (ma >= 100) {
			$(".top").addClass("topx");
		} else {
			$(".top").removeClass("topx");
		}
	});
})

//返回顶部
$(document).ready(function() {
	$(".fhdb").click(function() {
		$("html,body").animate({
			scrollTop: 0
		}, "slow");
	});
	$(window).scroll(function() {
		var ma = $(window).scrollTop();
		if (ma >= 500) {
			$(".fhdb").slideDown();
		} else {
			$(".fhdb").slideUp();
		}
	});
})

//产品列表左侧固定
$(document).ready(function() {
	$(window).scroll(function() {
		//		var cpw = $(".htmla").whdth();
		//		var cpwa = $(".commen").whdth();
		var cp = $(window).scrollTop();
		var cpt = $(".htmla").height();
		var cpta = $(".nban").height();
		var nei = $(".nei").height();
		var cplz = $(".cplz").height();
		//		$(".cplzx").css("left","(cpw - cpwa)/2")
		if (cp >= nei) {
			$(".cplz").css("margin-top", nei - cplz * 1.67);
			$(".cplz").removeClass("cplzx");
		} else if (cp >= cpta) {
			$(".cplz").addClass("cplzx");
			$(".cplz").css("margin-top", "0");
		} else {
			$(".cplz").removeClass("cplzx");
			$(".cplz").css("margin-top", "0");
		}
	})
})

//表单提示弹出框
$(document).ready(function() {
	$(".tssb span").click(function() {
		$(".tssb").hide();
	});
	$(".tssb img").click(function() {
		$(".tssb").hide();
	})
})

//分享代码
$(document).ready(function() {
	// 分享到twitter
	$('.twitter').click(function() {
		const text = `分享的文案`
		const link = location.href // 分享的页面
		window.open(`https://twitter.com/intent/tweet?text=` + encodeURIComponent(link))
	})
	// 分享到linkedin
	$('.linkedIn').click(function() {
		let _href = "https://www.linkedin.com/shareArticle?mini=true";
		const text = `分享的文案`
		const link = location.href // 分享的页面
		_href += "&title=" + text; //分享标题
		_href += "&url=" + encodeURIComponent(link); //分享链接
		window.open(_href);
	})
})


//分类切换
$(document).ready(function() {
	$(".cjy").hide().eq(0).show()
	$(".fenl_p").click(function() {
		$(".cjy").hide().eq($(this).index()).fadeIn();
		$(this).addClass("on").siblings().removeClass("on");
	})
})

//手机端语言滑块
$(document).ready(function() {
	$(".yyan h6").click(function() {
		$(".yyan_h").css("right", "0%")
	});
	$(".yyan_h h5").click(function() {
		$(".yyan_h").css("right", "-100%")
	});
	$(".yyan_ha p").slideUp()
	$(".yyan_ha").click(function() {
		if ($(this).find("p").css('display') == "none") {
			$(this).find("p").slideDown();
			$(this).siblings().find("p").slideUp();
			$(this).addClass("yyan_haa");
			$(this).siblings().removeClass("yyan_haa");
		} else {
			$(this).find("p").slideUp();
			$(this).removeClass("yyan_haa");
		}
	})
})
// contextmenu 禁用右键菜单
    document.addEventListener('contextmenu',function(e){
        e.preventDefault();
    })
