import React from 'react'
import ReactDOM from 'react-dom/client'
// Para poder englobar toda nuestra aplicacion en nuestros componentes hijos
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { store } from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
)