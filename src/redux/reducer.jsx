const initialState = {
    produits: [],
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
                produits: action.payload.data.produits, 
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
