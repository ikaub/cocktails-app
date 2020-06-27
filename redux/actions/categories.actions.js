export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FILTER_CATEGORIES = 'FILTER_CATEGORIES';

export const fetchCategories = () => {
    return async (dispatch) => {
        const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
        const resJson = await res.json();
        dispatch({
            type: FETCH_CATEGORIES,
            payload: resJson.drinks
        });
    }
};

export const filterCategories = (filtered) => ({
    type: FILTER_CATEGORIES,
    payload: filtered
});