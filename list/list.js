
function useType(type){
	var $lazyModules = $("#"+type+" div");
	$(window).on("scroll", function(){
	      var sTop = $(window).scrollTop();
	      var wH = $(window).height();
	      $lazyModules.each(function(index, item){
	           var $item = $(item);
	           if(!$item.hasClass(type) && ($item.offset().top) < wH + sTop){
	                $item.addClass(type);
	                //$item.addClass(type).show();
	           }
	           if(($item.offset().top) < sTop - 200 || ($item.offset().top) > wH + sTop){
	           		if($item.hasClass('load')){
	           			$item.removeClass(type);
	           		}else{
	           			$item.addClass('load');
	           		}
	           }
	      });
	      if($(".loaded").length == $lazyModules.length){
	           $(window).off("scroll");
	      }
	 }).trigger("scroll");
}


