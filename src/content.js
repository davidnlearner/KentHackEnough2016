function messagePage() {
	
}
function url_domain(data) {
	var dummy = document.createElement('a');
	dummy.href = data;
	var hostParts = dummy.hostname.split('.');
	return hostParts[hostParts.length - 2] + '.' + hostParts[hostParts.length - 1];
}
