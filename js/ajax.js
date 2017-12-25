function ajax(obj){
	var defaults = {
		method:'get',
		async:true,
		data:""
	};
	//Object.assign
	//对象拷贝

	var ops = Object.assign({},defaults,obj);
	
	var xhr = null;
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}else{
		xhr = new ActiveXObject('Microsoft.XMLHTTP');
	}
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200){
				ops.success(xhr.responseText);
			}
		}
	}
	xhr.open(ops.method,ops.url,ops.async);
	xhr.send(null);

}