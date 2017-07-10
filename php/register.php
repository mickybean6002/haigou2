<?php
	//字符编码使用utf-8；
	header("Content-type: text/html; charset=utf-8");

	//1、接收客户端的输入的数据
	$userPhone = $_POST['phone'];//$_POST:针对post请求方法。
	$userEmail = $_POST['email'];
	$userPass = $_POST['userpass1'];
	$userName = $_POST['username'];
	//2、保存到数据库
	//1)、连接数据库
	$con = mysql_connect("localhost","root","qianfeng");
	if(!$con){
		//die("连接失败".mysql.error());
		echo "注册失败:服务器连接有问题".mysql.error();
	}else{
		//2)、执行SQL语句
		mysql_select_db("haigou",$con);
		$str="insert into userTable(userName,userPass,userPhone,userEmail,testCode) values('".$userName."','".$userPass."','".$userPhone."','".$userEmail."')";
		$count = mysql_query($str,$con); 
		
		//3)、关闭数据库
		mysql_close($con);
		
		//3、响应
		if($count==1){
			header("Refresh:0;url=../index.html");
			
		}else{
			echo "注册失败";
		}
	}	
?>