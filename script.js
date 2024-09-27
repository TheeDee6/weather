async function loadWeatherApi() {
    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=accra';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c2e3d52b3cmsh6a43b23b0a94b92p122436jsnc37d3fa97dc8',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
    const data = JSON.parse(result);

    // 
    // const name = data.location['name'];
    // const region = data.location['region'];
    // const country = data.location['country'];
    // const tz_id = data.location['tz_id'];
    // const temp_c = data.current['temp_c'];
    // const feelslike_c = data.current['feelslike_c'];
    // const text = data.current['condition']['text'];
    // const icon = data.current['condition']['icon'];
	console.log(icon);
} catch (error) {
	console.error(error);
}
}