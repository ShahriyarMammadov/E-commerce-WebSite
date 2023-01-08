import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './assets/pages/homePage'
import Header from './assets/layout/header'
import Footer from './assets/layout/footer'

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
