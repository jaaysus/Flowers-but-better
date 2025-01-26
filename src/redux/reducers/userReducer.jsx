const initialState = {
    utilisateurs: [
        { 
            id: 1, 
            username: "kuro",
            fullName: 'Kuro No Kenshi',
            email: 'kuro@gmail.com', 
            password: '12345', 
            isAdmin: true
          },

          { 
            id: 2, 
            username: "kibo",
            fullName: 'Kibo No Uta',
            email: 'kibo@gmail.com', 
            password: '12345', 
            isAdmin: false
          },
          
          { 
            id: 3, 
            username: "shiro",
            fullName: 'Shiro No Neko',
            email: 'shiro@gmail.com',
            password: '12345', 
            isAdmin: false
          }

    ],
    dernierId: 3,
    currentUser: null,
    loginError: null,

};

const userReducer = (state = initialState, action) => {
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
            return { ...state, currentUser: action.payload, loginError: null };        case 'LOGIN_FAILURE':
        default:
            return state;
    }
};

export default userReducer;
