	function _(x){return document.getElementById(x);}
			var pic, br=0, intrvl;
			var sitect = ['<img src="images/rm-gallery.png" class="img img-responsive imgwidth" alt="Professional Newell Work"/>',
						  '<img src="images/dymo-gallery.png" class="img img-responsive imgwidth" alt="Professional Newell Work"/>',
						  '<img src="images/cal-gallery.png" class="img img-responsive imgwidth" alt="Professional Newell Work"/>']
			var siteverbalct = ['<div class="col-md-12 standardsp pgc"><img src="images/rubbermaid.png" class="img img-responsive f-right h-width-img" alt="Rubbermaid Logo"><h2>Rubbermaid.com</h2><br/><p>Our duties include:<ul><li>Content management for consumer products for the entire website</li><li>Construction of prmotional banners, ads, and "Espot" displays for newe products and product lines targeted to our domestic market.</li><li>Coding custom page layout designs for new productline lauches in conjuction to nation wide campaigns.</li><li>Adjust layouts by writing responsive code that allows for a fluid design layouts to insure the best dynamic experience for ease of customer use.</li></ul><br/><a href="http://www.rubbermaid.com/en-US/brilliance" class="colorblk" target="blank">Click here to see more about Rubbermaid Brillance</a><br/><a href="http://www.rubbermaid.com/en-US/shop-products/food-storage/brilliance-food-storage/brilliance-food-storage-containers" class="colorblk" target="blank">Click here to see more about Rubbermaid Brillance Product listings</a></p></div>',
						  '<div class="col-md-12 standardsp pgc-1"><img src="images/dymo.png" class="img img-responsive f-right h-width-img" alt="Dymo Logo"><h2>Dymo.com</h2><br/><p>Our duties include:<br/><ul><li>Content management for consumer products for the entire website (world wide which include the countries: Belgium, France, Germany, Netherlands, Great Britian, Canada, and Australia)</li><li>Construction of prmotional banners, ads, and "Espot" displays for newe products and product lines targeted to our domestic market.</li><li>Coding custom page layout designs for new productline lauches in conjuction to nation wide campaigns.</li><li>Adjust layouts by writing responsive code that allows for a fluid design layouts to insure the best dynamic experience for ease of customer use.</li></ul><br/><a href="http://www.dymo.com/en-US" class="colorblk" target="blank">Click here to see more about DYMO</a><br/><a href="http://www.dymo.com/en-US/label-makers-and-label-printers/home-office-label-makers-and-label-printers/us-mobilelabeler" class="colorblk" target="blank">Click here to see more about DYMO MobileLabeler Product listings</a></p></div>',
						  '<div class="col-md-12 standardsp pgc-2"><img src="images/calphalon.png" class="img img-responsive f-right h-width-img" alt="Dymo Logo"><h2>Calphalon.com</h2><br/><p>Our duties include:<br/><ul><li>Content management for consumer products for the entire website</li><li>Construction of prmotional banners, ads, and "Espot" displays for newe products and product lines targeted to our domestic market.</li><li>Coding custom page layout designs for new productline lauches in conjuction to nation wide campaigns.</li><li>Adjust layouts by writing responsive code that allows for a fluid design layouts to insure the best dynamic experience for ease of customer use.</li></ul><br/><a href="http://www.calphalon.com/en-US" class="colorblk" target="blank">Click here to see more about Calphalon</a><br/><a href="http://www.calphalon.com/en-US/articles-and-tips" class="colorblk" target="blank">Click here to see more about DYMO MobileLabeler Product listings</a></p></div>']
			var sitectxs =['<img src="images/rubbermaid-small.jpg" class="img img-responsive imgwidth" alt="Professional Newell Work"/>',
						'<img src="images/dymo-small.jpg" class="img img-responsive imgwidth" alt="Professional Newell Work"/>',
						'<img src="images/calphalon-small.jpg" class="img img-responsive imgwidth" alt="Professional Newell Work"/>']
			var siteverbalctxs = ['<div class="col-xs-12 standardsp pgc colorblk"><img src="images/rubbermaid.png" class="img img-responsive center h-width-img" alt="Rubbermaid Logo"><h2>Rubbermaid.com</h2><br/><p>Our duties include:<ul class="left-text"><li>Content management for consumer products for the entire website</li><li>Construction of prmotional banners, ads, and "Espot" displays for newe products and product lines targeted to our domestic market.</li><li>Coding custom page layout designs for new productline lauches in conjuction to nation wide campaigns.</li><li>Adjust layouts by writing responsive code that allows for a fluid design layouts to insure the best dynamic experience for ease of customer use.</li></ul><br/><a href="http://www.rubbermaid.com/en-US/brilliance" class="colorblk" target="blank">Click here to see more about Rubbermaid Brillance</a><br/><a href="http://www.rubbermaid.com/en-US/shop-products/food-storage/brilliance-food-storage/brilliance-food-storage-containers" class="colorblk" target="blank">Click here to see more about Rubbermaid Brillance Product listings</a></p></div>',
								'<div class="col-xs-12 standardsp pgc-1 colorblk"><img src="images/dymo.png" class="img img-responsive center h-width-img" alt="Dymo Logo"><h2>Dymo.com</h2><br/><p>Our duties include:<br/><ul class="left-text"><li>Content management for consumer products for the entire website (world wide which include the countries: Belgium, France, Germany, Netherlands, Great Britian, Canada, and Australia)</li><li>Construction of prmotional banners, ads, and "Espot" displays for newe products and product lines targeted to our domestic market.</li><li>Coding custom page layout designs for new productline lauches in conjuction to nation wide campaigns.</li><li>Adjust layouts by writing responsive code that allows for a fluid design layouts to insure the best dynamic experience for ease of customer use.</li></ul><br/><a href="http://www.dymo.com/en-US" class="colorblk" target="blank">Click here to see more about DYMO</a><br/><a href="http://www.dymo.com/en-US/label-makers-and-label-printers/home-office-label-makers-and-label-printers/us-mobilelabeler" class="colorblk" target="blank">Click here to see more about DYMO MobileLabeler Product listings</a></p></div>',
								'<div class="col-xs-12 standardsp pgc-2 colorblk"><img src="images/calphalon.png" class="img img-responsive center h-width-img" alt="Dymo Logo"><h2>Calphalon.com</h2><br/><p>Our duties include:<br/><ul class="left-text"><li>Content management for consumer products for the entire website</li><li>Construction of prmotional banners, ads, and "Espot" displays for newe products and product lines targeted to our domestic market.</li><li>Coding custom page layout designs for new productline lauches in conjuction to nation wide campaigns.</li><li>Adjust layouts by writing responsive code that allows for a fluid design layouts to insure the best dynamic experience for ease of customer use.</li></ul><br/><a href="http://www.calphalon.com/en-US" class="colorblk" target="blank">Click here to see more about Calphalon</a><br/><a href="http://www.calphalon.com/en-US/articles-and-tips" class="colorblk" target="blank">Click here to see more about DYMO MobileLabeler Product listings</a></p></div>']				
						  			  
	function logos(br){
				_("pro-gallery").style.transition = "opacity 2s ease-out 0s";
				_("pro-gallery").style.opacity = 0;
				_("pro-gallery-content").style.transition = "opacity 2s ease-out 0s";
				_("pro-gallery-content").style.opacity = 0;
				_("pro-gallery-xs").style.transition = "opacity 2s ease-out 0s";
				_("pro-gallery-xs").style.opacity = 0;
				_("pro-gallery-content-xs").style.transition = "opacity 2s ease-out 0s";
				_("pro-gallery-content-xs").style.opacity = 0;
				
				for(var i=0; i < pic.length; i++){
					pic[br].style.background = "rgba(0,0,0,.1)";
				}
				pic[br].style.background = "#999";
				setTimeout(function(){
					_("pro-gallery").innerHTML = sitect[br];
					_("pro-gallery").style.transition = "opacity 2s ease-in 0s";
					_("pro-gallery").style.opacity = 1;
					_("pro-gallery-content").innerHTML = siteverbalct[br];
					_("pro-gallery-content").style.transition = "opacity 2s ease-in 0s";
					_("pro-gallery-content").style.opacity = 1;
					_("pro-gallery-xs").innerHTML = sitectxs[br];
					_("pro-gallery-xs").style.transition = "opacity 2s ease-in 0s";
					_("pro-gallery-xs").style.opacity = 1;
					_("pro-gallery-content-xs").innerHTML = siteverbalctxs[br];
					_("pro-gallery-content-xs").style.transition = "opacity 2s ease-in 0s";
					_("pro-gallery-content-xs").style.opacity = 1;
				}, 3500);
			}
	function logoSlide(){
				br++; 
				if(br == pic.length){
					br = 0; 
			}
			
			logos(br);
		}
		window.addEventListener("load", function(){
			
			pic = _("logos").children;
			intrvllogo = setInterval(logoSlide, 9500);
		});			