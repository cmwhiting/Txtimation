<?php include('header.php') ?>
			<section id="content">
				<p id="tweets"></p>
				<script type="text/javascript">
					$(document).ready(function() {					  
					    $.getJSON("http://search.twitter.com/search.json?callback=?&q=txtimation",
							function(data){
								for (i=0; i<10; i++){
									var userID = '<span class="user">@' + data.results[i].from_user + ': </span>';
									var content = '<span class="content">' + data.results[i].text + '</span>';
									var date = data.results[i].created_at;
									var time = '<span class="time">' + date.substring(0, date.indexOf('2012')+4) + '</span>';
									$("#tweets").append('<div class="tweet"><p>' + userID + content + '</p><p>' + time + '</p></div>');
								}
						});
					});
				</script>
			</section>
<?php include('footer.php') ?>