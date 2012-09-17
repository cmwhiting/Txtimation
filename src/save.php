<?php include('header.php') ?>
			<section id="content">
				<div class="content-wrapper">
					<div id="twbox">
					</div>
				</div>
				
				<script type="text/javascript">
					wWidth = $(window).outerWidth()-60;
				  	twttr.anywhere(function (T) {
				 
				    	T("#twbox").tweetBox({
					    	width: wWidth,
					    	height: 450,
					     	defaultContent: "#txtimation ",
					      	label: "<link href='http://cmwhiting.com/intern/txtimate.css' rel='stylesheet' type='text/css' />"
					    });
				 
				  	});
				 
				 	$('<button type="button" class="postIt btn btn-m btn-hover">Post</button>').appendTo('iframe > html');
				</script>
			</section>
<?php include('footer.php') ?>