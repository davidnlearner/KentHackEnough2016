function messagePage() {
	
}
function url_domain(data) {
	var dummy = document.createElement('a');
	dummy.href = data;
	var hostParts = dummy.hostname.split('.');
	return hostParts[hostParts.length - 2] + '.' + hostParts[hostParts.length - 1];
}
function getMessage(userId, messageId, callback) {
  var request = gapi.client.gmail.users.messages.get({
    'userId': userId,
    'id': messageId
  });
  request.execute(callback);
}

function callback(){
	for(var word:message){
		if(word === url){
			if (url_domain(word) !== established){
				
			    }
			    }
}

if (url_domain(location.href) === "gmail.com"){
	if(it's a message){
		getMessage(me, geturl(), callback);
		
		}
