function SlideUp(ops){
	this.parent = document.querySelector(ops.parent);
	this.cont = document.querySelector(ops.cont);
	this.contLi = this.cont.children;
	this.index = 0;
	this.timer = null;
	this.init();
}
SlideUp.prototype = {
	constructor:SlideUp,
	init:function(){
		//克隆第一张放到最后
		var newli = this.contLi[0].cloneNode(true);
		this.cont.appendChild(newli);
		this.len = this.contLi.length;
		this.contliw = newli.offsetHeight;
		this.cont.style.height = this.len * this.contliw + 'px';
		var that = this;
		setInterval(function(){
			if(that.index >= that.len-1){
				that.index = 0;
				that.cont.style.marginTop = '0px';
			}
			that.index++;
			that.change();
		},1600)
	},
	change:function(){
		var that = this;
		clearInterval(this.timer);
		this.timer = setInterval(function(){
			var mt = that.cont.offsetTop;
			if(mt <= -that.index * that.contliw){
				clearInterval(that.timer);
				return false;
			}
			that.cont.style.marginTop = mt - 10 + 'px';
		},100);
	}
}


