const produits = [
        { "id": 1, "nom": "Rose", "img": "https://i.pinimg.com/736x/b6/c5/ef/b6c5efaf580823ffa186dc75e4df5cf1.jpg", "prix": 15, "stock": 10 },
        { "id": 2, "nom": "Tulip", "img": "https://i.pinimg.com/736x/49/30/22/493022d455070861e46d7298036190a4.jpg", "prix": 10, "stock": 20 },
        { "id": 3, "nom": "Sunflower", "img": "https://i.pinimg.com/736x/56/88/ad/5688adc05ce02d64738b5ba82a7fc6e3.jpg", "prix": 8, "stock": 15 },
        { "id": 4, "nom": "Orchid", "img": "https://i.pinimg.com/736x/f6/e4/54/f6e45463922b386c9efaac9934152445.jpg", "prix": 12, "stock": 30 },
        { "id": 5, "nom": "Lily", "img": "https://i.pinimg.com/736x/2c/fa/58/2cfa589c66970b1468e5d0fa6f80ae94.jpg", "prix": 25, "stock": 8 },
        { "id": 6, "nom": "Daisy", "img": "https://i.pinimg.com/736x/75/4b/ca/754bca2bb64fbcc240d4c1ddb0319d33.jpg", "prix": 5, "stock": 25 },
        { "id": 7, "nom": "Lavender", "img": "https://i.pinimg.com/736x/c5/ca/2b/c5ca2b1eaf15a41f4486c9e8527eca0a.jpg", "prix": 20, "stock": 69 },
        { "id": 8, "nom": "Violet", "img": "https://i.pinimg.com/736x/3f/c7/21/3fc7215a989943d3c5ec2bc7b205ccb1.jpg", "prix": 20, "stock": 26 },
        { "id": 9, "nom": "Jasmine", "img": "https://i.pinimg.com/736x/51/44/7f/51447fcb86eff8e63a7742b77ec9d5a8.jpg", "prix": 18, "stock": 22 }

];


export const connexion = (state, action) => {
    return {
        ...state,
        utilisateur: action.payload,
    };
};

export const deconnexion = (state) => {
    return {
        ...state,
        utilisateur: null,
    };
};

export const ajouterUtilisateur = (nouvelUtilisateur) => ({
        type: 'AJOUTER_UTILISATEUR',  
        payload: nouvelUtilisateur,     
});

export const loginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: user,
});


export const loginFailure = (error) => ({
    type: 'LOGIN_FAILURE',
    payload: error,
});


export const handleLogin = (username, password) => (dispatch, getState) => {
    const { utilisateurs } = getState();
    const utilisateur = utilisateurs.find(
        (u) => (u.username === username || u.email === username) && u.password === password
    );

    if (utilisateur) {
        dispatch(loginSuccess(utilisateur));
    } else {
        dispatch(loginFailure('Invalid username or password'));
    }
};


export const ajouterAuPanier = (produit) => ({
    type: 'AJOUTER_AU_PANIER',
    payload: produit,
});


export const modifierQuantite = (id, quantite) => ({
    type: 'MODIFIER_QUANTITE',
    payload: { id, quantite },
});


export const supprimerDuPanier = (id) => ({
    type: 'SUPPRIMER_DU_PANIER',
    payload: { id },
});


export const viderPanier = () => ({
    type: 'VIDER_PANIER',
});



export const diminuerStock = (commandes) => ({
    type: 'DIMINUER_STOCK',
    payload: commandes,
});



export const appliquerFiltre = (filtre) => ({
    type: 'APPLIQUER_FILTRE',
    payload: filtre,
});


export const fetchProduits = () => {
    return (dispatch) => {
        dispatch({
            type: 'SET_PRODUITS',
            payload: produits
        });
    };
};

