import Header from "../components/Header"
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../global.css"

export default function Home() {
    return(
        <div>
            <Header/>
            <h1>meu site de cd</h1>  
            <Link to="/produtos">
            <h3>comprar</h3>
            </Link>
            <Carousel
            infiniteloop
            useKeyboardArrows
            autoPlay
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            dynamicHeight
            className="carrosas"
            >
                <div className="imagem1">
                    <img className="imagem1" src="public\uatizapi.jpg"></img>
                </div>
                <div className="imagem2">
                    <img className="imagem2" src="public\frogstomp.jpg"></img>
                </div>
            </Carousel>
        </div>
    )
}