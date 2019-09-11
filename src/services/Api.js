import axios from 'axios';

const api = axios.create({
    baseURL: 'http://www.ulbratorres.com.br/biblioUlbra'
});

export default api;

export async function getUser(cgu){
    const response = await api.get(`/?funcao=l&cgu=${cgu}`);
    const { data } = response;
    return data;
}

export async function getRantedBooks(cgu){
    const response = await api.get(`/?funcao=e&cgu=${cgu}`);
    const { data } = response;
    return data;
}

export async function getHistory(cgu){
    const response = await api.get(`/?funcao=h&cgu=${cgu}`);
    const { data } = response;
    return data;
}

export async function getAllData(cgu){
    const response = await axios.all([
        getUser(cgu),
        getRantedBooks(cgu),
        getHistory(cgu)
    ])
    .then(
        axios.spread(
            (user, rantedBooks, history) =>{
                return{
                    user,
                    rantedBooks,
                    history
                }
            }
        )
    )
    return response;
};

export async function searchBooks(pag='' , cookie= '', params = {}){
    params.busca = encodeURI(params.busca);

    const response = await api.get(`/?funcao=b&busca=${params.busca}&mater=${params.mater}&local=${params.local}&campo=${params.campo}&idioma=${params.idioma}&cookie=${cookie}&pag=${pag}`);

    const { data } = response;

    return data;
    
    
}