// JavaScript Document
window.onload=function(){
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
			document.getElementsByClassName("t_d")[0].innerHTML = d + "天";
			document.getElementsByClassName("t_h")[0].innerHTML = h + "时";
			document.getElementsByClassName("t_m")[0].innerHTML = m + "分";
			document.getElementsByClassName("t_s")[0].innerHTML = s + "秒";
			document.getElementsByClassName("t_d")[1].innerHTML = d + "天";
			document.getElementsByClassName("t_h")[1].innerHTML = h + "时";
			document.getElementsByClassName("t_m")[1].innerHTML = m + "分";
			document.getElementsByClassName("t_s")[1].innerHTML = s + "秒";
		}
		setInterval(GetRTime,0);
		

}
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
































