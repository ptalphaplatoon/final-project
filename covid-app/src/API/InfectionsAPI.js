// API DOCUMENTATION covidtracking.com/data/api
const BASE_URL = 'https://api.covidtracking.com'

endpoint_historic_us_values = '/v1/us/daily.json'  // multi line - Historic values for US by day
endpoint_current_us_values = '/v1/us/current.json' // single line - current values for the US for most recent day
endpoint_state_meta_data = '/v1/states/info.json' // single line with health/govt/testing center web links etc
endpoint_historic_values_all_states = '/v1/states/info.json' // multi line historic dates for each state
endpoint_current_values_all_states = '/v1/states/current.json' // single line with all states data 

const fetchHistoricUSValues = async() => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint_historic_us_values}`)
        const data = await response.json()
        return data;
    } catch(error) {
        console.log(error)
    } 
}

const fetchCurrentUSValues = async() => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint_current_us_values}`)
        const data = await response.json()
        return data;
    } catch(error) {
        console.log(error)
    } 
}

const fetchStateMetaData = async() => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint_state_meta_data}`)
        const data = await response.json()
        return data;
    } catch(error) {
        console.log(error)
    } 
}

const fetchSingleStateMetaData = async() => {
    endpoint_single_state_meta_data = `/v1/states/${state}/info.json` // meta data for specific state
    try {
        const response = await fetch(`${BASE_URL}${endpoint_single_state_meta_data}`)
        const data = await response.json()
        return data;
    } catch(error) {
        console.log(error)
    } 
}

const fetchHistoricStateValues = async() => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint_historic_values_all_states}`)
        const data = await response.json()
        return data;
    } catch(error) {
        console.log(error)
    } 
}

const fetchCurrentStateValues = async() => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint_current_values_all_states}`)
        const data = await response.json()
        return data;
    } catch(error) {
        console.log(error)
    } 
}

const fetchHistoricSingleStateValues = async(state) => {
    endpoint_historic_values_single_state = `/v1/states/${state}/daily.json` // multi line historic values single state
    try {
        const response = await fetch(`${BASE_URL}${endpoint_historic_values_single_state}`)
        const data = await response.json()
        return data;
    } catch(error) {
        console.log(error)
    } 
}

const fetchCurrentSingleStateValues = async() => {
    endpoint_current_values_single_state = `/v1/states/${state}/current.json` // current values single state
    try {
        const response = await fetch(`${BASE_URL}${endpoint_current_values_single_state}`)
        const data = await response.json()
        return data;
    } catch(error) {
        console.log(error)
    } 
}

export {
    fetchHistoricUSValues,
    fetchCurrentUSValues,
    fetchStateMetaData,
    fetchSingleStateMetaData,
    fetchHistoricStateValues,
    fetchCurrentStateValues,
    fetchHistoricSingleStateValues,
    fetchCurrentSingleStateValues,
};

// import {fetchHistoricUSValues,
//     fetchCurrentUSValues,
//     fetchStateMetaData,
//     fetchSingleStateMetaData,
//     fetchHistoricStateValues,
//     fetchCurrentStateValues,
//     fetchHistoricSingleStateValues,
//     fetchCurrentSingleStateValues,} from '../../api/InfectionsAPI'; 

// React.useEffect(() => {
//     async function getCurrentUSValues() {
//         const data = await fetchCurrentUSValues()
//         setCurrentUSValues(data)
//         console.log(data)
//     }
//     getCurrentUSValues()
// })

// const [currentUSValues, setCurrentUSValues]=useState([])
// async function getCurrentUSValues() {
//     const data = await fetchCurrentUSValues()
//     setCurrentUSValues(data)
// }

// const [historicUSValues, setHistoricUSValues]=useState([])
// async function getHistoricUSValues() {
//     const data = await fetchHistoricUSValues()
//     setHistoricUSValues(data)
// }

// const [stateMetaData, setStateMetaData]=useState([])
// async function getStateMetaData() {
//     const data = await fetchStateMetaData()
//     setStateMetaData(data)
// }

// const [singleStateMetaData, setSingleStateMetaData]=useState([])
// async function getSingleStateMetaData() {
//     const data = await fetchSingleStateMetaData()
//     setSingleStateMetaData(data)
// }

// const [historicStateValues, setHistoricStateValues]=useState([])
// async function getHistoricStateValues() {
//     const data = await fetchHistoricStateValues()
//     setHistoricStateValues(data)
// }

// const [CurrentStateValues, setCurrentStateValues]=useState([])
// async function getCurrentStateValues() {
//     const data = await fetchCurrentStateValues()
//     setCurrentStateValues(data)
// }

// const [HistoricSingleStateValues, setHistoricSingleStateValues]=useState([])
// async function getHistoricSingleStateValues() {
//     const data = await fetchHistoricSingleStateValues()
//     setHistoricSingleStateValues(data)
// }

// const [CurrentSingleStateValues, setCurrentSingleStateValues]=useState([])
// async function getCurrentSingleStateValues() {
//     const data = await fetchCurrentSingleStateValues()
//     setCurrentSingleStateValues(data)
// }
