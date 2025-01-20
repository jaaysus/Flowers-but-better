import axios from 'axios';

const apiUrl = "https://api.myjson.online/v1/records/86308f3a-0c3a-44e2-b6fe-67a505522fb3";


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


export const fetchProduits = () => async (dispatch) => {
    try {
        const response = await axios.get(`${apiUrl}`);
        dispatch({
            type: 'SET_PRODUITS',
            payload: response.data, 
        });
    } catch (error) {
        console.error("Failed to fetch products:", error);
    }
};
