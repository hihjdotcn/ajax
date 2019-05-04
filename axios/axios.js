window.onload = function () {
	axios.get('http://jsonplaceholder.typicode.com/posts/1')
		.then(function (response) {
			// handle success
			console.log(response);
			document.querySelector('.showData').innerHTML = response.data.title
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		})
		.then(function () {
			// always executed
		});
}
