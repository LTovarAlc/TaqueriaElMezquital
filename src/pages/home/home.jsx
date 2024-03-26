import "./home.css"
import React from "react"
import Header from "../../components/header/header"
import Location from "./components/location/location"
import Reviews from "./components/reviews/reviews"

const Home = () => {
    return(
        <section className="home">
            <Header/>
            <Location/>
            <Reviews/>
            <section className="resto"></section>
        </section>
    )
}

export default Home