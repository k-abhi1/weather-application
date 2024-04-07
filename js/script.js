const url = 'https://open-weather13.p.rapidapi.com/city/landon/EN';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '21d4b5cc78mshd2efd793b9ff6fep116a06jsn0cfef07dfc9f',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}