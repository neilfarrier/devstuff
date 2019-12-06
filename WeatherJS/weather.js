class Weather {
    constructor(city, state) {
        this.apiKey = '665b2d399b3145789b2d399b31357809';
        this.city = city;
        this.state = state;
    }

    //Fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

        const responseData = await response.json();

        return responseData.current_observation;
    }

    //Change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}