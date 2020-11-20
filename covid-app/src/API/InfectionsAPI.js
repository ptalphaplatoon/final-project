// API DOCUMENTATION covidtracking.com/data/api
const BASE_URL = 'https://api.covidtracking.com'

endpoint_historic_us_values = '/v1/us/daily.json'  // multi line - Historic values for US by day
endpoint_current_us_values = '/v1/us/current.json' // single line - current values for the US for most recent day


const fetchCurrentUSValues = async() => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint_current_us_values}`)
        const data = await response.json()
        return data;
    } catch(error) {
        console.log(error)
    } 
}

const fetchHistoricUSValues = async() => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint_historic_us_values}`)
        const data = await response.json()
        return data;
    } catch(error) {
        console.log(error)
    } 
}

const fetchCurrentStateValues = async() => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint_historic_us_values}`)
        const data = await response.json()
        return data;
    } catch(error) {
        console.log(error)
    } 
}

const fetchHistoricStateValues = async() => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint_historic_us_values}`)
        const data = await response.json()
        return data;
    } catch(error) {
        console.log(error)
    } 
}

export {
    fetchCurrentUSValues,
    fetchHistoricUSValues,
};


