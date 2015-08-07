/**
* jquery.matchHeight-min.js v0.5.2
* http://brm.io/jquery-match-height/
* License: MIT
*/
(function(b){b.fn.matchHeight=function(a){if("remove"===a){var d=this;this.css("height","");b.each(b.fn.matchHeight._groups,function(b,a){a.elements=a.elements.not(d)});return this}if(1>=this.length)return this;a="undefined"!==typeof a?a:!0;b.fn.matchHeight._groups.push({elements:this,byRow:a});b.fn.matchHeight._apply(this,a);return this};b.fn.matchHeight._apply=function(a,d){var c=b(a),e=[c];d&&(c.css({display:"block","padding-top":"0","padding-bottom":"0","border-top":"0","border-bottom":"0",height:"100px"}),
e=k(c),c.css({display:"","padding-top":"","padding-bottom":"","border-top":"","border-bottom":"",height:""}));b.each(e,function(a,c){var d=b(c),e=0;d.each(function(){var a=b(this);a.css({display:"block",height:""});a.outerHeight(!1)>e&&(e=a.outerHeight(!1));a.css({display:""})});d.each(function(){var a=b(this),c=0;"border-box"!==a.css("box-sizing")&&(c+=g(a.css("border-top-width"))+g(a.css("border-bottom-width")),c+=g(a.css("padding-top"))+g(a.css("padding-bottom")));a.css("height",e-c)})});return this};
b.fn.matchHeight._applyDataApi=function(){var a={};b("[data-match-height], [data-mh]").each(function(){var d=b(this),c=d.attr("data-match-height");a[c]=c in a?a[c].add(d):d});b.each(a,function(){this.matchHeight(!0)})};b.fn.matchHeight._groups=[];b.fn.matchHeight._throttle=80;var h=-1,f=-1;b.fn.matchHeight._update=function(a){if(a&&"resize"===a.type){a=b(window).width();if(a===h)return;h=a}-1===f&&(f=setTimeout(function(){b.each(b.fn.matchHeight._groups,function(){b.fn.matchHeight._apply(this.elements,
this.byRow)});f=-1},b.fn.matchHeight._throttle))};b(b.fn.matchHeight._applyDataApi);b(window).bind("load resize orientationchange",b.fn.matchHeight._update);var k=function(a){var d=null,c=[];b(a).each(function(){var a=b(this),f=a.offset().top-g(a.css("margin-top")),h=0<c.length?c[c.length-1]:null;null===h?c.push(a):1>=Math.floor(Math.abs(d-f))?c[c.length-1]=h.add(a):c.push(a);d=f});return c},g=function(a){return parseFloat(a)||0}})(jQuery);

