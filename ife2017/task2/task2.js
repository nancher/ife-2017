//跨浏览器实现事件绑定
function addEventHandler(ele, event, handler){
	if(ele.addEventListener){
		return ele.addEventListener(event, handler);
	}
	else if(ele.attachEvent){
		return ele.attachEvent("on" + event, handler);
	}
	else{
		return ele["on" + event] = handler;
	}
}

//获取鼠标位置
function getMousePos(event){
	var e = event || window.event;
	var scrollX = document.body.scrollLeft || document.documentElement.scrollLeft;
	var scrollY = document.body.scrollTop || document.documentElement.scrollTop;
	var left = e.pageX || e.clientX + scrollX;
	var top = e.pageY || e.clientY + scrollY;
	return {x:left, y:top};
}

//显示自定义菜单
function render(obj){
	menu.style.display = "block";
	menu.style.position = "absolute";
	menu.style.left = obj.x-8 + "px";
	menu.style.top = obj.y-24 + "px";
}

var menu = document.getElementsByTagName("ul")[0];
var node = document.getElementsByClassName("user-define")[0];
node.oncontextmenu = function(){
	return false;
}

addEventHandler(node, "contextmenu", function(event){
	var mousePos = getMousePos(event);
	render(mousePos);
})

addEventHandler(menu, "click", function(event){
	var target = event.target || event.srcElement;
	menu.style.display = "none";
	alert(target.innerHTML);
})

addEventHandler(node, "click", function(){
	menu.style.display = "none";
})