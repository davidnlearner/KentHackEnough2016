function messagePage() {
	
}
function url_domain(data) {
	var dummy = document.createElement('a');
	dummy.href = data;
	var hostParts = dummy.hostname.split('.');
	return hostParts[hostParts.length - 2] + '.' + hostParts[hostParts.length - 1];
}

function domain(data) {
	var dummy = ""
	var hostParts = dummy.hostname.split('.');
	return hostParts[hostParts.length - 2];
}

function getMessage(userId, messageId, callback) {
  var request = gapi.client.gmail.users.messages.get({
    'userId': userId,
    'id': messageId
  });
  request.execute(callback);
}

function callback(){
	var established = url_domain(sender);
	//for loop to iterate through all items in siteList, then split off to find names of sites like 'Amazon'
	var tempList = siteList.split('.');
	var bSiteList = tempList[0];
	var SiteDictionary = {};
	var cSiteList = [];
	for(var i = 0; i < message.length; i++){
		if(word is a url){
			// line below is if key in keys for a dictionary, do something similar
			if (SiteDictionary.contains(url_domain(word)) === true){
				SiteDictionary[url_domain(word)] += 1;
			} else {
				SiteDictionary[url_domain(word)].set() = 1;
			}
		} else if( bSiteList.contains(word)){
			//something with corresponding site being tested against
			// something about putting stuff in cSiteList maybe
		}
	}
	// iterate through SiteDictionary and find most common.
	// check domains against siteList
	alert('This page is likely a phishing email!')
}

if (url_domain(location.href) === "mail.google.com"){
		if(url.end !== "inbox#"){
			getMessage(me, geturl(), callback);	
		}
}




