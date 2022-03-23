import React from "react";
import Info from "./Info.js"
import About from "./About"
import Interests from "./Interests";
import Footer from "./Footer";

function App(){
    return (
        <div className="Main--div">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}
export default App