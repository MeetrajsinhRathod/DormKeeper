const initState = {
    authError: null,
    // verifyEmail: {
    //     error: null,
    //     loading: false,
    // },
}

const authReducer = (state= initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('login error')
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success')
            return{
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('signup error')
            return {
                ...state,
                authError: action.err.message
            }
        case 'VERIFY_START':
            return {
                ...state,
                authError: null
                //verifyEmail: { ...state.verifyEmail, loading: true}
            }
        case 'VERIFY_SUCCESS':
            return {
                ...state,
                authError: null
                //verifyEmail: { ...state.verifyEmail, loading: false, error: false}
            }
        case 'VERIFY_FAIL':
        return {
                ...state,
                authError: 'Verification failed'
                //verifyEmail: { ...state.verifyEmail, loading: false, error: 'Verification failed' }
            }
        default:
            return state;
    }
}

export default authReducer