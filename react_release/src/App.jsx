import './App.css'
import Menu from './components/Menu/Menu'
import Infocard from './components/Infocard/infocard'
import MainSection from './components/MainSection/MainSection'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Menu/>
        <Infocard/>
        <Routes>
          <Route path = '/' element={<MainSection/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App