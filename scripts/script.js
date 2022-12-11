"use strict";

async function initAction() {
	window.location.href = 'chrome-extension://'+chrome.runtime.id+'/www/sites.html?s='+window.location.pathname.split("/").pop().replaceAll('-','%20')+'&h='+window.location.hostname+'&f='+window.location.href;
}

initAction();