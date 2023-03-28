export function userReducer(state, action) {

    switch (action.type) {
        case 'ADD_USER':
            return {
                users: [...state.users, action.payload]
            };

        case 'DELETE_USER':

            console.log(action.payload)
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            };

        case 'UPDATE_USER':
            const updateUser = action.payload;
            console.log(state)

            const updateUsers = state.users.map((user) => {
                if (user.id === action.payload.id) {
                    user.id = updateUser.id;
                    user.first = updateUser.first;
                    user.last = updateUser.last;
                    user.email = updateUser.email;
                    user.location = updateUser.location;
                    user.hobby = updateUser.hobby;
                    return updateUser;
                };
                console.log(user)
                console.log(updateUser)
                console.log(state)
                
                return user;
            })

            return {
                
                users: [...state.users, updateUsers]
            };

        default:
            break;
    }

    return {

    }
};