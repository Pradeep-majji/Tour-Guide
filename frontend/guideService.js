import axios from "axios";
class guideService
{
    static getGuides(place)
    {
        return axios.get(`http://localhost:8081/guideDetails/${place}`);
    }
    static getHistory(id)
    {
        return axios.get(`http://localhost:8081/history/${id}`)
    }
    static getId(email)
    {
        return axios.get(`http://localhost:8081/id/${email}`)
    }
    static bookGuide(fromdata)
    {
        return axios.post(`http://localhost:8081/bookGuide`,fromdata)
    }
}
export default guideService;