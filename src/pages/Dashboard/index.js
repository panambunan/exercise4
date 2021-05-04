import React, { useState, useEffect } from "react";
import NavBar from "../../components/molecules/Navbar";
import Axios from "axios";
import Card from "../../components/molecules/Card";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3000/users").then((res) => setUsers(res.data));
  }, [users]);

  return (
    <div className="container">
      <NavBar />
      <h3>Dashboard</h3>
      <hr />
      <br />

      <div className="row align-items-start">
        {users.map((item) => (
          <Card
            avatar={item.avatar}
            fullName={`${item.first_name} ${item.last_name}`}
            email={item.email}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;