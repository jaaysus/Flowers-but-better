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

export const logout = () => ({
    type: 'LOGOUT',
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


export const viderPanier = (userId) => {
    return {
        type: 'VIDER_PANIER',
        payload: userId, // Pass the userId
    };
};
export const deleteOrder = (trackingNumber) => ({
    type: 'ACCEPT_COMMANDE',
    payload: trackingNumber,
});




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
export const saveCalendarData = (currentUserId, eventDate, eventDetails) => ({
    type: 'SAVE_CALENDAR_DATA',
    payload: { currentUserId, eventDate, eventDetails }
});

export const dismissRequest = (userId, eventDate) => ({
    type: 'DISMISS_REQUEST',
    payload: { userId, eventDate },
  });

  export const updateStockQuantity = (productId, newStock) => ({
    type: 'MODIFIER_QUANTITE',
    payload: { productId, newStock },
});


export const updateUserInfo = (user) => ({
    type: 'UPDATE_USER_INFO',
    payload: user,
});
export const addReview = (review) => ({
    type: 'ADD_REVIEW',
    payload: review,
  });
  
  export const removeReview = (reviewId) => ({
    type: 'REMOVE_REVIEW',
    payload: reviewId,
  });


  export const deleteProductAction = (productId) => ({
    type: 'DELETE_PRODUCT',
    payload: productId,
});


export const addProductAction = (newProduct) => ({
    type: 'ADD_PRODUCT',
    payload: newProduct,
});