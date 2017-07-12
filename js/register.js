// JavaScript Document
$(function(){

	var isCheck=[1,1,1,1,1,1];
	$("#phone").blur(function(){
		let result1=(/^1[34578]\d{9}$/).test($("#phone").val());
		if(!result1){
			$(".check").eq(0).html("请输入合法的手机号码");
			isCheck[0]=0;
			$(this).css("border","1px solid #c33");
		}else{
			$(this).css("border","1px solid #dadada");
			$(".check").eq(0).html("");
			$.ajax({
					url:"../php/regCheck.php",
					async:true,
					data:"userPhone="+this.value,
					type:"get",
					success:function(data){
						if(data=="1"){
							$(".check").eq(0).html("该手机号已经被注册了");
							isCheck[0]=0;
							$(this).css("border","1px solid #c33");							
						}else{
							$(".check").eq(0).html("<img src='../images/right.png' style='width:15px;height:15px;display:inline-block;vertical-align:middle;margin-left:20px;'/>");
							$(this).css("border","1px solid #dadada");
							isCheck[0]=2;
						}
					}		
			});	
		}
	})
	
	
	$("#testcode").blur(function(){
		let result1=$("#testcode").val();
		let result2=$("#code").html();
		if(result2!=result1){
			$(".check").eq(1).html("请输入正确的验证码");
			isCheck[1]=0;
			$(this).css("border","1px solid #c33");
		}else{
			$(".check").eq(1).html("<img src='../images/right.png' style='width:15px;height:15px;display:inline-block;vertical-align:middle;margin-left:20px;'/>");
			$(this).css("border","1px solid #dadada");
			isCheck[1]=2;
		}
	})
	
	
	$("#email").blur(function(){
		let result4=(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/).test($("#email").val());
		if(!result4){
			$(".check").eq(2).html("请输入合法邮箱");
			isCheck[2]=0;
			$(this).css("border","1px solid #c33");
		}else{
			$(this).css("border","1px solid #dadada");
			$(".check").eq(2).html("");
			$.ajax({
				url:"../php/regCheck.php",
				async:true,
				data:"userEmail="+this.value,
				type:"get",
				success:function(data){
					if(data=="1"){
						$(".check").eq(2).html("该邮箱已经被注册了");
						isCheck[2]=0;
						$(this).css("border","1px solid #c33");
					}else{
						$(".check").eq(2).html("<img src='../images/right.png' style='width:15px;height:15px;display:inline-block;vertical-align:middle;margin-left:20px;'/>");
						isCheck[2]=2;
						$(this).css("border","1px solid #dadada");
					}
				}		
			});	
		}
	})
	
	
	$("#userpass1").blur(function(){
		let result5=(/^[a-z0-9_-]{6,18}$/).test($("#userpass1").val());
		if(!result5){
			$(".check").eq(3).html("请输入6-18位字母、数字或下划线");
			isCheck[3]=0;
			$(this).css("border","1px solid #c33");
		}else{
			$(".check").eq(3).html("<img src='../images/right.png' style='width:15px;height:15px;display:inline-block;vertical-align:middle;margin-left:20px;'/>");
			isCheck[3]=2;
			$(this).css("border","1px solid #dadada");
		}
	})
	
	
	$("#userpass2").blur(function(){
		let result5=$("#userpass1").val();
		let result6=$("#userpass2").val();
		if(result6!=result5){
			$(".check").eq(4).html("请保持两次输入的密码一致");
			isCheck[4]=0;
			$(this).css("border","1px solid #c33");
		}else{
			$(".check").eq(4).html("<img src='../images/right.png' style='width:15px;height:15px;display:inline-block;vertical-align:middle;margin-left:20px;'/>");
			isCheck[4]=2;
			$(this).css("border","1px solid #dadada");

		}
	})
	
	
	$("#username").blur(function(){
		let result7=(/^\w{3,16}$/).test($("#username").val());
		if(!result7){
			$(".check").eq(5).html("请输入3-16位字母数字或下划线");
			isCheck[5]=0;
			$(this).css("border","1px solid #c33");
		}else{
			$(this).css("border","1px solid #dadada");
			$(".check").eq(5).html("");
			$.ajax({
				url:"../php/regCheck.php",
				async:true,
				data:"userName="+this.value,
				type:"get",
				success:function(data){
					if(data=="1"){
						$(".check").eq(5).html("该用户名已经被注册了");
						isCheck[5]=0;
						$(this).css("border","1px solid #c33");

					}else{
						$(".check").eq(5).html("<img src='../images/right.png' style='width:15px;height:15px;display:inline-block;vertical-align:middle;margin-left:20px;'/>");
						isCheck[5]=2;
						$(this).css("border","1px solid #dadada");

					}
					
				}		
			});	
		}
	})
	
	$("form").submit(function(){
		for(let i=0;i<isCheck.length;i++){
			if(isCheck[i]!=2){
				return false;
			}
		}
	})
	
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








































