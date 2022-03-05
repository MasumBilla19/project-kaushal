import About from "../components/HomePage/About";
import FindStyle from "../components/HomePage/FindStyle";
import Hero from "../components/HomePage/Hero";
import Products from "../components/HomePage/Products";
import Sell from "../components/HomePage/Sell";
import Seller from "../components/HomePage/Seller";
import Community from "../components/HomePage/Community";

const HomePage = () => {
    return (
        <main id="main_area">
            <Hero />
            <About />
            <FindStyle />
            <Products />
            <Sell />
            <Seller />
            <Community />
        </main>
    );
};

export default HomePage;