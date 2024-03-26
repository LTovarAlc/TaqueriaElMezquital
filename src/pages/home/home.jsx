import "./home.css"
import React from "react"
import Header from "../../components/header/header"
import Location from "./components/location/location"

const Home = () => {
    return(
        <section className="home">
            {/* <Header/> */}
            <Location/>
        </section>
    )
}

export default Home