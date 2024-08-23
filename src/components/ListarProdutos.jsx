export default function ListarProdutos({lista}) {
    return(
        <div className="bloco-produtos">
                {
                    lista.map((produto) =>
                        <div class="produta" key={produto.id}>
                            <img class="produtoimg" src={produto.imagem} alt={produto.item} />
                            <p class="nomeCD">{produto.item}</p>
                            <p class="infoCD">{produto.artista + " - " + produto.data}</p>
                            <p class="precoCD">{produto.preco}</p>
                        </div>
                    )
                }
            </div>
    );
}