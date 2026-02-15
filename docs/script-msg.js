document.addEventListener("DOMContentLoaded", function(){

	const personMsg = document.getElementById("personmsg");

	function getQueryParam(param) {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get(param);
	}

	async function injectHTML(filePath,elem) {
	    try {
	        const response = await fetch(filePath);
	        if (!response.ok) {
	            return;
	        }
	        const text = await response.text();
	        elem.innerHTML = text;
	        console.log('injection ok')
	    } catch (err) {
	        console.error(err.message);
	    }
	}

	let qsname = getQueryParam('name');
	let name = '';

	if (qsname) {
		name = qsname.substring(0, 3);
		console.log('qsname test true');
	} else {
		name = 'boo'
		console.log('qsname test false');
	}
	
	let nm_arr = ['boo', 'nos'];  // mbday '26'

	let personmsgnode = document.querySelector(".personmsg");

	// put the content in the page
	if (nm_arr.includes(name)) {
		console.log('name in nm_arr');
		if (nm_arr.indexOf(name)==0) {
			injectHTML("t-generic.html", personmsgnode);
		} else if (nm_arr.indexOf(name)==1) {
			injectHTML("t-mbday26.html", personmsgnode);
		};



	} else {
		console.log('invalid querystring')
	};


});








// console.log(data);

// )};
