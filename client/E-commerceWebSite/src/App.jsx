import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './assets/pages/homePage'
import Header from './assets/layout/header'
import Footer from './assets/layout/footer'
import ErrorPage from './assets/pages/errorPage'
import BestSellers from './assets/pages/homePage/bestSellers'
import NewArrivals from './assets/pages/homePage/newArrivals'
import SpecialDeals from './assets/pages/homePage/specialDeals'
import Featured from './assets/pages/homePage/features'

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}>
          <Route path='/bestSellers' element={<BestSellers />} />
          <Route path='/' element={<Featured />} />
          <Route path='/newArrivals' element={<NewArrivals />} />
          <Route path='/specialDeals' element={<SpecialDeals />} />
        </Route>
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App