// JavaScript Document
$(function(){
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
					//saveCookie("userName",$("#name").val(),7);
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
	
	
	
	
	
	
	
	









































