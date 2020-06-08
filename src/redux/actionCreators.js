import * as actionTypes from './actionTypes'
import { baseUrl } from '../config/baseUrl'

export const fetchImages = (dispatch) => {
  dispatch(imagesLoading());

  return fetch(baseUrl + 'images')
    .then(response => response.json())
    .then(images => dispatch(addImages(images)))
    /* .then(images => {
      setTimeout(() => {
        dispatch(addImages(images))
      }, 2000)
    }) */
    .catch(error => dispatch(imagesFailed(error.message)));
}

export const imagesLoading = () => ({
  type: actionTypes.IMAGES_LOADING
})

export const imagesFailed = (errmess) => ({
  type: actionTypes.IMAGES_FAILED,
  payload: errmess
})

export const addImages = (images) => ({
  type: actionTypes.ADD_IMAGES,
  payload: images
})

export const selectImage = image => ({
  type: actionTypes.SELECT_IMAGE,
  image
})

export const unSelectImage = image => ({
  type: actionTypes.UNSELECT_IMAGE,
  image
})