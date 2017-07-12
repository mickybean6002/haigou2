	$(function(){
	var strStoreDate = window.localStorage? localStorage.getItem("userName"): Cookie.read("userName");
	$("#Login").css("display","none");
	$("#Register").css("display","none");
	$("#user").css("display","block");
	$("#user").html("<a href='#'>"+strStoreDate+"</a>");
	
	/*注销
	$("#delete").click(function(){
		var storage=window.localStorage;
            storage.a=1;
            storage.setItem("name",3);
            storage.clear();
        	location.href="index.html";
		if(strStoreDate==null){
			$("#Login").html("<a href='html/login.html'>登录</a>");
			$("#Register").html("<a href='html/register.html'>注册</a>");
		}
	})*/
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
			$("#t_d").html(d + "天");
			$("#t_h").html(h + "时");
			$("#t_m").html(m + "分");
			$("#t_s").html(s + "秒");
		}
		setInterval(GetRTime,0);
	slide();
	
	$("#returnTop").click(function(){
		let scrollTop=document.documentElement.scrollTop+document.body.scrollTop;
		$("body").animate({scrollTop:"0px"}, 2000);

	})
	
	
       
       var btn = document.getElementById("btn").children;//获取底部圆圈
      
       /* 右按钮*/
      var num = 0;
   
       ff("right").onclick = function(){
       	     num++   
       	     if(num>= ff("wrap").children.length){
       	     	num=0;
       	     }
       	     console.log(num)
       	   for (var j =0;j<  ff("wrap").children.length;j++) {
       	   	 
       	   	 	 ff("wrap").children[j].style.opacity =0;
     		}
       	     ff("wrap").children[num].style.opacity =1;
       	     /*圆按钮*/
           for (var j =0;j<  ff("wrap").children.length;j++) {
     			btn[j].className="ccc";
     			
     		}
     		btn[num].className="black";
       }
       
         /* 左按钮*/
       ff("left").onclick = function(){
       	   num--;
       	  
       	  if(num<0){
       	     	num=ff("wrap").children.length-1;
       	     }
       	  console.log(num)
       	   for (var j =0;j<  ff("wrap").children.length;j++) {
       	   	 	
       	   	 	 ff("wrap").children[j].style.opacity =0;
     		}
       	     ff("wrap").children[num].style.opacity =1;
       	        /*元按钮*/
           for (var j =0;j<  ff("wrap").children.length;j++) {
     			btn[j].className="ccc";
     			
     		}
     		btn[num].className="black";
       }
       
      /* 底部小圆圈鼠标移入*/
     
     for (var i in btn) {
     	btn[i].className="ccc";
     	btn[0].className="black";
     	btn[i].index = i;
     	btn[i].onmouseover = function(){
     		for (var j =0;j<  ff("wrap").children.length;j++) {
     			btn[j].className="ccc";
     			 ff("wrap").children[j].style.opacity =0;
     		}
     		btn[this.index].className="black";
     		console.log(this.index)
     		  ff("wrap").children[this.index].style.opacity =1; 
     	}
     }
    /*让轮播图自己走，设置定时器*/
    var time = null;  
   time = setInterval(ff("right").onclick,3000)
    
    /* 左右按钮的显示与隐藏*/
       ff("box").onmouseover= function(){
       	  ff("left").style.display = "block";
       	  ff("right").style.display = "block";
       	  clearInterval(time)
       	};
       ff("box").onmouseout = function(){
       	  ff("left").style.display = "none";
       	  ff("right").style.display = "none";
       	  clearInterval(time)
        time = setInterval(ff("right").onclick,3000);
         console.log("鼠标移出，打开定时器,自动播放")
       };

			
		
		
})
	function ff(id){
       	return document.getElementById(id);
       };

	function slide(){	  
	var after=document.getElementsByClassName("after");
	var before=document.getElementsByClassName("before");
	var currordL=1;
	var currordM=2;
	var currordR=3;
	after[0].onclick=function(){
			currordL++;
			if(currordL>6){
					currordL=1;
				}
			var boxLeft=document.getElementById("boxLeft");
			boxLeft.src="images/0"+currordL+".jpg";
			
			currordM++;
			if(currordM>6){
					currordM=1;
				}
			var boxMiddle=document.getElementById("boxMiddle");
			boxMiddle.src="images/0"+currordM+".jpg";
			
			currordR++;
			if(currordR>6){
					currordR=1;
				}					
			var boxRight=document.getElementById("boxRight");
			boxRight.src="images/0"+currordR+".jpg";					
			
	}
	
	before[0].onclick=function(){
			currordL--;
			if(currordL<=0){
					currordL=6;
				}
			var boxLeft=document.getElementById("boxLeft");
			boxLeft.src="images/0"+currordL+".jpg";
			
			currordM--;
			if(currordM<=0){
					currordM=6;
				}
			var boxMiddle=document.getElementById("boxMiddle");
			boxMiddle.src="images/0"+currordM+".jpg";
			
			currordR--;
			if(currordR<=0){
					currordR=6;
				}					
			var boxRight=document.getElementById("boxRight");
			boxRight.src="images/0"+currordR+".jpg";					
			
	}

}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

