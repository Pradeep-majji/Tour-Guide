import axios from "axios";

class Service{
    static getUsers(g_id)
    {
        return axios.get(`http://localhost:8081/guide/guideHome/${g_id}`);
    }
    static getHistory(g_id)
    {
        return axios.get(`http://localhost:8081/guide/guideHistory/${g_id}`)
    }
}
export default Service;