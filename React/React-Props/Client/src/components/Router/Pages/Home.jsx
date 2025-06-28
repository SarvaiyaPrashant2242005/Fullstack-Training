import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const [users, setUsers] = useState([]);
  const api = "http://localhost:3001/api/users";

  useEffect(() => {
    fetch(api)
      .then(rawData => rawData.json())
      .then(data => {
        console.log(data);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            Name: {user.Username} <br />
            Email: {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
