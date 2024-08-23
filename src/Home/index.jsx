import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../global.css"
import { useState } from "react";
import ListarProdutos from "../components/ListarProdutos";




export default function Home() {
    const [listaCDs, setCDs] = useState([
        {
            id: 1,
            item: "Frogstomp",
            imagem: "https://m.media-amazon.com/images/I/71Orao9tmZL._UF1000,1000_QL80_.jpg",
            artista: "Silverchair",
            gravadora: "Murmur Records",
            gênero: ["Metal", "Rock"],
            data: "1995",
            preco: "R$ 46,99"
        },
        {
            id: 2,
            item: "Jar of Flies",
            imagem: "https://m.media-amazon.com/images/I/61GpviCqvdL._AC_UL320_.jpg",
            artista: "Alice in Chains",
            gravadora: "Columbia Records",
            gênero: ["Grunge", "Hard Rock", "Acústico"],
            data: "1994",
            preco: "R$ 55,99"
        },
        {
            id: 3,
            item: "Siamese Dream",
            imagem: "https://upload.wikimedia.org/wikipedia/pt/6/69/Siamese_Dream.jpg",
            artista: "Smashing Pumpkins",
            gravadora: "Virgin Records",
            gênero: ["Rock Alternativo", "Rock"],
            data: "1993",
            preco: "R$ 79,99"
        },
        {
            id: 4,
            item: "The Bends",
            imagem: "https://upload.wikimedia.org/wikipedia/pt/b/bf/TheBends.jpg",
            artista: "Radiohead",
            gravadora: "Pharlophone Records",
            gênero: ["Rock Alternativo", "Rock"],
            data: "1995",
            preco: "R$ 42,99"
        },
        {
            id: 5,
            item: "Ten",
            imagem: "https://upload.wikimedia.org/wikipedia/pt/d/da/Pearl_Jam_-_Ten.jpg",
            artista: "Pearl Jam",
            gravadora: "Sony Entertainment",
            gênero: ["Grunge", "Hard Rock", "Rock Clássico"],
            data: "1990",
            preco: "R$ 49,99"
        },
    ]);

    return(
        <div>
            <header>
                <Header/>
                <Carousel
infiniteloop={true}
useKeyboardArrows
autoPlay={true}
showArrows={true}
showStatus={false}
showThumbs={false}
dynamicHeight
>
    <div>
        <img className="imagens" src="public\cds.png"></img>
    </div>
    <div>
        <img className="imagens" src="public\cds2.png"></img>
    </div>
</Carousel>
            </header>
            <body>
                <ListarProdutos lista={listaCDs}/>
            </body>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}