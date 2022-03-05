import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import AllProduct from "../pages/AllProduct";
import Brand from "../pages/Brand";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

const Routers = () => {
  return(
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/all-product" element={<AllProduct />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
};

export default Routers;