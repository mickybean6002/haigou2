<?php
	//字符编码使用utf-8；
	header("Content-type: text/html; charset=utf-8");

	//1、接收客户端的输入的数据
	$userPhone = $_GET['phone'];//$_POST:针对post请求方法。
	$userEmail = $_GET['email'];
	$userPass = $_GET['userpass1'];
	$userName = $_GET['username'];
	$testCode = $_GET['testcode'];
	//2、保存到数据库
	//1)、连接数据库
	$con = mysql_connect("localhost","root","qianfeng");
	if(!$con){
		//die("连接失败".mysql.error());
		echo "注册失败:服务器连接有问题".mysql.error();
	}else{
		//2)、执行SQL语句
		mysql_select_db("haigou",$con);
		$str="select * from userTable where userName='".$userName."'";
		$result = mysql_query($str,$con); //返回的是表格
		$rowCount = mysql_num_rows($result);
	
		//3)、关闭数据库
		mysql_close($con);
		
		//3、响应根据查询结果给前端响应对应的（1：用户名已经被使用，0：用户名没有注册）
		echo $rowCount;
	}	
?>