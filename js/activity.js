// JavaScript Document
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
		$(".t_d").html(d + "天");
		$(".t_h").html(h + "时");
		$(".t_m").html(m + "分");
		$(".t_s").html(s + "秒");
}
setInterval(GetRTime,0);
	$("#returnTop").click(function(){
		let scrollTop=document.documentElement.scrollTop+document.body.scrollTop;
		$("body").animate({scrollTop:"0px"}, 1000);

	})


})
		


	function changeList(data){
	var btn1=document.getElementsByClassName("btn");
		for(var i=0;i<btn1.length;i++){
			btn1[i].className="l btn"
		}
		btn1[data].className="l on btn"
	var btn2=document.getElementsByClassName("select");
		for(var i=0;i<btn2.length;i++){
			btn2[i].style.display="none"
		}
		btn2[data].style.display="block"
	}
































