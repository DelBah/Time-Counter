import axios from "axios";
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const API_URL = "http://localhost:8080/"

const getAllData =  () =>{
    return axios.get(`${API_URL}all`)
}

const startTime = async () =>{
    return await axios.post(`${API_URL}create`)
}

const endTime = () =>{
    return axios.put(`${API_URL}setStopTime`)
}


const DataService ={
    getAllData,
    startTime,
    endTime,
};

export default DataService;