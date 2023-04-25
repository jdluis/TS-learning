import { useEffect, useState } from 'react'
import './App.css'
import List from './components/List';

const INIIAL_STATE = [
  {
    nick: "Pac7",
    phone: 609383875,
    isActive: false,
    avatar: ""
  },
  {
    nick: "Ret",
    phone: 609383875,
    isActive: true,
    description: "Pepe juan el maquina"
  }
];

// Create a custom type
interface User {
  nick: string;
  phone: number;
  isActive: boolean;
  description?: string;
  avatar?: string;
}

interface Car {
  name: string;
  model: string;
  price: number;
  color?: string;
}

interface AppState {
  users: Array<User>;
  cars: Array<Car>;
}

function App() {
  const [count, setCount] = useState<number>(5) //<the type o the result tha we expect>

  // 3 differens ways of declare result type:
  //const [users, setUsers] = useState<User[]>([])
  //const [users, setUsers] = useState<Array<User>>([])
  const [users, setUsers] = useState<AppState['users']>([])

  const [cars, setCars] = useState<AppState['cars']>([])

  useEffect(() => {
    return setUsers(INIIAL_STATE);
  }, [])
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
          <List users={users}>Children Here</List>
        </div>
      </div>

    </>
  )
}

export default App
