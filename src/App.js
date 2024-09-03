import LoginForm from "./Auth/LoginForm";
import Register from "./Auth/Register";
import Header from "./Header";
import HomePage from "./Home/HomePage";
import Navbar2 from "./Navbar2";
import { HashRouter, Route, Routes } from "react-router-dom";
import Wishlist from "./Wishlist";
import ViewCart from "./Cart/ViewCart";
import ProductDetails from "./product/ProductDetails";
import SearchPage from "./search/SearchPage";
import MyProfile from "./user/MyProfile";
import MyAddress from "./user/MyAddress";
import MyFavourates from "./user/MyFavourates";
import ChangeMyPassword from "./user/ChangeMyPassword";

function App() {
  return (
    <div>
      <Header />
      <Navbar2 />

      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/Rigister" element={<Register />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/ViewCart" element={<ViewCart />} />
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/MyProfile" element={<MyProfile />} />
          <Route path="/MyAddresses" element={<MyAddress />} />
          <Route path="/MyFavourates" element={<MyFavourates />} />
          <Route path="/changePassword" element={<ChangeMyPassword />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
