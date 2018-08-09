const secretWord = ["JavaScript", "html", "css", "website", "a", 2, 4, 5, 6, 3, 4, 4, 5, 66565, 1231];

let output = document.getElementById('output');

const start = () => {
	shuffleArr(secretWord);
	output.innerHTML += secretWord + '<br>';
}

let shuffleArr = (arr) => {
	for(let i = arr.length; i > 0; i--) {
		let holder = Math.floor(Math.random() * (i + 1));
		let temp = arr[i];
		arr[i] = arr[holder];
		arr[holder] = temp;
	}
	return arr
}



