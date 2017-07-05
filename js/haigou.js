	$(function(){
		function GetRTime(){
			var EndTime= new Date('2017/08/20 00:00:00');
			var NowTime = new Date();
			var t =EndTime.getTime() - NowTime.getTime();
			var d=0;
			var h=0;
			var m=0;
			var s=0;
			if(t>=0){
				d=Math.floor(t/1000/60/60/24);
				h=Math.floor(t/1000/60/60%24);
				m=Math.floor(t/1000/60%60);
				s=Math.floor(t/1000%60);
			}
			$("#t_d").html(d + "天");
			$("#t_h").html(h + "时");
			$("#t_m").html(m + "分");
			$("#t_s").html(s + "秒");
		}
		setInterval(GetRTime,0);
	slide();
	
	$("#returnTop").click(function(){
		let scrollTop=document.documentElement.scrollTop+document.body.scrollTop;
		$("body").animate({scrollTop:"0px"}, 2000);

	})
			
		
		
})
	function slide(){	  
	var after=document.getElementsByClassName("after");
	var before=document.getElementsByClassName("before");
	var currordL=1;
	var currordM=2;
	var currordR=3;
	after[0].onclick=function(){
			currordL++;
			if(currordL>6){
					currordL=1;
				}
			var boxLeft=document.getElementById("boxLeft");
			boxLeft.src="images/0"+currordL+".jpg";
			
			currordM++;
			if(currordM>6){
					currordM=1;
				}
			var boxMiddle=document.getElementById("boxMiddle");
			boxMiddle.src="images/0"+currordM+".jpg";
			
			currordR++;
			if(currordR>6){
					currordR=1;
				}					
			var boxRight=document.getElementById("boxRight");
			boxRight.src="images/0"+currordR+".jpg";					
			
	}
	
	before[0].onclick=function(){
			currordL--;
			if(currordL<=0){
					currordL=6;
				}
			var boxLeft=document.getElementById("boxLeft");
			boxLeft.src="images/0"+currordL+".jpg";
			
			currordM--;
			if(currordM<=0){
					currordM=6;
				}
			var boxMiddle=document.getElementById("boxMiddle");
			boxMiddle.src="images/0"+currordM+".jpg";
			
			currordR--;
			if(currordR<=0){
					currordR=6;
				}					
			var boxRight=document.getElementById("boxRight");
			boxRight.src="images/0"+currordR+".jpg";					
			
	}

}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

