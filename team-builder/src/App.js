import React, { useState } from 'react'
import Form from './Components/Form'
import './App.css';

function App() {
  const initialFormValues  = {
    name: '',
    email: '',
    role: '',
  }
  const [users, setUsers] = useState([])
  const [teamMembers, setTeamMembers] = useState(initialFormValues)

  function handleChange(event){
    setTeamMembers({...teamMembers, [event.target.name]: event.target.value})
  }

  function handleSubmit(event){
    event.preventDefault()
    setTeamMembers(initialFormValues)
  }

  function teamInfo(event){
    setUsers([...users, teamMembers])
  }
  return (
    <div className='App'>
      <h1>Team Builder App</h1>
      <Form 
        users={users}
        teamMembers={teamMembers}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        teamInfo={teamInfo}
      />
      {users.map((user, index)=> (
        <div key={index}>
          <h2>{user.name}</h2>
          <h2>{user.email}</h2>
          <h2>{user.role}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
