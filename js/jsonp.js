var jsonp = ({url = '', data = {},jsonpName = 'callback', success = function(){}}) => {
	if(document.getElementById('jsp')){
		document.body.removeChild(document.getElementById('jsp'))
	}
	window[jsonpName] = success
	var jsp = document.createElement('script')
	jsp.setAttribute('id', 'jsp')
	var dataStr = ''
	for(let key in data){
		dataStr += '&' + key + '=' + data[key]
	}
	jsp.setAttribute('src', url + '?callback=' + jsonpName + dataStr)
	document.body.appendChild(jsp)
}


export default jsonp;