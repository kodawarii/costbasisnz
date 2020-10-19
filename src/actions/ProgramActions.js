import { 
    UPDATE_PORTFOLIO_NAME_TO_SHOW,
    FETCH_BROKER_ID,
    FETCH_BASE_CURRENCY,
    FETCH_TARGET_CURRENCY,
    FETCH_LAST_KEY,
    FETCH_TOPUPSTYLE
} from '../reduxtypes';

export const updatePortfolioNameToShow = (portfolioNameToShow) => dispatch => { // No Need to Fetch this // Default = {} (see reducer)
    dispatch({
        type: UPDATE_PORTFOLIO_NAME_TO_SHOW,
        payload: portfolioNameToShow
    });
}

export const fetchBrokerId = () => dispatch => {
    dispatch({
        type: FETCH_BROKER_ID,
        payload: ''
    });
}

export const fetchBaseCurrency = () => dispatch => {
    dispatch({
        type: FETCH_BASE_CURRENCY,
        payload: ''
    });
}

export const fetchTargetCurrency = () => dispatch => {
    dispatch({
        type: FETCH_TARGET_CURRENCY,
        payload: ''
    });
}

export const fetchLastKey = () => dispatch => {
    dispatch({
        type: FETCH_LAST_KEY,
        payload: ''
    });
}

export const fetchTopupStyle = (brokers, currentBroker) => dispatch => { // TODO Test action, heavily exposed to bugs
    let topupStyle = '';
    for(let i = 0; i < brokers.length; i++){
        if(brokers[i].name === currentBroker){ // TODO Create Broker Name <> ID Converter 
            topupStyle = brokers[i].topupStyle;
        }
    }

    dispatch({
        type: FETCH_TOPUPSTYLE,
        payload: topupStyle
    });
}