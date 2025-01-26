

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
    const { users } = getState(); // Final Boss bug of reducers splitting
    const utilisateur = users.utilisateurs.find(
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


export const viderPanier = () => (dispatch, getState) => {
    const state = getState(); // Get the current state
    const currentUser = state.currentUser; // Access the current user safely

    if (!currentUser) {
        console.error('No user is logged in.');
        return; // Exit early if no user
    }

    dispatch({
        type: 'VIDER_PANIER',
        payload: { userId: currentUser.id }, // Pass the current user's ID
    });
};



export const diminuerStock = (commandes) => ({
type: 'DIMINUER_STOCK',
payload: commandes,
});



export const appliquerFiltre = (filtre) => ({
type: 'APPLIQUER_FILTRE',
payload: filtre,
});



export const setCards = (cards) => ({
    type: 'SET_CARDS',
    payload: cards,
  });
  
export const updateCard = (index, data) => ({
    type: 'UPDATE_CARD',
    payload: { index, data },
  });
  export const genereTrackingNumber = (userId) => ({
    type: 'GENERE_TRACKING_NUMBER',
    payload: userId,
});



export const selectDate = (date) => ({
    type: "SELECT_DATE",
    payload: date ? date.toISOString() : null,
  });
  
  export const changeMonth = (offset) => ({
    type: 'CHANGE_MONTH',
    payload: offset,
  });



  