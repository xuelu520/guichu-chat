var 
总视窗=this,
总文档=document,
文档正文=总文档.body,
浏览器=navigator,
弹窗=alert,
编码=encodeURIComponent,
控制台=console,
稍后运行=setTimeout;

var 标贴样板=总文档.createElement('div');
标贴样板.className='标贴 隐藏';

var 
绑定动画结束事件=function(元素,回调函数){
	元素.addEventListener('webkitAnimationEnd',回调函数,0)
	元素.addEventListener('mozAnimationEnd',回调函数,0)
	元素.addEventListener('animationend',回调函数,0)
},
绑定缓动结束事件=function(元素,回调函数){
	元素.addEventListener('webkitTransitionEnd',回调函数,0)
	元素.addEventListener('mozTransitionEnd',回调函数,0)
	元素.addEventListener('transitionEnd',回调函数,0)
},

转义超str标记语言=function(str){
	return str
		.replace(/(^\s*)|(\s*$)/g,'')
		.replace(/&/g,'&amp;')
		.replace(/</g,'&lt;')
		.replace(/>/g,'&gt;')
		.replace(/\'/g,'&#39;')
		.replace(/\"/g,'&quot;')
},
获取随机数=function(范围,调整){
	范围=范围||75
	调整=调整||2
	return Math.floor(Math.random()*范围+调整)
},
根据文字调整大小=function(str){
	var 
	str_len=str.length

	if(str_len==1)
		return 3.8


	return .7+(4/str_len)
},
删除标贴=function(父级元素){
	if(this.className!='标贴')
		return this.className='标贴'

	if(父级元素=this.parentNode)
		父级元素.removeChild(this)
},
rand255=function(){
	return Math.floor(Math.random()*25)+225
},
透明颜色值=function(){
	return 'background-color:rgba('+rand255()+','+rand255()+','+rand255()+',.8)'
},
msg_show=function(str){
	var 
	标贴=标贴样板.cloneNode(1)
	x = 获取随机数(99,0),
	y = 获取随机数(75,0),
	标贴.innerHTML=str //为了解决火狐的 innerText 问题 换成了 innerHTML + 正则转义 T_T

	标贴.style.cssText='left:'+x+'%;top:'+y+'%;font-size:'+根据文字调整大小(str)+'em;'

	绑定动画结束事件(标贴,删除标贴)

	弹幕框.appendChild(标贴)
	

	return 标贴
};
