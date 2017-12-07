window.onload=function(){
	var w=w||window;
	var windowWidth=w.innerWidth;
	var windowHeight=w.innerHeight;
	//不采用$（）是因为不想带上单位px
	var logoWidth=220;
	var searchWidth=640;
	var footerWidth=650;
	//对Logo进行定位
	$("#logo").css({
		"position":"absolute",
		"left":parseInt(windowWidth/2-logoWidth/2),
		"top":parseInt(windowHeight/6)
	});
	//对搜索框进行定位
	$("#search").css({
		"position":"absolute",
		"left":parseInt(windowWidth/2-searchWidth/2),
		"top":parseInt(windowHeight/3)
	});
	//对底部进行定位
	$("footer").css({
		"position":"absolute",
		"left":parseInt(windowWidth/2-footerWidth/2),
		"bottom":parseInt(windowHeight/9)
	});
	//设置右菜单的高
	$("#right_nav").css('height',windowHeight);
	//对右菜单进行动态操作
	$("#more_goods").mouseover(function(){
		$("#right_nav").show();
	});
	$("#right_nav").children("p").mouseover(function(){
		$("#right_nav").show();
	}).mouseout(function(event){
		event.stopPropagation();  //防止冒泡事件
		$("#right_nav").show();
	});
	$("#right_nav").children("div").mouseover(function(){
		$("#right_nav").show();
		$(this).children("a").children("p").css('text-decoration','underline');
	}).mouseout(function(event){
		event.stopPropagation();
		$("#right_nav").show();
		$(this).children("a").children("p").css('text-decoration','none');
	});
	$("#right_nav").mouseout(function(){
		$(this).hide();
	});
	//相机处的鼠标进出和鼠标点击
	$("#search").children("img").mouseover(function(){
		$(this).attr('src','img/camera2.jpg');
	}).mouseout(function(){
		$(this).attr('src','img/camera1.jpg');
	}).click(function(event){             //对相机弹出框进行动态设计
		event.stopPropagation();
		$('#camera_text').show();
		$("#search").children("input").attr('placeholder','在此处粘贴图片网站网址').css({
			'border-top':'1px solid #3399ff',
			'border-left':'1px solid #3399ff'
		});
		//更改百度一下的图案
		$("#search").children('span').children('a').text("");
		$("#search").children('span').css({
			'background-color':'transparent',
			'background-image':'url(img/camera4.png)'
		}).mouseover(function(){
			$(this).css({
			'background-color':'transparent',
			'background-image':'url(img/camera3.png)'
			});
		}).mouseout(function(){
			$(this).css({
			'background-color':'transparent',
			'background-image':'url(img/camera4.png)'
			});
		});

		
		//相机图标暂时消失
		$(this).hide();
		$("#search").children("input").click(function(event){
			event.stopPropagation();
			('#camera_text').show();
		});

	});
	$("#camera_text").click(function(event){
		event.stopPropagation();
		$(this).show();
	});
	//点击空白处
	$(document).click(function(){    
		$('#camera_text').hide();       //点击空白处关闭相机框
		$("#search").children("input").attr('placeholder',"").css({  //边框变色
			'border-top':'1px solid #dbdbdb',
			'border-left':'1px solid #dbdbdb'
		});
		//百度一下的变化
		$("#search").children('span').children('a').text("百度一下");
		$("#search").children('span').css({
			'background-color':'#3399ff',
			'background-image':''
		});
		//相机图标恢复
		$("#search").children('img').show();

		//阻止百度一下中的相机出现
		$("#search").children('span').mouseover(function(){
			$(this).css({
			'background-color':'#3366ff',
			'background-image':''
			});
		}).mouseout(function(){
			$(this).css({
			'background-color':'#3399ff',
			'background-image':''
			});
		});
	});
	
	//上传图片按钮颜色变化
	$("#get_picture").mouseover(function(){
		$(this).css('border','1px solid #3399ff');
	}).mouseout(function(){
		$(this).css('border','1px solid #E5E5E5');
	});

	//上传照片的关闭按钮
	$("#delete_selete").mouseover(function(){   //关闭按钮的图标变化
		$(this).css('background-image','url(img/delete2.png)');
	}).mouseout(function(){
		$(this).css('background-image','url(img/delete1.png)');
	}).click(function(event){
		event.stopPropagation();
		$('#camera_text').hide();  //上传框关闭  
		$("#search").children('img').show();  //相机图标恢复
		$("#search").children("input").attr('placeholder',"").css({  //边框变色
			'border-top':'1px solid #dbdbdb',
			'border-left':'1px solid #dbdbdb'
		});
		//百度一下的变化
		$("#search").children('span').children('a').text("百度一下");
		$("#search").children('span').css({
			'background-color':'#3399ff',
			'background-image':''
		});

		//阻止百度一下中的相机出现
		$("#search").children('span').mouseover(function(){
			$(this).css({
			'background-color':'#3366ff',
			'background-image':''
			});
		}).mouseout(function(){
			$(this).css({
			'background-color':'#3399ff',
			'background-image':''
			});
		});
	});
	//百度一下的鼠标进出变化
	$("#search").children('span').mouseover(function(){
		$(this).css('background-color','#3366ff');
	}).mouseout(function(){
		$(this).css('background-color','#3399ff');
	});
}