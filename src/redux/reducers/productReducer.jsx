const initialState = {
    produits: [
        { "id": 1, "nom": "Rose", "img": "/products/b6c5efaf580823ffa186dc75e4df5cf1.jpg", "prix": 15, "stock": 10 },
        { "id": 2, "nom": "Tulip", "img": "/products/493022d455070861e46d7298036190a4.jpg", "prix": 10, "stock": 20 },
        { "id": 3, "nom": "Sunflower", "img": "/products/5688adc05ce02d64738b5ba82a7fc6e3.jpg", "prix": 8, "stock": 15 },
        { "id": 4, "nom": "Orchid", "img": "/products/f6e45463922b386c9efaac9934152445.jpg", "prix": 12, "stock": 30 },
        { "id": 5, "nom": "Lily", "img": "/products/2cfa589c66970b1468e5d0fa6f80ae94.jpg", "prix": 25, "stock": 8 },
        { "id": 6, "nom": "Daisy", "img": "/products/754bca2bb64fbcc240d4c1ddb0319d33.jpg", "prix": 5, "stock": 25 },
        { "id": 7, "nom": "Lavender", "img": "/products/c5ca2b1eaf15a41f4486c9e8527eca0a.jpg", "prix": 20, "stock": 69 },
        { "id": 8, "nom": "Violet", "img": "/products/3fc7215a989943d3c5ec2bc7b205ccb1.jpg", "prix": 20, "stock": 26 },
        { "id": 9, "nom": "Jasmine", "img": "/products/51447fcb86eff8e63a7742b77ec9d5a8.jpg", "prix": 18, "stock": 22 }
    ]
    
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUITS':
            return { ...state, produits: action.payload };
        case 'DIMINUER_STOCK':
            return {
                ...state,
                produits: state.produits.map((produit) => {
                    const commande = action.payload.find((item) => item.id === produit.id);
                    if (commande) {
                        return { ...produit, stock: produit.stock - commande.quantite };
                    }
                    return produit;
                }),
            };
            case 'MODIFIER_QUANTITE':
            return {
                ...state,
                produits: state.produits.map((produit) =>
                    produit.id === action.payload.productId
                        ? { ...produit, stock: action.payload.newStock }
                        : produit
                ),
            };
            
        default:
            return state;
    }
};

export default productReducer;
