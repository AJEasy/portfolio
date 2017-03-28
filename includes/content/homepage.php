	<script src="js/plane-windows.js"></script>
	<div class="engine">
		<img id="img1" src="images/plane-engine-blades.png" class="enginetop"/>
		<img id="img2" src="images/plane-engine-top.png" class="engineblades" alt="engine logo"/>
	</div>
	<div class="title hidden-xs">
		<img src="images/company-title.png" class="img img-responsive topspace"/>
	</div>
	<div id="mainwrapper">
	  <div class="container-fluid introsp hidden-xs">
		  <div class="col-lg-8 colorblk">
			<p class="lead"><i>When it comes to the web, the sky's the limit... <br/>So, let Flywing Designs pilot your website into the future!</i><br/><a class="colorblk" href="index.php?section=about"<?php if ($section == 'about'){echo 'class="current"';}?>>Learn More</a></p>
		  </div>	
	  </div>
	  <div class="container-fluid introsp-small visible-xs">
		  <div class="col-lg-8 col-lg-offset-1 colorblk">
			<img src="images/company-title.png" class="img img-responsive title topspacesmall"/>
			<p class="lead"><i>When it comes to the web, the sky's the limit... So, let Flywing Designs pilot your website into the future!</i><br/><a href="index.php?section=about"<?php if ($section == 'about'){echo 'class="current colorblk"';}?>>Learn More</a></p>
		  </div>	
	  </div>
	  
	  <div class="container-fluid standardsp">
		<img src="images/fancy-hr.png" class="img img-responsive center" alt="divider" />
	  </div>
	<div class="homepage">
		<div class="container-fluid">
			<div class="row topspacesmall">
				<h2>Take a trip through the portfolio of Flywing Designs</h2>
				
			</div>
			<div class="col-sm-12 hidden-xs">
				<div class="col-sm-3 topspacesmall bottomspacesmall tripbg">
					<img src="images/airplane-window-edit.png" class="img img-responsive f-left pos" alt="Professional Work"/>
					<a href="index.php?section=pro"<?php if ($section == 'pro'){echo 'class="current"';}?>>
					<div id="hpg">
						<img src="images/airplane-window-plane-wing.png" class="img img-responsive" alt="Professional Work" />
					</div>
					</a>
					<p class="pd-top-bottom-small center"><a href="index.php?section=pro"<?php if ($section == 'pro'){echo 'class="current"';}?>>Professional</a></p>
				</div>
				<div class="col-sm-3 topspacesmall bottomspacesmall tripbg2">
					<img src="images/airplane-window-edit.png" class="img img-responsive f-left pos" alt="Art Work/Design" />
					<a href="index.php?section=art"<?php if ($section == 'art'){echo 'class="current"';}?>>
						<div id="hpg2">
							<img src="images/airplane-window-desert.png" class="img img-responsive" alt="Art Work/Design" />
						</div>
					</a>
					<p class="pd-top-bottom-small center"><a href="index.php?section=art"<?php if ($section == 'art'){echo 'class="current"';}?>>Art</a></p>
				</div>
				<div class="col-sm-3 topspacesmall bottomspacesmall tripbg">
					<img src="images/airplane-window-edit.png" class="img img-responsive f-left pos" alt="Professional Print Work"/>
					<a href="index.php?section=print"<?php if ($section == 'print'){echo 'class="current"';}?>>
						<div id="hpg3">
							<img src="images/airplane-window-mountain.png" class="img img-responsive" alt="Professional Print Work" />
						</div>
					</a>
					<p class="pd-top-bottom-small center"><a href="index.php?section=print"<?php if ($section == 'print'){echo 'class="current"';}?>>Print</a></p>
				</div>
				<div class="col-sm-3 topspacesmall bottomspacesmall tripbg2">
					<img src="images/airplane-window-edit.png" class="img img-responsive f-left pos" alt="Demostrations" />
					<a href="index.php?section=cc"<?php if ($section == 'demo'){echo 'class="current"';}?>>
						<div id="hpg4">
							<img src="images/airplane-window-city.png" class="img img-responsive" alt="Demostrations" />
						</div>
					</a>
					<p class="pd-top-bottom-small center"><a href="index.php?section=cc"<?php if ($section == 'demo'){echo 'class="current"';}?>>Demo</a></p>
				</div>
			</div>
			<div class="col-xs-12 visible-xs">
				<div class="col-xs-6 topspacesmall bottomspacesmall">
					<a href="index.php?section=pro"<?php if ($section == 'pro'){echo 'class="current"';}?>>
						<img src="images/airplane-window-plane-wing-small.png" class="img img-responsive" alt="Professional Work" />
					</a>
					<p class="pd-top-bottom-small center"><a href="index.php?section=pro"<?php if ($section == 'pro'){echo 'class="current"';}?>>Professional</a></p>
				</div>
				<div class="col-xs-6 topspacesmall bottomspacesmall">
					<a href="index.php?section=art"<?php if ($section == 'art'){echo 'class="current"';}?>>
						<img src="images/airplane-window-desert-small.png" class="img img-responsive" alt="Art Work/Design"/>
					</a>
					<p class="pd-top-bottom-small center"><a href="index.php?section=art"<?php if ($section == 'art'){echo 'class="current"';}?>>Art</a></p>
				</div>
				<div class="col-xs-6 bottomspacesmall">
					<a href="index.php?section=print"<?php if ($section == 'print'){echo 'class="current"';}?>>
						<img src="images/airplane-window-mountain-small.png" class="img img-responsive" alt="Art Work"/>
					</a>
					<p class="pd-top-bottom-small center"><a href="index.php?section=print"<?php if ($section == 'print'){echo 'class="current"';}?>>Print</a></p>
				</div>
				<div class="col-xs-6 bottomspacesmall">
					<a href="index.php?section=cc"<?php if ($section == 'cc'){echo 'class="current"';}?>>
						<img src="images/airplane-window-city-small.png" class="img img-responsive" alt="Demostrations"/>
					</a>
					<p class="pd-top-bottom-small center"><a href="index.php?section=cc"<?php if ($section == 'cc'){echo 'class="current"';}?>>Demo</a></p>
				</div>
			</div>
		</div>
		<div id="bubbles">
			<div onclick="bubbles(0); clearInterval(intrvl);" class="color-iv"></div>
			<div onclick="bubbles(1); clearInterval(intrvl);"></div>
			<div onclick="bubbles(2); clearInterval(intrvl);"></div>
			<div onclick="bubbles(3); clearInterval(intrvl);"></div>
		</div>
	</div>	
		
			<div id="mission">
				<h1>Mission</h1>
				<p class="text18">Flywing Designs was founded for the purpose of providing quality custom websites at cost efficient rates. With the development of faster, smarter technologies along with the increase in user interaction, new (and existing) websites are expected to perform to a certain standard. We not only aim to got above and beyond our clientel's expectation, but we also aim to provide aestetically pleasing designs that invite users into a pleasant UI (user interface) experience. We aim to please everyone we work with and would love your business.</p>
				<p class="text18">At Flywing, you can not only get content rich, visually stunning websites, but you can also come to us if you need publication, branding, logo, or promotional work done as well. We have worked with large companies and small businesses. We have worked with companies that are local as well as distant. We can also provide side request (such as providing web or printed material in multiple languages). So, when it comes to meeting your needs, look no further and welcome to Flywing Designs....</p> 
			</div>
			<div class="container-fluid standardsp">
				<img src="images/fancy-hr.png" class="img img-responsive center" alt="divider" />
			</div>	
	</div>