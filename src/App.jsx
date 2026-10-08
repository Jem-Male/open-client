import { useState, useEffect } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'
// import { API_KEY, BASE_URL } from './config/config'
// import { GetCount } from './api/get'

import Credits from './components/Credits/GetCredits'
import Models from './components/Models/GetModels'

function App() {
  // // const [count, setCount] = useState(0)
  // useEffect(() =>{
  //   GetCount(BASE_URL, API_KEY);
  // }, []);
  return (
    <>
      <h1>Hello!</h1>
      <br />
      <br />
      <Credits/>
      <br />
      <br />
      <Models/>
    </>
  )
}

export default App
