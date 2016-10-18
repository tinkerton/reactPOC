const rootUrl = 'http://api.openweathermap.org/data/2.5/'
const forecastUrl = 'forecast/city?id=' // 2689287 Gothenburg id
const weatherUrlId = 'weather?id=' // 2689287 Gothenburg id
const weatherUrlCity = 'weather?q=' // Gothenburg id
const apiKey = '&APPID=03c8dff2fe3c6c11e005c6be765d51eb'
module.exports = {
	getForecast(cityId) {
		return fetch(rootUrl + forecastUrl + cityId + apiKey, {
			headers: {
				//        'Authorization': 'Client-ID ' + apiKey
			}
		})
		.then((response) => {
			return response.json();
		})
	},

	getWeatherCity(cityName) {
		return fetch(rootUrl + weatherUrlCity + cityName + apiKey, {
			headers: {
				//        'Authorization': 'Client-ID ' + apiKey
			}
		})
		.then((response) => {
			return response.json()
		})
	},

	getWeatherId(id) {
		return fetch(rootUrl + weatherUrlId + id + apiKey, {
			headers: {

			}
		})
		.then((response) => {
			return response.json()
		})
	},

	getCity(cityName) {
		console.log(cityName);
		return fetch(rootUrl + weatherUrlCity + cityName + apiKey, {
			headers: {
				//        'Authorization': 'Client-ID ' + apiKey
			}
		})
		.then((response) => response.json())
		.then((responseJson) => {
			console.log(responseJson);
			let city = {name : responseJson.name, id : responseJson.id}
			return city;
		})
		.catch((error) => {
			console.error(error);
		})

	}
}
