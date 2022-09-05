const apiBASE = import.meta.env.VITE_API;
const apiKEY = import.meta.env.VITE_API_KEY;


async function fetchBase(url) {

    const response = await fetch(`${apiBASE}${url}`);

    const data = await response.json();

    return data.results;  

}


export default {

    getlistaSeries: async () => {

        const lista = await fetchBase(`/discover/tv?with_network=213&language=pt-BR&${apiKEY}`);

        return lista

    },

    getlistaTreding: async () => {

        const lista = await fetchBase(`/trending/all/week?language=pt-BR&${apiKEY}`);

        return lista

    },

    getlistaAcao: async () => {

        const lista = await fetchBase(`/discover/movie?with_genres=28&language=pt-BR&${apiKEY}`);

        return lista

    },




      
  /*   getlistaFilmes: async () => {
        return [
            {
                slug: 'netflix',
                titulo: 'netflix',
                itens: await fetchBase(`/discover/tv?with_network=213&language=pt-BR&${apiKEY}`)
                
            },

            {
                slug: 'recomendados',
                titulo: 'recomendados',
                itens: await fetchBase2()
                
            },

            {
                slug: 'Em alta',
                titulo: 'netflix',
                itens: await fetchBase(`/movie/top_rated?language=pt-BR&${apiKEY}`)
            },

            {
                slug: 'acao',
                titulo: 'Ação',
                itens: await fetchBase(`/discover/movie?with_genres=28&language=pt-BR&${apiKEY}`)
            },

            {
                slug: 'comedia',
                titulo: 'Comedia',
                itens: await fetchBase(`/discover/movie?with_genres=35&language=pt-BR&${apiKEY}`)
            },

            {
                slug: 'documentario',
                titulo: 'Documentarios',
                itens: await fetchBase(`/discover/movie?with_genres=99&language=pt-BR&${apiKEY}`)
            },

            {
                slug: 'terror',
                titulo: 'Terror',
                itens: await fetchBase(`/discover/movie?with_genres=27&language=pt-BR&${apiKEY}`)
            },

        ];
    }
 */
}