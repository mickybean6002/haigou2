$(function(){
	var strStoreDate = window.localStorage? localStorage.getItem("userName"): Cookie.read("userName");
	$("#Login").html("<a href='#'>"+strStoreDate+"</a>");
	$("#Register").html("");
	
var strStoreDate1= window.localStorage? localStorage.getItem("goodsId"): Cookie.read("goodsId");

	$.ajax({
				url:"../php/getGoodsInfo.php",
				async:true,
				data:"goodsId="+strStoreDate1,
				type:"get",
				dataType:"json",
				success:function(data){
					let obj=data;
					let goodsImg=obj.goodsImg;
					let goodsName=obj.goodsName;
					let goodsPrice=obj.goodsPrice;
					let goodsType=obj.goodsType;
					let str1="<h3>"+goodsName+"</h3><span>"+goodsType+"</span>"
					$("#goodsname").append(str1);
					let str2="<p class='p1'>价格:&nbsp;&nbsp; <span>"+goodsPrice+"</span></p><p class='p2'>领券:&nbsp;&nbsp; <span>99-5</span><span>199-10</span><span>399-20</span></p>";
					$("#goodspirce").append(str2);
					let str3="<div id='bigbox' style='background-image:url("+goodsImg+");background-size:400px 400px;'><div id='mirror'></div></div>"
					$("#picturebigger").prepend(str3);
					let str4="<div id='showbox'><div id='showimg' style='background-image:url("+goodsImg+");background-size:800px 800px;'></div></div>"
					$("#picturebigger").append(str4);
					bigger();
				}		
			});	

	var counts=$("#counts").val();
	$id("addgoods").onclick=function(){
			$.ajax({
				url:"../php/addShoppingCart.php",
				async:true,
				data:"goodsId="+strStoreDate1+"&vipName="+strStoreDate+"&goodsCount="+counts,
				type:"get",
				dataType:"json",
				success:function(data){
					if(data==1){
						alert("添加成功");
					}else{
						alert("添加失败");
					}
				}		
			});	

		
	}
	
	
})	
function $id(id){
	return document.getElementById(id);
}
function bigger(){
	var mirrorDivWidth=150;
	var bigBoxWidth=400;
	var mirrorDivHeight=150;
	var bigBoxHeight=400;
	var bigbox=$id("bigbox");
	
	$id("mirror").onmousemove=function(event){
		var eve=event||window.event;
		var gun=document.documentElement.scrollTop+document.body.scrollTop;
		//放大镜距离父盒子的宽高
		var left=eve.clientX-bigbox.offsetLeft-mirrorDivWidth/2;
		var top=eve.clientY+gun-bigbox.offsetTop-mirrorDivHeight/2;
		//放大镜的活动范围
		var rangeWidth=bigBoxWidth-mirrorDivWidth;
		$id("showbox").style.display="block";
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
		$id("showimg").style.left=left*(-1.5)+"px";
		$id("showimg").style.top=top*(-1.5)+"px";
	}
		$id("mirror").onmouseout=function(){
		$id("showbox").style.display="none";
	}
}
function change(i){
		$id("bigbox").style.backgroundImage=`url(../images/00${i}.jpg)`
		$id("showimg").style.backgroundImage=`url(../images/00${i}.jpg)`
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

























