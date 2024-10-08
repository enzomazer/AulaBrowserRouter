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
            item: "Nevermind",
            imagem: "https://m.media-amazon.com/images/I/71DQrKpImPL._AC_UL320_.jpg",
            artista: "Nirvana",
            gravadora: "DGC Records",
            gênero: ["Grunge", "Rock Alternativo"],
            data: "1991",
            preco: "R$ 45,99"
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
            item: "Ten",
            imagem: "https://upload.wikimedia.org/wikipedia/pt/d/da/Pearl_Jam_-_Ten.jpg",
            artista: "Pearl Jam",
            gravadora: "Sony Entertainment",
            gênero: ["Grunge", "Hard Rock", "Rock Clássico"],
            data: "1990",
            preco: "R$ 49,99"
        },
        {
            id: 4,
            item: "Siamese Dream",
            imagem: "https://upload.wikimedia.org/wikipedia/pt/6/69/Siamese_Dream.jpg",
            artista: "Smashing Pumpkins",
            gravadora: "Virgin Records",
            gênero: ["Rock Alternativo", "Rock"],
            data: "1993",
            preco: "R$ 79,99"
        },
        {
            id: 5,
            item: "The Bends",
            imagem: "https://upload.wikimedia.org/wikipedia/pt/b/bf/TheBends.jpg",
            artista: "Radiohead",
            gravadora: "Pharlophone Records",
            gênero: ["Rock Alternativo", "Rock"],
            data: "1995",
            preco: "R$ 42,99"
        },
        {
            id: 6,
            item: "Bleach",
            imagem: "https://monorailmusic.com/wp-content/uploads/2022/02/bleach.png",
            artista: "Nirvana",
            gravadora: "Sub Pop",
            gênero: ["Grunge", "Rock Alternativo", "Indie Rock", "Punk Rock"],
            data: "1989",
            preco: "R$ 39,99"
        },
        {
            id: 7,
            item: "In Utero",
            imagem: "https://m.media-amazon.com/images/I/710XKXHIeNL._UF1000,1000_QL80_.jpg",
            artista: "Nirvana",
            gravadora: "DGC Records",
            gênero: ["Grunge", "Rock Alternativo", "Punk Rock"],
            data: "1993",
            preco: "R$ 61,99"
        },
        {
            id: 8,
            item: "Mellon Collie",
            imagem: "https://m.media-amazon.com/images/I/8122Mvlp-vL._UF1000,1000_QL80_.jpg",
            artista: "Smashing Pumpkins",
            gravadora: "Virgin Records",
            gênero: ["Rock Alternativo", "Folk Rock"],
            data: "1995",
            preco: "R$ 91,99"
        },
        {
            id: 9,
            item: "Adore",
            imagem: "https://m.media-amazon.com/images/I/61ggCLFwo3L._AC_UF1000,1000_QL80_.jpg",
            artista: "Smashing Pumpkins",
            gravadora: "Hut Recordings",
            gênero: ["Rock Alternativo", "Rock"],
            data: "1998",
            preco: "R$ 64,99"
        },
        {
            id: 10,
            item: "Frogstomp",
            imagem: "https://m.media-amazon.com/images/I/71Orao9tmZL._UF1000,1000_QL80_.jpg",
            artista: "Silverchair",
            gravadora: "Murmur Records",
            gênero: ["Metal", "Rock"],
            data: "1995",
            preco: "R$ 46,99"
        },
        {
            id: 11,
            item: "Pablo Honey",
            imagem: "https://upload.wikimedia.org/wikipedia/en/0/0f/Radiohead.pablohoney.albumart.jpg",
            artista: "Radiohead",
            gravadora: "Pharlophone Records",
            gênero: ["Rock Alternativo", "Rock"],
            data: "1993",
            preco: "R$ 57,99"
        },
        {
            id: 12,
            item: "OK Computer",
            imagem: "https://upload.wikimedia.org/wikipedia/pt/2/27/Okcomputer.jpg",
            artista: "Radiohead",
            gravadora: "Pharlophone Records",
            gênero: ["Rock Alternativo", "Rock"],
            data: "1997",
            preco: "R$ 72,99"
        },
        {
            id: 13,
            item: "Vs.",
            imagem: "https://upload.wikimedia.org/wikipedia/pt/8/8b/Pearl_Jam_-_Vs..jpg",
            artista: "Pearl Jam",
            gravadora: "Epic Records",
            gênero: ["Grunge", "Rock Clássico", "Hard Rock"],
            data: "1993",
            preco: "R$ 53,99"
        },
        {
            id: 14,
            item: "Dirt",
            imagem: "https://m.media-amazon.com/images/I/81g0YcT68pL._AC_UF1000,1000_QL80_.jpg",
            artista: "Alice in Chains",
            gravadora: "Columbia Records",
            gênero: ["Grunge", "Hard Rock"],
            data: "1992",
            preco: "R$ 59,99"
        },
        {
            id: 15,
            item: "Facelift",
            imagem: "https://m.media-amazon.com/images/I/713RLUyugAL._UF1000,1000_QL80_.jpg",
            artista: "Alice in Chains",
            gravadora: "Columbia Records",
            gênero: ["Grunge", "Hard Rock", "Heavy Metal"],
            data: "1995",
            preco: "R$ 42,99"
        },
    ]);

    return(
        <div>
            <header>
                <Header/>
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