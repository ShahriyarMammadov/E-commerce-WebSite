import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './assets/pages/homePage'
import Header from './assets/layout/header'
import Footer from './assets/layout/footer'
import ErrorPage from './assets/pages/errorPage'

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
