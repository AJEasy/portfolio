		function _(x){return document.getElementById(x);}
		var ba, bi=0, intrvl;
		var bca = ['<img src="images/airplane-window-mountain.png" class="img img-responsive" alt="Professional Work" />',
		'<img src="images/airplane-window-desert.png" class="img img-responsive" alt="Professional Work" />',
		'<img src="images/airplane-window-city.png" class="img img-responsive" alt="Professional Work" />',
		'<img src="images/airplane-window-plane-wing.png" class="img img-responsive" alt="Professional Work" />'];
		
		var bcb = ['<img src="images/airplane-window-plane-wing.png" class="img img-responsive" alt="Professional Work" />',
		'<img src="images/airplane-window-city.png" class="img img-responsive" alt="Professional Work" />',
		'<img src="images/airplane-window-desert.png" class="img img-responsive" alt="Professional Work" />',
		'<img src="images/airplane-window-mountain.png" class="img img-responsive" alt="Professional Work" />'];
		
		var bcc = ['<img src="images/airplane-window-desert.png" class="img img-responsive" alt="Professional Work" />',
		'<img src="images/airplane-window-mountain.png" class="img img-responsive" alt="Professional Work" />',
		'<img src="images/airplane-window-plane-wing.png" class="img img-responsive" alt="Professional Work" />',
		'<img src="images/airplane-window-city.png" class="img img-responsive" alt="Professional Work" />'];
		
		var bcd = ['<img src="images/airplane-window-city.png" class="img img-responsive" alt="Professional Work" />',
		'<img src="images/airplane-window-plane-wing.png" class="img img-responsive" alt="Professional Work" />',
		'<img src="images/airplane-window-mountain.png" class="img img-responsive" alt="Professional Work" />',
		'<img src="images/airplane-window-desert.png" class="img img-responsive" alt="Professional Work" />'];
		
		function bubbles(bi){
			_("hpg").style.transition = "opacity 2s ease-out 0s";
			_("hpg").style.opacity = 0;
			
			for(var i=0; i < ba.length; i++){
				ba[i].style.background = "rgba(0,0,0,.1)";
			}
			ba[bi].style.background = "#999";
			setTimeout(function(){
				_("hpg").innerHTML = bca[bi];
				_("hpg").style.transition = "opacity 3s ease-in 0s";
				_("hpg").style.opacity = 1;
			}, 3700);
		}
		function bubbles2(bi){
			_("hpg2").style.transition = "opacity 2s ease-out 0s";
			_("hpg2").style.opacity = 0;
			
			for(var i=0; i < ba.length; i++){
				ba[i].style.background = "rgba(0,0,0,.1)";
			}
			ba[bi].style.background = "#999";
			setTimeout(function(){
				_("hpg2").innerHTML = bcb[bi];
				_("hpg2").style.transition = "opacity 3s ease-in 0s";
				_("hpg2").style.opacity = 1;
			}, 3700);
		}
		function bubbles3(bi){
			_("hpg3").style.transition = "opacity 2s ease-out 0s";
			_("hpg3").style.opacity = 0;
			
			for(var i=0; i < ba.length; i++){
				ba[i].style.background = "rgba(0,0,0,.1)";
			}
			ba[bi].style.background = "#999";
			setTimeout(function(){
				_("hpg3").innerHTML = bcc[bi];
				_("hpg3").style.transition = "opacity 3s ease-in 0s";
				_("hpg3").style.opacity = 1;
			}, 3700);
		}
		function bubbles4(bi){
			_("hpg4").style.transition = "opacity 2s ease-out 0s";
			_("hpg4").style.opacity = 0;
			
			for(var i=0; i < ba.length; i++){
				ba[i].style.background = "rgba(0,0,0,.1)";
			}
			ba[bi].style.background = "#999";
			setTimeout(function(){
				_("hpg4").innerHTML = bcd[bi];
				_("hpg4").style.transition = "opacity 3s ease-in 0s";
				_("hpg4").style.opacity = 1;
			}, 3700);
		}
		function bubbleSlide(){
			bi++; 
			if(bi == ba.length){
				bi = 0; 
			}
			
			bubbles(bi);
			bubbles2(bi);
			bubbles3(bi);
			bubbles4(bi);
		}
		window.addEventListener("load", function(){
			
			ba = _("bubbles").children;
			intrvl = setInterval(bubbleSlide, 14000);
		});
