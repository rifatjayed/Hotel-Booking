import Featured from "../../Components/Featured/Featured";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";

const Home = () => {
    return (
        <div>
         <Navbar></Navbar>
         <Header></Header>
         <div className="homeContainer">
             <Featured></Featured>
         </div>
        </div>
    );
};

export default Home;