// Import hooks
import { useEffect } from 'react'
// Import styles
import './App.css'
// Import Components
import Header from './components/Header'
import Email from './components/Email'
import { useUserDispatch } from './redux/DispatchUtils'

function App() {
  const { dispatchAddUser } = useUserDispatch();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(data => dispatchAddUser(data))
      .catch(err => console.log(err))
  }, []);

  return (
    <>
      <Header />
      <Email />
    </>
  )
}

export default App;