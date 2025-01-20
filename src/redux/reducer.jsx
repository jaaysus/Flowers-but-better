const initialState = {
    produits: [
        { "id": 1, "nom": "Rose", "img": "https://i.pinimg.com/736x/b6/c5/ef/b6c5efaf580823ffa186dc75e4df5cf1.jpg", "prix": 15, "stock": 10 },
        { "id": 2, "nom": "Tulip", "img": "https://i.pinimg.com/736x/49/30/22/493022d455070861e46d7298036190a4.jpg", "prix": 10, "stock": 20 },
        { "id": 3, "nom": "Sunflower", "img": "https://i.pinimg.com/736x/56/88/ad/5688adc05ce02d64738b5ba82a7fc6e3.jpg", "prix": 8, "stock": 15 },
        { "id": 4, "nom": "Orchid", "img": "https://i.pinimg.com/736x/f6/e4/54/f6e45463922b386c9efaac9934152445.jpg", "prix": 12, "stock": 30 },
        { "id": 5, "nom": "Lily", "img": "https://i.pinimg.com/736x/2c/fa/58/2cfa589c66970b1468e5d0fa6f80ae94.jpg", "prix": 25, "stock": 8 },
        { "id": 6, "nom": "Daisy", "img": "https://i.pinimg.com/736x/75/4b/ca/754bca2bb64fbcc240d4c1ddb0319d33.jpg", "prix": 5, "stock": 25 },
        { "id": 7, "nom": "Lavender", "img": "https://i.pinimg.com/736x/c5/ca/2b/c5ca2b1eaf15a41f4486c9e8527eca0a.jpg", "prix": 20, "stock": 69 },
        { "id": 8, "nom": "Violet", "img": "https://i.pinimg.com/736x/3f/c7/21/3fc7215a989943d3c5ec2bc7b205ccb1.jpg", "prix": 20, "stock": 26 },
        { "id": 9, "nom": "Jasmine", "img": "https://i.pinimg.com/736x/51/44/7f/51447fcb86eff8e63a7742b77ec9d5a8.jpg", "prix": 18, "stock": 22 }
    
    ]
    ,
    panier: [],
    utilisateurs: [
        { 
            id: 1, 
            username: "kuro",
            email: 'kuro@gmail.com', 
            password: '12345', 
            isAdmin: true
          },

          { 
            id: 2, 
            username: "kibo",
            email: 'kibo@gmail.com', 
            password: '12345', 
            isAdmin: false
          }

    ],
    dernierId: 3,

    filtre: {
    tri: '',
    intervalle: { min: 0, max: Infinity },
    },
    currentUser: null,
    loginError: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'AJOUTER_UTILISATEUR':
            const nouvelId = state.dernierId + 1; 
            const nouvelUtilisateur = { ...action.payload, id: nouvelId };
            return {
                ...state,
                utilisateurs: [...state.utilisateurs, nouvelUtilisateur],
                dernierId: nouvelId,
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                currentUser: action.payload,
                loginError: null, 
            };

        case 'LOGIN_FAILURE':
            return {
                ...state,
                currentUser: null,
                loginError: action.payload, 
            };
        case 'SET_PRODUITS':
            return {
                ...state,
                produits: action.payload, 
            };
            

        case 'AJOUTER_AU_PANIER':
            const produitExistant = state.panier.find((item) => item.id === action.payload.id);
            if (produitExistant) {
                return {
                    ...state,
                    panier: state.panier.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, quantite: item.quantite + action.payload.quantite }
                            : item
                    ),
                };
            }
            return {
                ...state,
                panier: [...state.panier, action.payload],
            };

        case 'MODIFIER_QUANTITE':
            return {
                ...state,
                panier: state.panier.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantite: action.payload.quantite }
                        : item 
                ),
            };

    
        case 'SUPPRIMER_DU_PANIER':
            return {
                ...state,
                panier: state.panier.filter((item) => item.id !== action.payload.id),
            };

        case 'VIDER_PANIER':
            return { ...state, panier: [] };

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

        case 'APPLIQUER_FILTRE':
            return { ...state, filtre: action.payload };

        default:
            return state;
    }
};

export default reducer;