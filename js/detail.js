window.onload=function(){
	bigger();
}
function $(id){
	return document.getElementById(id);
}
function bigger(){
	var mirrorDivWidth=150;
	var bigBoxWidth=400;
	var mirrorDivHeight=150;
	var bigBoxHeight=400;
	var bigbox=$("bigbox");
	
	$("mirror").onmousemove=function(event){
		var eve=event||window.event;
		var gun=document.documentElement.scrollTop+document.body.scrollTop;
		//放大镜距离父盒子的宽高
		var left=eve.clientX-bigbox.offsetLeft-mirrorDivWidth/2;
		var top=eve.clientY+gun-bigbox.offsetTop-mirrorDivHeight/2;
		//放大镜的活动范围
		var rangeWidth=bigBoxWidth-mirrorDivWidth;
		$("showbox").style.display="block";
		if(left>=rangeWidth){
			left=rangeWidth;
		}
		if(left<0){
			left=0;
		}
		var rangeHeight=bigBoxHeight-mirrorDivHeight;
		if(top>=rangeHeight){
			top=rangeHeight;
		}
		if(top<0){
			top=0;
		}
		//放大镜的定位
		this.style.left=left+"px";
		this.style.top=top+"px";
		//展示盒子的移动
		$("showimg").style.left=left*(-1.5)+"px";
		$("showimg").style.top=top*(-1.5)+"px";
	}
	$("mirror").onmouseout=function(){
		$("showbox").style.display="none";
	}
}
function change(i){
		$("bigbox").style.backgroundImage=`url(../images/00${i}.jpg)`
		$("showimg").style.backgroundImage=`url(../images/00${i}.jpg)`
	}
function changeList(data){
	var btn1=document.getElementsByClassName("btn");
		for(var i=0;i<btn1.length;i++){
			btn1[i].className="l btn"
		}
		btn1[data].className="l on btn"
	var btn2=document.getElementsByClassName("con");
		for(var i=0;i<btn2.length;i++){
			btn2[i].style.display="none"
		}
		btn2[data].style.display="block"
}

























