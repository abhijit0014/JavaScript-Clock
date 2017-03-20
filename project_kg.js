/*
	Name : Space Clock
	Date : 3/23/2015
	Devloped By : ABHIJIT KUNDU (CST) & SUROJIT PALMAL (ECE)
	KG ENGRINEERING INSTITUTE
	Bishnupur  -  Bankura
*/
$(document).ready(function(){
	var c = $("#myCanvas")[0];
	var ctx = c.getContext("2d");
	setInterval(function(){
	ctx.clearRect(0,0,600,600);
	
		var dt = new Date();
		var hours = dt.getHours();
		var minutes = dt.getMinutes();
		var seconds = dt.getSeconds();
		var mili = dt.getMilliseconds()
		
		var secondoffset = seconds*6+mili*.006;
		var minutesoffset = minutes*6 +(secondoffset/60);
		var houroffset = hours*30 +(minutesoffset/12);
		
		var sAng=secondoffset+180;
		var mAng=minutesoffset+180;
		var hAng=houroffset+180;
		
		$('.seconds').css({'transform':'rotate('+sAng+'deg)'});
		$('.minits').css({'transform':'rotate('+mAng+'deg)'});
		$('.hours').css({'transform':'rotate('+hAng+'deg)'});
		
		var h=hours>12?hours-12:hours;
		$('#time .hour').html(h);
		$('#time .minit').html(minutes);
		$('#time .second').html(seconds);
		
		var sec = mili/1000+seconds;
		h = h*.166666+(minutes*.033333)/12;
		draw(h,287,30,'white');
		draw(minutes*.033333,253,25,'black');
		draw(sec/60*2,227,15,'red');
		
		function draw(a,radius,width,color){
			ctx.beginPath();
			ctx.arc(300,300,radius,0*Math.PI,a*Math.PI,false);
			ctx.lineWidth = width;
			ctx.strokeStyle = color;
			ctx.stroke();
		}
		if (hours==10&&minutes==25)
		document.getElementById('start_song').play();
		
		if (hours==16&&minutes==0)
		document.getElementById('end_song').play();
	},1);
	
});