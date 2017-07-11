
// JavaScript Document
$(function(){
	$("#name").val(getinCookie("userName"));
	$("#pass").val(getinCookie("userPass"));
	
	
	$("#load").click(function(){
		//1、
		$.post(
			"../php/login.php",
			{
				"userName":$("#name").val(),
				"userPass":$("#pass").val()
			},
			function(data){					
				if(data=="1"){//登录成功！
					//记录cookie
					setCookie("userName",$("#name").val(),14);
					setCookie("userPass",$("#pass").val(),14);
					localStorage.setItem("userName",$('#name').val());
					location.href="../index.html";
				}else{
					alert("登录失败，用户名或者密码不对！");
				}
			}
		);
	});


	var num1="";
	for(var i=0;i<4;i++){
		num1+=parseInt(Math.random()*10) 
	}
	$("#code").html(num1);

	$("#getcode").click(function(){
		var num="";
		for(var i=0;i<4;i++){
			num+=parseInt(Math.random()*10) 
		}
		$("#code").html(num);
	})

})
	
function setCookie(keyname,keyvalue,time){
	var date=new Date();
	date.setDate(date.getDate()+time);
	document.cookie=keyname+"="+keyvalue+";expires="+date.toGMTString();	
}
function getinCookie(key){
		var arr1=document.cookie.split("; ");
		for(var i in arr1){
			var arr2=arr1[i].split("=");
			if(arr2[0]==key){
					return arr2[1];
			}
		}	
}

	
	
	
	
	
	
	









































