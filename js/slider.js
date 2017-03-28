		function _(x){return document.getElementById(x);}
		var sba, sbi=0, intrval;
		var sbca = [
			'<div class="row"><div class="col-md-6 col-sm-offset-3"><img class=" img img-responsive" src="images/pics/d1.jpg" alt="gallery image"/></div></div>',
			'<div class="row"><div class="col-md-6 col-sm-offset-3"><img class=" img img-responsive" src="images/pics/d2.jpg" alt="gallery image"/></div></div>',
			'<div class="row"><div class="col-md-6 col-sm-offset-3"><img class=" img img-responsive" src="images/pics/d3.jpg" alt="gallery image"/></div></div>',
			'<div class="row"><div class="col-md-6 col-sm-offset-3"><img class=" img img-responsive" src="images/pics/d4.jpg" alt="gallery image"/></div></div>',
			'<div class="row"><div class="col-md-6 col-sm-offset-3"><img class=" img img-responsive" src="images/pics/d5.jpg" alt="gallery image"/></div></div>',
			'<div class="row"><div class="col-md-6 col-sm-offset-3"><img class=" img img-responsive" src="images/pics/d6.jpg" alt="gallery image"/></div></div>',
			'<div class="row"><div class="col-md-6 col-sm-offset-3"><img class=" img img-responsive" src="images/pics/d7.jpg" alt="gallery image"/></div></div>',
			'<div class="row"><div class="col-md-6 col-sm-offset-3"><img class=" img img-responsive" src="images/pics/d8.jpg" alt="gallery image"/></div></div>',
			'<div class="row"><div class="col-md-6 col-sm-offset-3"><img class=" img img-responsive" src="images/pics/d9.jpg" alt="gallery image"/></div></div>',
			'<div class="row"><div class="col-md-6 col-sm-offset-3"><img class=" img img-responsive" src="images/pics/d10.jpg" alt="gallery image"/></div></div>'
		];
		function slidebubbles(sbi){
			_("slidecontent").style.opacity = 0;
			
			for(var i=0; i < sba.length; i++){
				sba[i].style.background = "rgba(0,0,0,.1)";
			}
			sba[sbi].style.background = "#999";
			setTimeout(function(){
				_("slidecontent").innerHTML = sbca[sbi];
				_("slidecontent").style.transition = "opacity 2s ease-in-out 0s";
				_("slidecontent").style.opacity = 1;
			}, 1500);
		}
		function secondSlide(){
			sbi++; 
			if(sbi == sba.length){
				sbi = 0; 
			}
			
			slidebubbles(sbi);
		}
		window.addEventListener("load", function(){
			
			sba = _("slidebubbles").children;
			intrval = setInterval(secondSlide, 8500);
		});