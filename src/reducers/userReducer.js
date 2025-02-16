const initState = {
    schedule: null,
}

const userReducer = (state = initState, action) => {

    switch (action.type) {
        case 'SCHEDULE_CLEANING':
            console.log("scheduled cleaning", action.newSc);
            return state;
        case 'SCHEDULE_CLEANING_ERROR':
            console.log("schedule cleaning error ", action.err);
            return state;
        case 'SCHEDULE_LAUNDRY':
            console.log("scheduled laundry", action.newSl);
            return state;
        case 'SCHEDULE_LAUNDRY_ERROR':
            console.log("schedule laundry error ", action.err);
            return state;
        case 'UPDATE_PROFILE':
            console.log("profile updated", action.newP);
            return state;
        case 'UPDATE_PROFILE_ERROR':
            console.log("profile update error", action.err);
            return state;
        default:
            return state;
    }
}

export default userReducer