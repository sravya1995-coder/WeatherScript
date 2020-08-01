const argv = require('./config/yargs').argv;
const place = require('./location/location');
const weather = require('./weather/weather');


let getInfo = async(address) => {

    try {
        
        let coors = await place.getPlaceLatLng(address);        
        let temp = await weather.getWeather(coors.lat, coors.lng);
        

        return `The Weather in ${coors.address} is ${temp}°C`;

    } catch (e) {
        return `No Weather info for:  ${address}`
    }
}

getInfo(argv.address)
    .then(message => console.log(message))
    .catch(err => console.log(err));
