import { 
    UPDATE_PORTFOLIO_NAME_TO_SHOW,
    FETCH_TOPUPSTYLE
} from '../reduxtypes';

export const updatePortfolioNameToShow = (portfolioNameToShow) => dispatch => { // No Need to Fetch this
    dispatch({
        type: UPDATE_PORTFOLIO_NAME_TO_SHOW,
        payload: portfolioNameToShow
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