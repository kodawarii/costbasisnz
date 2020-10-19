import { 
    UPDATE_PORTFOLIO_NAME_TO_SHOW,
    SWITCH_BROKER_DATA_CONTEXT,
    FETCH_TOPUPSTYLE
} from '../reduxtypes';

export const updatePortfolioNameToShow = (portfolioNameToShow) => dispatch => { // No Need to Fetch this // Default = {} (see reducer)
    dispatch({
        type: UPDATE_PORTFOLIO_NAME_TO_SHOW,
        payload: portfolioNameToShow
    });
}

export const switchBrokerDataContext = (listOfBrokers, id) => dispatch => {
    let brokerData = {};
    for(let i = 0; i < listOfBrokers.length; i++){
        if(listOfBrokers[i].id === id) brokerData = listOfBrokers[i];
    }

    dispatch({
        type: SWITCH_BROKER_DATA_CONTEXT,
        payload: brokerData
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