window.onload = function () {
	let xhr = new XMLHttpRequest()
	xhr.open('get', 'http://jsonplaceholder.typicode.com/posts/1')
	xhr.send(null)

	xhr.onreadystatechange = () => {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let data = JSON.parse(xhr.responseText)
				document.querySelector('#showData').innerHTML = JSON.parse(xhr.responseText).title
			}
		}
	}

}
