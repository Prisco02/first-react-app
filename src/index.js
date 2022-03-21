import Header from "./js/Header.js"
import Products from "./js/Products.js"
import React from "react"
import ReactDOM from "react-dom"
import "./css/style.css"

function ImgHeader(){
const time = (new Date()).getHours()

    return(
        <div className="header__image">
            <div className="header__image__text">BUY YOUR CUBE <br/> AT {time}</div>
        </div>
    )
}

function Footer(){
    return(
        <div className="footer">
            <form method="POST">
                <input type="submit" name="DeleteCookie" value="Cancella Cookie" />
            </form>
        </div>
    )
}

function App(){
    return (
        <div>
            <Header img="propic.png"/>
            <ImgHeader/>
            <Products/>
            <Footer/>
        </div>
    )
}

ReactDOM.render(<App />,document.getElementById("root"))