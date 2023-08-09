import React, { useEffect, useState } from 'react'
import guideService from './travel/guideService'
import NavbarUser from './NavbarUser'
import HistoryUser from './HistoryUser'

const History = () => {
    const [userData, setUserData] = useState([]);
    const[id,setId]=useState("");

    useEffect(() => {
        const fetchData = async () => {
          try {
            const r=await guideService.getId(localStorage.getItem('email'))
            setId(JSON.stringify(r.data));
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
    
        fetchData();
      }, []);

    useEffect( ()=>{
      const fetchHistory=async ()=>{
        try {
          const result = await guideService.getHistory(id);
            setUserData(result.data);
            console.log(userData)
        } catch (error) {
          console.log(error)
        }
      };
      if(id){
        fetchHistory();
      }
    },[id]
    );

  return (
    <div>
        <NavbarUser/>
        {userData.map((user) => (
        <HistoryUser key={user.u_id} details={user} />
      ))}
    </div>
  )
}

export default History

