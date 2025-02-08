import './App.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./routes.tsx";
import TopBar from "./components/topBar/react/TopBar.tsx";
import Footer from "./components/footer/react/Footer.tsx";

const App = () => {
  return <>
    <div className="app-container">
      <TopBar/>
      <RouterProvider router={router}/>
      <Footer/>
    </div>
  </>
};

export default App
