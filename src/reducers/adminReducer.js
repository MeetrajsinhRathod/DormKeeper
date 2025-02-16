const initState = {
    announcements: null,
}

const adminReducer = (state = initState, action) => {

    switch (action.type) {
        case 'ADD_ANNOUNCEMENT':
            console.log("added announcement ", action.newAnn);
            return state;
        case 'ADD_ANNOUNCEMENT_ERROR':
            console.log("add announcement error ", action.err);
            return state;
        case 'ADD_MENU':
            console.log("added menu ", action.newMenu);
            return state;
        case 'ADD_MENU_ERROR':
            console.log("add menu error ", action.err);
            return state;
        case 'ADD_BILL':
            console.log("added bill ", action.newBill);
            return state;
        case 'ADD_BILL_ERROR':
            console.log("add bill error ", action.err);
            return state;
        default:
            return state;
    }
}

export default adminReducer