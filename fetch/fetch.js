window.onload = function () {
	fetch('http://jsonplaceholder.typicode.com/posts/1')
		.then(function (res) {
			res.json().then(function (myJson) {
				console.log(res.headers.get('Content-Type'));
				console.log(res.headers.get('Date'));
				document.querySelector('.showData').innerHTML = myJson.title
			})
		})
}
