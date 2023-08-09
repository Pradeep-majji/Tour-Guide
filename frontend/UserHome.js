import React, { useEffect, useState } from 'react';
import User from './User'; // Assuming User component is defined in a separate file
import LoginService from '../LoginService'; // Assuming LoginService is imported properly
import NavbarUser from './NavbarUser';

const UserHome = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await LoginService.displayUser();
        setUserData(result.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <NavbarUser/>

      {userData.map((user) => (
        <User key={user.g_id} details={user} />
      ))}
    </div>
  );
};

export default UserHome;
