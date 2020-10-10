import { 
    FETCH_PORTFOLIO_NAME_TO_SHOW, 
    UPDATE_PORTFOLIO_NAME_TO_SHOW 
} from '../reduxtypes';

export const fetchPortfolioNameToShow = () => dispatch => {
    dispatch({
        type: FETCH_PORTFOLIO_NAME_TO_SHOW,
        payload: "redux-default"
    });
}

export const updatePortfolioNameToShow = (portfolioNameToShow) => dispatch => {
    dispatch({
        type: UPDATE_PORTFOLIO_NAME_TO_SHOW,
        payload: portfolioNameToShow
    });
}