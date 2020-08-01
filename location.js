const axios = require('axios');


const getPlaceLatLng = async( dir ) => {

    const encodedUlr = encodeURI( dir );
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUlr }`,
        headers: {'X-RapidAPI-Key': '9ecd9bf292msh6898b05a261e2f1p1c427cjsnf8582c0e48b4'}
      });
    
    const resp = await instance.get();

    if (  resp.data.Results.length === 0 ) {
        throw new Error(`There is not results for: ${ dir }`);
    }

    const data      = resp.data.Results[0];
    const address = data.name; 
    const lat = data.lat; 
    const lng = data.lon; 


    return {
        address,
        lat,
        lng
    }
}


module.exports = {
    getPlaceLatLng
}
