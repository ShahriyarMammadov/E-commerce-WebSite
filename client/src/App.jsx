import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./assets/pages/homePage";
import Header from "./assets/layout/header";
import Footer from "./assets/layout/footer";
import ErrorPage from "./assets/pages/errorPage";
import BestSellers from "./assets/pages/homePage/bestSellers";
import NewArrivals from "./assets/pages/homePage/newArrivals";
import SpecialDeals from "./assets/pages/homePage/specialDeals";
import Featured from "./assets/pages/homePage/features";
import WishList from "./assets/pages/wishListPages";
import DetailPage from "./assets/pages/detailPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/bestSellers" element={<BestSellers />} />
          <Route path="/" element={<Featured />} />
          <Route path="/newArrivals" element={<NewArrivals />} />
          <Route path="/specialDeals" element={<SpecialDeals />} />
          <Route path="/wishList" element={<WishList />} />
          <Route path="*" element={<ErrorPage />}></Route>
          <Route path="/detailPage/:id" element={<DetailPage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
