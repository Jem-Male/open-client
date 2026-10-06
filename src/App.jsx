import { useState, useEffect } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'
// import { API_KEY, BASE_URL } from './config/config'
// import { GetCount } from './api/get'
import {Count} from './components/GetCount'

function App() {
  // // const [count, setCount] = useState(0)
  // useEffect(() =>{
  //   GetCount(BASE_URL, API_KEY);
  // }, []);
  return (
    <>
      <h1>Hello!</h1>
      <Count/>
    </>
  )
}

export default App
