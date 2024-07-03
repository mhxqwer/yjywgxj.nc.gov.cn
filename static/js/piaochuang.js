// JavaScript Document
  function addEvent(obj,evtType,func,cap){
        cap=cap||false;
    if(obj.addEventListener){
         obj.addEventListener(evtType,func,cap);
       return true;
    }else if(obj.attachEvent){
            if(cap){
             obj.setCapture();
             return true;
         }else{
          return obj.attachEvent("on" + evtType,func);
       }
    }else{
       return false;
        }
    }
    function getPageScroll(){
        var xScroll,yScroll;
    if (self.pageXOffset) {
       xScroll = self.pageXOffset;
    } else if (document.documentElement && document.documentElement.scrollLeft){
       xScroll = document.documentElement.scrollLeft;
    } else if (document.body) {
       xScroll = document.body.scrollLeft;
    }
    if (self.pageYOffset) {
       yScroll = self.pageYOffset;
    } else if (document.documentElement && document.documentElement.scrollTop){
       yScroll = document.documentElement.scrollTop;
    } else if (document.body) {
       yScroll = document.body.scrollTop;
    }
    arrayPageScroll = new Array(xScroll,yScroll);
    return arrayPageScroll;
    }
    function GetPageSize(){
        var xScroll, yScroll;
        if (window.innerHeight && window.scrollMaxY) { 
            xScroll = document.body.scrollWidth;
            yScroll = window.innerHeight + window.scrollMaxY;
        } else if (document.body.scrollHeight > document.body.offsetHeight){
            xScroll = document.body.scrollWidth;
            yScroll = document.body.scrollHeight;
        } else {
            xScroll = document.body.offsetWidth;
            yScroll = document.body.offsetHeight;
        }
        var windowWidth, windowHeight;
        if (self.innerHeight) {
            windowWidth = self.innerWidth;
            windowHeight = self.innerHeight;
        } else if (document.documentElement && document.documentElement.clientHeight) {
            windowWidth = document.documentElement.clientWidth;
            windowHeight = document.documentElement.clientHeight;
        } else if (document.body) {
            windowWidth = document.body.clientWidth;
            windowHeight = document.body.clientHeight;
        } 
        if(yScroll < windowHeight){
            pageHeight = windowHeight;
        } else { 
            pageHeight = yScroll;
        }
        if(xScroll < windowWidth){ 
            pageWidth = windowWidth;
        } else {
            pageWidth = xScroll;
        }
        arrayPageSize = new Array(pageWidth,pageHeight,windowWidth,windowHeight) 
        return arrayPageSize;
    }
    
    var AdMoveConfig=new Object();
    AdMoveConfig.IsInitialized=false;
    AdMoveConfig.ScrollX=0;
    AdMoveConfig.ScrollY=0;
    AdMoveConfig.MoveWidth=0;
    AdMoveConfig.MoveHeight=0;
    AdMoveConfig.Resize=function(){
        var winsize=GetPageSize();
        AdMoveConfig.MoveWidth=winsize[2];
        AdMoveConfig.MoveHeight=winsize[3];
        AdMoveConfig.Scroll();
    }
    AdMoveConfig.Scroll=function(){
        var winscroll=getPageScroll();
        AdMoveConfig.ScrollX=winscroll[0];
        AdMoveConfig.ScrollY=winscroll[1];
    }
    addEvent(window,"resize",AdMoveConfig.Resize);
    addEvent(window,"scroll",AdMoveConfig.Scroll);
    function AdMove(id){
        if(!AdMoveConfig.IsInitialized){
            AdMoveConfig.Resize();
            AdMoveConfig.IsInitialized=true;
        }
        var obj=document.getElementById(id);
        obj.style.position="absolute";
        var W=AdMoveConfig.MoveWidth-obj.offsetWidth;
        var H=AdMoveConfig.MoveHeight-obj.offsetHeight;
        var x = W*Math.random(),y = H*Math.random();
        var rad=(Math.random()+1)*Math.PI/6;
        var kx=Math.sin(rad),ky=Math.cos(rad);
        var dirx = (Math.random()<0.5?1:-1), diry = (Math.random()<0.5?1:-1);
        var step = 1;
        var interval;
        this.SetLocation=function(vx,vy){x=vx;y=vy;}
        this.SetDirection=function(vx,vy){dirx=vx;diry=vy;}
        obj.CustomMethod=function(){
            obj.style.left = (x + AdMoveConfig.ScrollX) + "px";
            obj.style.top = (y + AdMoveConfig.ScrollY) + "px";
            rad=(Math.random()+1)*Math.PI/6;
            W=AdMoveConfig.MoveWidth-obj.offsetWidth;
            H=AdMoveConfig.MoveHeight-obj.offsetHeight;
            x = x + step*kx*dirx;
            if (x < 0){dirx = 1;x = 0;kx=Math.sin(rad);ky=Math.cos(rad);} 
            if (x > W){dirx = -1;x = W;kx=Math.sin(rad);ky=Math.cos(rad);}
            y = y + step*ky*diry;
            if (y < 0){diry = 1;y = 0;kx=Math.sin(rad);ky=Math.cos(rad);} 
            if (y > H){diry = -1;y = H;kx=Math.sin(rad);ky=Math.cos(rad);}
        }
        this.Run=function(){
            var delay = 10;
            interval=setInterval(obj.CustomMethod,delay);
            obj.onmouseover=function(){clearInterval(interval);}
            obj.onmouseout=function(){interval=setInterval(obj.CustomMethod, delay);}
        }
    }
    function hideDiv(ads)
    {
    var d = document.getElementById(ads);
    d.style.display = "none";
    }
	
	function hideDiv_dl(dlid)
    {
	 var a = dlid;
//	 alert(a);	
    var d = document.getElementById(dlid);
    dlid.style.display = "none";
    }
	
