 $(window).keydown(onKeyUp);


function onKeyUp(e) {
	//down
	if(e.which === 40) {
		// $('#text').prepend($('div'));
		down();
	}
		//up
	if(e.which === 38) {
		// $('#text').prepend($('div'));
		up();
	}
		//right
	if(e.which === 39) {
		// $('#text').prepend($('div'));
		right();
	}
		//left
	if(e.which === 37) {
		// $('#text').prepend($('div'));
		left();
	}
	// console.log(e.which);
	// console.log($(window).width());
}

function left(){
	var animateMe = document.getElementById('right');
	// console.log("animateMe: " + animateMe);
	animateMe.src = "images/sharkcat.jpeg";

	var leftMargin = parseInt(animateMe.style.marginLeft);
	if(!leftMargin) {
		leftMargin = 0;
	}
	leftMargin -= 10;
	animateMe.style.marginLeft = leftMargin+'px';
	console.log(animateMe);

}

function right(){
	var animateMe = document.getElementById('right');
	animateMe.src = "images/sharkcatRight.jpeg";

	var leftMargin = parseInt(animateMe.style.marginLeft);
	if(Boolean(leftMargin) === false) {
		leftMargin = 0;
	}
	leftMargin += 10;
	animateMe.style.marginLeft = leftMargin+'px';
	
}

function up(){
	var animateMe = document.getElementById('right');
	animateMe.src = "http://flipapicture.com/uploaded_images/222424_sharkcatRight.jpeg";
	var topMargin = parseInt(animateMe.style.marginTop);
	if(Boolean(topMargin) === false) {
		topMargin = 0;
	}
	topMargin -= 10;
	animateMe.style.marginTop = topMargin+'px';
	
}

function down(){
	var animateMe = document.getElementById('right');
	//works
	animateMe.src = "http://www170.lunapic.com/editor/working/142195120686327?6009526011";
	var bottMargin = parseInt(animateMe.style.marginTop);
	if(Boolean(bottMargin) === false) {
		bottMargin = 0;
	}
	bottMargin += 10;
	animateMe.style.marginTop = bottMargin+'px';
}