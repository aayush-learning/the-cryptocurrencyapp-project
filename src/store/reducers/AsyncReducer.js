const initialState = {

    bitcoinData: null,
    bitcoinHistoryData: [],
    topCryptoCurrencyData: [],
    fetchSuccess: false,
    fetchError: false,
    isLoaded: false
};

const asyncReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case 'APPLICATION_DATA->FETCH::SUCCESS':

            return {

                ...state,
                bitcoinData: action.bitcoinData,
                bitcoinHistoryData: action.lastMonthBitcoinData,
                topCryptoCurrencyData: action.topCryptoCurrencyData,
                fetchSuccess: true,
                isLoaded: true
            };
        case 'APPLICATION_DATA->FETCH::FAILED':

            return {

                ...state,
                fetchError: true
            };
        case 'APPLICATION_DATA->RE-FETCH::INITIALIZE': 
            
            return {

                ...initialState
            };
            
        default:
            return state;
    }
};

export default asyncReducer;