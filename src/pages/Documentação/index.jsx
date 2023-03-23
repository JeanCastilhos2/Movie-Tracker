import './Documentação.css';

const Documentação = () => {
    return (
        <>
            <div className="background-image">
                <div className="container">
                    <h1 className="titulo">Documentação da API Movie Tracker</h1>

                    <h2 className="subtitulo">1. Obter título</h2>
                    <div className="subtitulo-descricao">
                        Retorna as informações de um título específico.
                    </div>
                    <div className="endpoint">GET /titulo/:categoria/:id?key=AUTH_KEY</div>
                    <div className="subtitulo-parametros">Parâmetros:</div>
                    <ul>
                        <li>categoria (obrigatório): string que indica a categoria do título (filme ou série).</li>
                        <li>id (obrigatório): string que indica o ID do título a ser obtido.</li>
                    </ul>
                    <div className="subtitulo-query-params">Query Params:</div>
                    <ul>
                        <li>key (obrigatório): chave de autenticação do usuário.</li>
                    </ul>

                    <div className="respostas">
                        <h3>Respostas:</h3>
                        <ul>
                            <li>200 OK: retorna um objeto JSON com as informações do título.</li>
                            <li>401 Unauthorized: erro de autenticação do usuário.</li>
                            <li>404 Not Found: erro indicando que o título não foi encontrado.</li>
                        </ul>
                    </div>

                    <h2 className="subtitulo">2. Pesquisar títulos</h2>
                    <div className="subtitulo-descricao">
                        Retorna uma lista de títulos que correspondem a uma determinada pesquisa.
                    </div>
                    <div className="endpoint">GET /busca/:search?key=AUTH_KEY</div>
                    <div className="subtitulo-parametros">Parâmetros:</div>
                    <ul>
                        <li>search (obrigatório): string que indica a palavra ou frase a ser pesquisada.</li>
                    </ul>
                    <div className="subtitulo-query-params">Query Params:</div>
                    <ul>
                        <li>key (obrigatório): chave de autenticação do usuário.</li>
                    </ul>
                    <div className="respostas">
                        <h3>Respostas:</h3>
                        <ul>
                            <li>200 OK: retorna uma lista de objetos JSON com as informações dos títulos correspondentes à pesquisa.</li>
                            <li>401 Unauthorized: erro de autenticação do usuário.</li>
                        </ul>
                    </div>

                    <h2 className="subtitulo">3. Listar títulos por gênero</h2>
                    <div className="subtitulo-descricao">
                        Retorna uma lista de títulos de uma categoria e gênero específicos.
                    </div>
                    <div className="endpoint">GET /lista/:categoria/:genero?key=AUTH_KEY</div>
                    <div className="subtitulo-parametros">Parâmetros:</div>
                    <ul>
                        <li>categoria (obrigatório): string que indica a categoria do título (filme ou série).</li>
                        <li>genero (obrigatório): string que indica o gênero do título a ser obtido.</li>
                    </ul>
                    <div className="subtitulo-query-params">Query Params:</div>
                    <ul>
                        <li>key</li>
                    </ul>
                    <div className="subtitulo-respostas">Respostas:</div>
                    <ul>
                        <li>200 OK: retorna uma lista de objetos JSON com as informações dos títulos da categoria e gênero especificados.</li>
                        <li>401 Unauthorized: erro de autenticação do usuário.</li>
                    </ul>
                    <h1>Categorias</h1>
                    <p>Os títulos na API são classificados em duas categorias: filmes e séries.</p>
                    <h1>Gêneros de filmes</h1>
                    <ul>
                        <li>ação</li>
                        <li>aventura</li>
                        <li>animação</li>
                        <li>comédia</li>
                        <li>crime</li>
                        <li>documentário</li>
                        <li>drama</li>
                        <li>família</li>
                        <li>fantasia</li>
                        <li>história</li>
                        <li>terror</li>
                        <li>música</li>
                        <li>mistério</li>
                        <li>romance</li>
                        <li>ficção científica</li>
                        <li>cinema tv</li>
                        <li>suspense</li>
                        <li>guerra</li>
                        <li>faroeste</li>
                    </ul>
                    <h1>Gêneros de Series</h1>
                    <ul>
                        <li>ação</li>
                        <li>aventura</li>
                        <li>animação</li>
                        <li>comédia</li>
                        <li>crime</li>
                        <li>documentário</li>
                        <li>drama</li>
                        <li>família</li>
                        <li>fantasia</li>
                        <li>história</li>
                        <li>terror</li>
                        <li>música</li>
                        <li>mistério</li>
                        <li>romance</li>
                        <li>ficção científica</li>
                        <li>cinema tv</li>
                        <li>suspense</li>
                        <li>guerra</li>
                        <li>faroeste</li>
                    </ul>
                </div>
            </div >
        </>
    )
}

export default Documentação;

