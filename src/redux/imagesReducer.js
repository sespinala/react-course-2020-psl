import * as actionTypes from './actionTypes'
const DEFAULT_STATE = { 
  isLoading: false, 
  errMess: null, 
  images: []
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

    default:
      return state
  }
}