

import { useEffect } from "react";
import Products from "../../Products/Products";
import Reviews from "../../Reviews/Reviews";
import Banner from "../Banner/Banner";
import ReactTabs from "../ReactTabs/ReactTabs";
import Gallery from "../gallery/Gallery";





const Home = () => {
    useEffect(()=>{
        document.title = "| Home"
    })
    return (
        <div>
       <Banner></Banner>
       <Gallery></Gallery>
       <ReactTabs></ReactTabs>
       <Products></Products>

      <Reviews></Reviews>
     
   
        </div>
    );
};

export default Home;