import Featured from "../../Components/Featured/Featured";
import FeaturedProperties from "../../Components/FeaturedProperties/FeaturedProperties";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import PropertyList from "../../Components/PropertyList/PropertyList";
import "./Home.css";

const Home = () => {
    return (
        <div>
         <Navbar></Navbar>
         <Header></Header>
         <div className="homeContainer">
             <Featured></Featured>
             <h1 className="homeTitle">
                Browse by property type
             </h1>
             <PropertyList></PropertyList>
             <h1 className="homeTitle">
            Home Guest Love
             </h1>
         <FeaturedProperties></FeaturedProperties>
         </div>
        </div>
    );
};

export default Home;