import "./home.css"
import React from "react"
import Header from "../../components/header/header"
import Location from "./components/location/location"
import Reviews from "./components/reviews/reviews"
import Footer from "../../components/footer/footer"
import About from "./components/about/about"

const Home = () => {
    return(
        <section className="home">
            <Header/>
            {/* <About/> */}
            <Location/>
            <Reviews/>
            <Footer/>
        </section>
    )
}

export default Home