/* 代码整理：懒人之家 www.lanrenzhijia.com */
$(document).ready(function(){
	var $King_Chance_LayerCont = $(".King_Chance_LayerCont");
	var $King_Chance_Layer_Close = $(".King_Chance_Layer_Close");
	var $King_Chance_Layer_Btn = $(".King_Chance_Layer_Btn > ul > li");
	var $King_Chance_Layer_Content = $(".King_Chance_Layer_Content > ul > li");
	var King_Chance_Layer_Btn_Hover = "hover";
	var King_Chance_Layer_Show_Num = 0;
	var King_Chance_Layer_Btn_Len = $King_Chance_Layer_Btn.length;
	$King_Chance_Layer_Btn.hover(function(){
		var King_Chance_Layer_Show_Num = $King_Chance_Layer_Btn.index(this);
		$(this).addClass(King_Chance_Layer_Btn_Hover).siblings().removeClass(King_Chance_Layer_Btn_Hover);
		$King_Chance_Layer_Content.eq(King_Chance_Layer_Show_Num).show().siblings().hide();
		});
	var King_Chance_Layer_Play = function(){
		King_Chance_Layer_Show_Num++;
		if(King_Chance_Layer_Show_Num>=King_Chance_Layer_Btn_Len) King_Chance_Layer_Show_Num=0;
		$King_Chance_Layer_Btn.eq(King_Chance_Layer_Show_Num).addClass(King_Chance_Layer_Btn_Hover).siblings().removeClass(King_Chance_Layer_Btn_Hover);
		$King_Chance_Layer_Content.eq(King_Chance_Layer_Show_Num).show().siblings().hide();
		};
	
	$King_Chance_Layer_Close.click(function(){clearInterval(King_Chance_Layer_Play_Time);$King_Chance_LayerCont.slideUp();});
	King_Chance_Layer_Pop = function(){
		$King_Chance_LayerCont.slideDown();
		$King_Chance_Layer_Btn.eq(King_Chance_Layer_Show_Num).addClass(King_Chance_Layer_Btn_Hover);
		$King_Chance_Layer_Content.eq(King_Chance_Layer_Show_Num).show();
		King_Chance_Layer_Play_Time = setInterval(function(){King_Chance_Layer_Play();},2000);
		};
	});
var scripts=document.getElementsByTagName("script"),script=scripts[scripts.length-1];
strJsPath=document.querySelector?script.src:script.getAttribute("src",4);
strJsPath = strJsPath.substring(0,strJsPath.lastIndexOf("/"))+"/";
function King_Chance_Layer_Probability(King_Chance_Layer_Array){
	var King_Chance_Layer_Array_Num=0,King_Chance_Layer_Array_Rnd,King_Chance_Layer_Array_NewRnd=0;
	for(i=0;i<King_Chance_Layer_Array.length;i++){King_Chance_Layer_Array_Num += King_Chance_Layer_Array[i];};
	var King_Chance_Layer_Array_Rnd=Math.round((King_Chance_Layer_Array_Num - 1) * Math.random()) + 1;
	if(King_Chance_Layer_Array_Rnd<=0) return false;
	for(i=0;i<King_Chance_Layer_Array.length;i++){
		King_Chance_Layer_Array_NewRnd += King_Chance_Layer_Array[i];
		if(King_Chance_Layer_Array_Rnd<=King_Chance_Layer_Array_NewRnd){
			if(window.addEventListener){window.addEventListener("load",King_Chance_Layer_Pop,false);}
			else{window.attachEvent("onload",King_Chance_Layer_Pop);};
			break;
			};
		};
	};
	/* 代码整理：懒人之家 www.lanrenzhijia.com */
//批量延迟加载
//for(var i=0 ; i < imgs.length; i++){
//	var _top = getTop(imgs[i]),_left = getLeft(imgs[i]);
//	//判断图片是否在显示区域内
//	if( _top >= top &&
//		_left >= left &&
//		_top <= top+height &&
//		_left <= left+width){
//		var _src = imgs[i].getAttribute('_src');
//		//如果图片已经显示，则取消赋值
//		if(imgs[i].src !== _src){
//			imgs[i].src = _src;
//		}
//	}
//}

// 代码整理：懒人之家 www.lanrenzhijia.com
$(function(){
	var King_Chance_Layer_Array = new Array();
		King_Chance_Layer_Array[0] = 10;
		King_Chance_Layer_Array[1] = 10;
		King_Chance_Layer_Array[2] = 10;
		King_Chance_Layer_Array[3] = 10;
		King_Chance_Layer_Array[4] = 10;
		King_Chance_Layer_Array[5] = 10;
		King_Chance_Layer_Array[6] = 40;
		King_Chance_Layer_Probability(King_Chance_Layer_Array);	   
});
