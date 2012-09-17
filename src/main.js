var windowWidth = $(window).outerWidth();

var menuClick = function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).next().toggle();
	},
	navClick = function() {
		$('.menu-sub').hide();
		$('.menu').removeClass('active');
	},
	charsRemaining = function() {
	    var characters = 120;
	    var allLength = 0;
	    $(".counter").append(120);
	    $items = $('#pID, #pDate, #pDes');
	    $items.keyup(function() {
	    	$(this).closest('.tbox').children('.counter').show();
	    });
	    $items.keyup(function(){
	    	allLength = $('#pDes').val().length; 
	        if(allLength > characters){
	        	$(this).val($(this).val().substr(0, $(this).val().length-(allLength-characters)));
	        }
		    var remaining = characters - allLength;
		    if(remaining >= 0) {
		    	$(".counter").html('Characters left: ' + remaining);
		    } else {
		    	$('.counter').html('Characters left: ' + 0);
		    }
	    });
	};

$(document).ready(function() {
	$('nav > a.menu-link').on('click', navClick);
	$('nav .menu').on('click', menuClick);
	charsRemaining();
	$('.postIt').live('click', function(){
		window.plugins.sms.send(40404, '#txtimation ' + $('#pDes').val(), function() {
			var start = '#' + $('#pID').val() + 'start';
			var end = '#' + $('#pID').val() + 'end';
			var asd = window.localStorage.getItem(start);
			console.log(start);
			console.log(asd);
			if(asd === null) {
				window.localStorage.setItem(start, $('#pDate').val());
			} else {
				window.localStorage.setItem(end, $('#pDate').val());
				window.plugins.sms.send(40404, '#txtimate #txtfinished ' + window.localStorage.getItem(start) + '\n' + window.localStorage.getItem(end));
			}
			$('.tweetbox').each(function() {
				$(this).html('');
				$(this).val('');
			});
		}, function() {
			alert('error');
		})
	});
});