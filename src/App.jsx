// Import hooks
import { useEffect } from 'react'
// Import styles
import './App.css'
// Import Components
import Header from './components/Header'
import Email from './components/Email'
import { useUserDispatch } from './redux/DispatchUtils'
import {
  Card,
  CardBody,
  CardFooter, Center, Divider, FormControl, Text
} from '@chakra-ui/react'

function App() {
  const { dispatchAddUser } = useUserDispatch();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(data => dispatchAddUser(data))
      .catch(err => console.log(err))
  });

  return (
        <Center h='100vh'>
          <Card width='50%' size='lg' align='center'>
            <CardBody>
              <FormControl>
                <Header />
                <Email />
              </FormControl>
            </CardBody>
            <Divider width='95%' borderColor='#008000a1' />
            <CardFooter>
              <Text align='center' fontSize='xs'>from David Demetrio López Paz - Software Developer</Text>
            </CardFooter>
          </Card>
        </Center>
  )
}

export default App;