$(window).on("scroll",function(){150<$(window).scrollTop()?$(".header").addClass("is-scrolling"):$(".header").removeClass("is-scrolling")}),AOS.init({easing:"ease",duration:600,offset:300,disable:"mobile"}),jQuery(document).ready(function(e){e(".counter").counterUp({delay:10,time:2e3})}),$(".cards").slick({infinite:!0,speed:500,slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:1650,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:991,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:575,settings:{slidesToShow:1,slidesToScroll:1}}]}),$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(e){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var o=$(this.hash);(o=o.length?o:$("[name="+this.hash.slice(1)+"]")).length&&(e.preventDefault(),$("html, body").animate({scrollTop:o.offset().top},1e3,function(){var e=$(o);if(e.focus(),e.is(":focus"))return!1;e.attr("tabindex","-1"),e.focus()}))}});