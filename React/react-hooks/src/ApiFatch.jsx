import React, { useEffect, useState } from 'react';

const ApiFetch = () => {
  const api = "https://jsonplaceholder.typicode.com/users";
  const [userData, setUserData] = useState([]);
  const [loading, setLoading]  = useState(true)
  useEffect(() => {
    fetch(api)
      .then((rawdata) => rawdata.json())
      .then((res) =>{ setUserData(res) 
        setLoading(false)} )
      .catch((err) => console.log(err));
  }, []);

  if(loading) return <p>Loading Data........</p>
      return (
    <>
      <div>
        {
        userData.slice(0, 10).map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    </>
  );
};

export default ApiFetch;
