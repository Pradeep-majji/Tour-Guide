import axios from "axios";
class LoginService
{
    static verifyUser(uname,password)
    {
        return axios.get(`http://localhost:8081/verifyUser/${uname}/${password}`);
    }
    static addUser(formData)
    {
        return axios.post('http://localhost:8081/user', formData)
    }
    static displayUser()
    {
        return axios.get('http://localhost:8081/userHome')
    }
    static verifyGuide(uname,password)
    {  
        return axios.get(`http://localhost:8081/verifyGuide/${uname}/${password}`);
    }
}
export default LoginService;