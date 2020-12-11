// https://api.census.gov/data/2019/pep/population?get=NAME,POP&for=state:*&key=YOUR_KEY_GOES_HERE

const BASE_URL = "https://api.census.gov/data/2019/pep/population"
const endpoint_state_populations = "?get=NAME,POP&for=state:*&key="
const CENSUS_API_KEY = process.env.REACT_APP_CENSUS_API_KEY;

const fetchStateCensusPopulations = async() => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint_state_populations}${CENSUS_API_KEY}`)
        const data = await response.json()
        console.log(data)
        return data;
    } catch(error) {
        console.log(error)
    } 
}


export {fetchStateCensusPopulations};