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
      .then((data) =>
        data.results.map((item) => {
          return {
            id: item.id,
            title: item.title,
            seller: item.seller.id,
            price: item.price,
            originalPrice: item.originalPrice,
            thumbnail: item.thumbnail,
            shipping: item.shipping.free_shipping,
          };
        })
      )
      .then((json) => dispatch(receiveProducts(keyword, json)));
  };
}
