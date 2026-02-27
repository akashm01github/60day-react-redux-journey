import React, { useEffect, useState } from 'react'
import axios from "axios";
const App = () => {

  const [data, setData] = useState([]);

  const [name, setUserName] = useState('');

  const [email, setEmail] = useState('');

  const [age, setAge] = useState(0)




  console.log(data);


  //! ================= POST ADD USER (BONUS) =================
  const addUser = async () => {
    try {
      const res = await axios.post("http://localhost:3000/users", {
        name,
        email,
        age
      });

      fetchData();

      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };


  const handelClick = () => {
    addUser()
  }

   //! ================= PATCH =================
  const updateAge = async (id) => {
    try {
      await axios.patch(`http://localhost:3000/users/${id}`, {
        age: 30
      });

      // fetchData(); // refresh UI
    } catch (error) {
      console.error(error);
    }
  };

  updateAge('9fb3')


  //! ================= DELETE (BONUS) =================
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      // fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  // deleteUser(8712)


  //! ================= GET DATA (BONUS) =================
  async function fetchData() {
    const response = await axios.get(`http://localhost:3000/users`);
    setData(response.data)
  }



  useEffect(() => {
    fetchData()
  }, [])




  return (
    <div>
      <h1>Hello</h1>
      <div>
        <input onChange={(e) => setUserName(e.target.value)} type="text" placeholder='Enter Name' />
        <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Enter Email' />
        <input onChange={(e) => setAge(e.target.value)} type="number" placeholder='Enter Age' />
        <button onClick={handelClick}>Add Data</button>
      </div>
      <div>
        {
          data.map((user, idx) => {
            return <p key={user.id}>{user.name}</p>
          })
        }
      </div>
    </div>
  )
}

export default App