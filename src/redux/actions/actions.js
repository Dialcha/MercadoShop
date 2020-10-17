import { REQUEST_PRODUCTS, RECEIVE_PRODUCTS } from "./actionTypes";

export function requestProducts(keyword) {
    return {
        type: REQUEST_PRODUCTS,
        keyword,
    };
}

export function receiveProducts(keyword, json) {
    return {
        type: RECEIVE_PRODUCTS,
        keyword,
        productos: json,
        receivedAt: Date.now(),
    };
}

export function fetchProducts(keyword) {
    return function (dispatch) {
        dispatch(requestProducts(keyword));
        return fetch(`https://api.mercadolibre.com/sites/MCO/search?q=${keyword}`)
            .then((response) => response.json())
            .then(json => dispatch(receiveProducts(keyword, json)))
    }
}