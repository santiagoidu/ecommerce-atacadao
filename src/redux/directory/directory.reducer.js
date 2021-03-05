const INITIAL_STATE = {
    sections: [{
        title: 'Celulares',
        imageUrl: 'https://i.ibb.co/MG7SYQF/PBCG3T0.jpg',
        id: 1,
        linkUrl: 'shop/hats'
    },
    {
        title: 'Smartwatch',
        imageUrl: 'https://i.ibb.co/B65vt4W/jovem-casal-alegre-olhando-para-o-smartwatch-171337-36630.jpg',
        id: 2,
        linkUrl: 'shop/jackets'
    },
    {
        title: 'Acessórios',
        imageUrl: 'https://i.ibb.co/tHj7Qxv/banco-de-potencia-dourada-com-cabo-smartphone-vermelho-com-tela-preta-em-branco-caixa-com-fones-de-o.jpg',
        id: 3,
        linkUrl: 'shop/sneakers'
    },
    {
        title: 'Assistência Técnica',
        imageUrl: 'https://i.ibb.co/SPwVVwL/o-tecnico-que-repara-a-placa-mae-do-smartphone-no-laboratorio-conceito-de-telefone-movel-eletronico.jpg',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
    },
    {
        title: 'Distribuidora',
        imageUrl: 'https://i.ibb.co/Y38PDd8/trabalhador-de-armazem-usando-scanner-107420-59414.jpg',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
    }]
}


const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}
export default directoryReducer