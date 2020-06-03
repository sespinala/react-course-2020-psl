import { baseUrl } from "../config/baseUrl";

export const fetchProducts = () => {
  return fetch(baseUrl + 'images')
    .then(response => response.json())
    .catch(error => {
      return {
        error: true,
        message: error.message
      };
    });
};