//PAGE RESIZE MOVE DIV POSITION 752
onResize = function() { 
  if ($(window).width() <= 751 || navigator.userAgent.match(/iPad/i) != null && $(window).width() <= 768) {
	  $('#right-inner').insertBefore($('#jsposition'));
	  $('#left').insertBefore($('#right'));
  } else {
	  $('#right-inner').insertBefore($('#right-adsense'));
	  $('#left').insertAfter($('#right'));
  }
  if ($(window).width() <= 751 || navigator.userAgent.match(/iPad/i) && $(window).width() <= 768) {
	  $('.search-blog').insertBefore($('.blog-intro h1'));
  } else {
	  $('.search-blog').insertBefore($('.left'));
  } 
};
//BLOG TABS FUNCTION
$.fn.tabs = function() {
  var selector = this;    
  this.each(function() {
      var obj = $(this);         
      $(obj.attr('href')).hide();        
      $(obj).click(function() {
          $(selector).removeClass('selected');            
          $(selector).each(function(i, element) {
              $($(element).attr('href')).hide();
          });            
          $(this).addClass('selected');
		  $($(this).attr('href')).fadeIn();            
          return false;
      });
    }); 
    $(this).show();    
    $(this).first().click();
};
//WINDOW RESIZE
$(window).resize(function () {	
	onResize();
});
//DOCUMENT READY
$(document).ready(function () {	
    //NAV
	$(".menu-btn").click(function(){
		$("nav.vertical > ul").slideToggle();
		$(".menu-btn .fa-bars").toggle();
		$(".menu-btn .fa-times").toggle();
	});
	$("nav.vertical li.category").click(function(){
		$(this).find("ul").slideToggle();
	});
	$("nav.horizontal li.category").click(function(){
		$(this).find("ul").toggle();
	});
	$('.htabs a').tabs();

	if (
	  navigator.userAgent.match(/Tablet/i) ||
	  navigator.userAgent.match(/iPad/i) ||
	  navigator.userAgent.match(/Kindle/i) ||
	  navigator.userAgent.match(/Playbook/i) ||
	  navigator.userAgent.match(/Nexus/i) ||
	  navigator.userAgent.match(/Xoom/i) ||
	  navigator.userAgent.match(/SM-N900T/i) || //Samsung Note 3
	  navigator.userAgent.match(/GT-N7100/i) || //Samsung Note 2
	  navigator.userAgent.match(/SAMSUNG-SGH-I717/i) || //Samsung Note
	  navigator.userAgent.match(/SM-T330NU/i) || //Samsung Tab 4 
	  navigator.userAgent.match(/SM-T210/i) //Samsung Tab 2 
	)
	{
		$("nav.horizontal ul li.categories").click(function() {
		  if($(this).find("ul").is(":visible"))
		  {
			$(this).find("ul").hide();
			$(this).find("a:first").css({"background-color":"#464646"});
			$(this).find("a").css({"color":"#ffffff"});
		  }
		  else
		  {
			$(this).find("ul").show();
			$(this).find("a:first").css({"background-color":"#f2f5f6"});
			$(this).find("a").css({"color":"#d10036"});
		  }
		});
	}
	else
	{		
		//CATEGORIES
		$('nav.horizontal ul li.categories').hover(function () {
			$(this).find("ul").delay(0).show();
			$(this).css({"background-color":"#f2f5f6"});
			$(this).find("a").css({"color":"#d10036"});
		}, function () {
			//$(this).find("ul").delay(1000).hide(0);
		});
	}	
	
	$('header').hover(function () {
		//$(this).find("ul").delay(0).show(0);
	}, function () {
		$(this).find("nav.horizontal ul li.categories ul").delay(1000).hide();
		$(this).find("nav.horizontal ul li.categories").css({"background-color":"transparent"});
		$(this).find("nav.horizontal ul li.categories a").css({"color":"#fff"});
	});
});
//WINDOW LOAD
$(window).load(function() {
	$(".list-wrapper .box-border").hover(function(){	  
	  $(this).css("border","4px solid #d7425e");
	  $(this).find(".box-shaddow").css({"border":"1px solid #d7425e","-moz-box-shadow":"none","-webkit-box-shadow":"none","box-shadow":"none"});
	},function(){
	  $(this).css("border","4px solid #fff");
	  $(this).find(".box-shaddow").css({"border":"1px solid #dedede","-moz-box-shadow":"0 1px 0 0 #dedede","-webkit-box-shadow":"0 1px 0 0 #dedede","box-shadow":"0 1px 0 0 #dedede"}); 	  
	});	
	$(".box-wrapper-images .box-padding .box-shaddow").hover(function(){	  
	  $(this).css({"border":"4px solid #d7425e","padding":"0"});
	},function(){
	  $(this).css({"border":"1px solid #E2E2E2","padding":"3px"});	  
	});
	//FUNCTIONS	
	onResize();	
	$(".tallest").matchHeight(false);
	$(".box-text").matchHeight(false);
	$(".box-wrapper-images .box-padding .box-shaddow .box-wrapper-image").matchHeight(true);	
});