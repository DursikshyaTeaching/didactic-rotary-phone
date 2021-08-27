import axios from "axios";

export const axiosClient = new axios.create({
    baseURL:"https://localhost:44351/api",
    withCredentials:true,
    headers:{
        "content-type": "application/json"
    }
})