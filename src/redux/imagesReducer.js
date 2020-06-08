import * as actionTypes from './actionTypes'
var _ = require('lodash');

const DEFAULT_STATE = { 
  isLoading: false, 
  errMess: null, 
  images: [],
  selectedImages: []
}

export const imagesReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_IMAGES:
      return { 
        ...state, 
        isLoading: false, 
        errMess: null, 
        images: action.payload 
      }

    case actionTypes.IMAGES_LOADING:
      return { 
        ...state, 
        isLoading: true, 
        errMess: null, 
        images: [] 
      }

    case actionTypes.IMAGES_FAILED:
      return { 
        ...state, 
        isLoading: false, 
        errMess: action.payload 
      }
    
    case actionTypes.SELECT_IMAGE:
      return { ...state, selectedImages: [...state.selectedImages, action.image] }
  
    case actionTypes.UNSELECT_IMAGE:
      return {
        ...state,
        selectedImages: [...state.selectedImages.filter(img => { return !_.isEqual(img, action.image) })]
      }

    default:
      return state
  }
}