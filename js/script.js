function goLeft(box,speed,distance){
	$('#'+box).animate({marginLeft: distance+'px'},speed);
}
function goBottom(box,speed,distance){
	$('#'+box).animate({marginTop: distance+'px'},speed);
}
function goRight(box,speed,distance){
	$('#'+box).animate({marginLeft: distance+'px'},speed);
}
function goTop(box,speed,distance){
	$('#'+box).animate({marginTop: distance+'px'},speed);
}
function slide(){
	goLeft("box1",2000,1000);
	goLeft("box2",2200,950);
	goLeft("box3",2400,900);
	goLeft("box4",2600,850);
	
	goBottom("box1",2600,600);
	goBottom("box2",2400,530);
	goBottom("box3",2200,460);
	goBottom("box4",2000,390);

	goRight("box1",2900,0);
	goRight("box2",2600,70);
	goRight("box3",2300,140);
	goRight("box4",2000,210);
	
	goTop("box1",2000,0);
	goTop("box2",2200,70);
	goTop("box3",2400,140);
	goTop("box4",2600,210);
}