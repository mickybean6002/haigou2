// JavaScript Document
$(function(){
	$("#name").blur(function(){
		let result1=(/^1[34578]\d{9}$/).test($("#name").value);
		let result2=(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/).test($("#name").value);
		if(!(result1||result2)){
			alert("您输入的格式有误！")
		}
		
	})
	
	
	
	
	
	
	
	
	
	
})








































