import './App.css'
import TopBar from "./components/topBar/react/TopBar.tsx";
import TopMenu from "./components/topMenu/react/TopMenu.tsx";
import FeaturedProducts from "./components/featuredProducts/react/FeaturedProducts.tsx";
import NewArrivals from "./components/newArrivals/react/NewArrivals.tsx";
import Footer from "./components/footer/react/Footer.tsx";
import Socials from "./components/socials/react/Socials.tsx";

function App() {
    return (
        <>
            <TopBar/>
            <TopMenu/>
            <FeaturedProducts/>
            <NewArrivals/>
            <Socials/>
            <Footer/>
            <></>
        </>
    )
}

export default App
