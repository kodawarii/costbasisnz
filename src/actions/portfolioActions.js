import { 
    FETCH_PORTFOLIO, 
    UPDATE_PORTFOLIO 
} from '../reduxtypes';

export const fetchPortfolio = () => dispatch => {
    dispatch({
        type: FETCH_PORTFOLIO,
        payload: "redux-default"
    });
}

export const updatePortfolio = (portfolio) => dispatch => {
    dispatch({
        type: UPDATE_PORTFOLIO,
        payload: portfolio
    });
}