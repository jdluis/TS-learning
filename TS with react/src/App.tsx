import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState<number>(5)
  const [users, setUsers] = useState([
    {
      nick: "Pac7",
      phone: 609383875,
      isActive: false,
    },
    {
      nick: "Ret",
      phone: "609383875",
      isActive: true,
      description: "Pepe juan el maquina"
    }
  ])


  const handleCount = () => {
    setCount(count + 1)
  }
  return (
    <>
      <div>
        <h1>Learning TS wiht React</h1>
        <div>
          {count}
          <button onClick={handleCount}>Add</button>
        </div>

        <div>
          <h4>Users</h4>
          <ul>
            {
              users.map(user => {
                return (
                  <li key={user.nick}>
                    <h6>{user.nick}</h6>
                    <p>{user.description?.substring(0, 100)}</p>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>

    </>
  )
}

export default App
