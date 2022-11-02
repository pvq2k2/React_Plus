// import logo from './logo.svg';
// import './App.css';

import { useEffect, useState } from "react";
import Home from "./pages/Home";
import { getAllUser } from "./services/users";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const users = await getAllUser();
      setUsers(users)
    }
    getUser();
  }, [])


  return (
    <>
      <Home dataUser={users}/>
    </>
  );
}

export default App;
