
	var logo1 = $('#img1');
		$(function(){
					logo1.animate({ rt: 0 })
						logo1.animate({ rt: 110360 },{
						duration: 2000000,
						step: function(now){
							logo1.css('transform', 'rotate(' + now + 'deg)');
							}
					
					});
					
					setInterval(function(){
						logo1.animate({ rt: 0 })
								logo1.animate({ rt: 110360 },{
								duration: 2000000,
								step: function(now){
									logo1.css('transform', 'rotate(' + now + 'deg)');
									}
							
							});
					}, 2000500);
			});

