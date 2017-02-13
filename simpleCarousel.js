$.fn.simpleCarousel=function(isAuto,time){
	//liqi
	var liqi={
		isAuto:isAuto,
		time:time
	};
	//找到所有轮播图
	var $this=$(this);
	//添加基础样式
	$this.css({"position":"relative","overflow":"hidden"});
	//记录总个数
	var all_Index=0;
	//现在出现的图片
	var in_Index=1;
	//将要出现的图片
	var in_Next=0;
	//初始化时间
	var time=300;
	//初始化宽度
	var width=0;
	//初始化定时器
	var setTimer=0;
	//遍历添加data-num,初始化所有图片样式
	$this.children().each(function(index,elem){
		$(elem).css({
			"display":"none",
			"position":"absolute",
			"overflow":"hidden"
		}).attr("data-num",index+1);
		//记录总个数
		all_Index++;
	});
	
	//封装找哪个图
	function Carousel_content(data){
		return $this.children("[data-num="+data+"]");
	}
	//封装轮播选栏样式
	function btn_style(num){
		//默认样式
		$this.find(".index_btn").css({
			"display":"inline-block",
			"fontSize":"0px",
			"width":"12px",
			"height":"12px",
			"background":"#000",
			"box-shadow":" 0 0 10px #fff",
			"opacity":"0.7",
			"border-radius":"50%",
			"cursor": "pointer"
		});
		//为选中的添加选中样式
		$this.find(".index_btn:eq("+(num-1)+")").css({
			"background":"#fff",
			"box-shadow":" 0 0 10px #000"
		});
	}
	//初始化 原始图片样式
	Carousel_content(in_Index).css({"display":"block","position":"relative","width":"100%"});
	//添加按钮
	var content='<a id="down" style="left:0;">&lt;</a>   <a id="up" style="right:0;">&gt;</a>';
	//添加轮播选栏
	var html='';
	for ( var i=1 ; i<=all_Index ; i++ )
	{
		html+="<a class='index_btn'>"+i+"</a> ";
	}
	//为轮播选栏添加包裹元素及样式
	html="<div style='text-align:center; position:absolute; bottom:0; left:50%; transform:translate(-50% ,-50%)'>"+html+"</div>";
	//添加至DDM树
	$this.append(content+html);
	//左右换图按钮样式
	$this.children("#down,#up").css({
		"fontSize":"4em",
		"padding":"8px 5px",
		"color":"#fff",
		"opacity":"0.5",
		"background":"#000",
		"position":"absolute",
		"top":"50%",
		"cursor": "pointer",
		"transform": "translate(0 ,-50%)"
	});
	//调用选栏样式默认第一个
	btn_style(1);
	//点击事件
	$this.on("click","#up,#down,.index_btn",function(e){
		var $target=$(e.target);
		if($target.attr("id")=="up"){
			animate(1);
		}else if ($target.attr("id")=="down"){
			animate(-1);
		}else if($target.hasClass("index_btn")){
			var index=$target.html();
			animate(0,index);
		};
	});
	/*
	测试代码
	$("#down").on("click",{direction:-1},animate);
	$("#first1").on("click",function(){});
	$("#first2").on("click",{direction:0,index:2},animate);
	$("#first3").on("click",{direction:0,index:3},animate);
	$("#first4").on("click",{direction:0,index:4},animate);
	*/
	if (typeof(liqi.isAuto)=="boolean")
	{
		if (typeof(liqi.time)!=="number")
		{
			liqi.time=3000;
		}
		//自动轮播
		setTimer=setInterval(function(){animate(1)},liqi.time);
		/*轮播图控制*/
		$this.on("mouseenter",function(){
			clearInterval(setTimer);
		});
		$this.on("mouseleave",function(){
			setTimer=setInterval(function(){animate(1)},liqi.time);
		});
	}
	

	//动画函数
	function animate(direction,index){
		//设定图片宽度
		width=$this.width();
		//判断方向
		var direction=direction;
		//判断动画是否正在执行
		if (!$this.children().is(":animated")){	
			//字符串数字化
			in_Index=parseInt(in_Index);
			//判断方向
			if (direction==1){
				//如果已出现图片为最后一张
				if (all_Index==in_Index){
					//下一张图片为第一张
					in_Next=1;
				}else{
					//否做为下一张
					in_Next=in_Index+1;
				}
			}else if (direction==-1){
				if (in_Index==1){
					in_Next=all_Index;
				}else{
					in_Next=in_Index-1;
				}
			}else{//如果是点击选栏
				var index=index;
				//下一个出现的是点击的
				in_Next=index;
				//判断正反
				if(index>in_Index){
					direction=1;
				}else if(index<in_Index){
					direction=-1;
				}else{
					return;
				};
			}
			//为将要出现的图片添加准备样式
			Carousel_content(in_Next).css({
				"display":"block",
				"width":width+"px",
				"left":100*direction+"%",
				"top":0
			});
			//设置原始图片样式宽度        //原始图片动画
			Carousel_content(in_Index).css("width",width).animate({left:-100*direction+"%"},time,
				function(){
					$(this).css({"display":"none","left":"0","position":"absolute"});
					//判断方向改变in_Index(此步骤可省略)
					if (direction==1){
						//下一张
						in_Index++;
						//如果下一张超出范围
						if (all_Index==in_Index-1){
							//变成第一张
							in_Index=1;
						};
					}else if (direction==-1){
						//下一张
						in_Index--;
						if (in_Index==0){
							in_Index=all_Index;
						};
					}
					/*
						console.log("前in_Index"+in_Index);
						console.log("前in_Next"+in_Next);
					*/
					//直接将原始图片改为出现的图片即可
					in_Index=in_Next;
					/*
						console.log("后in_Index"+in_Index);
						console.log("后in_Next"+in_Next);
						console.log(direction);
					*/
				}
			);
			//出现图片动画
			Carousel_content(in_Next).animate({left:"0"},time,
				function(){
					$(this).css({"width":"100%","position":"relative"});
				}
			);
			//调用选栏样式选中哪个
			btn_style(in_Next);
		}
	}
}