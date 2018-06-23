const initialState = {

    fetchSuccess: false,
    fetchError: false,
    isLoaded: false
};

const asyncReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case 'SAMPLE::ACTION':

            // Sample action for your application.
            console.log('updating as expected');
            return {

                ...state
            };

        default:
            return state;
    }
};

export default asyncReducer;