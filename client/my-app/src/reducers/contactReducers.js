
import {UPDATE_INPUT,FETCH_POSTS,SUBMIT_POSTS,DELETE_POSTS} from '../actions/types';
const initialState={
  text:'',
  mywishes:[{_id:1,wish:"loading"}]
}


const contactReducers=(state=initialState,action)=>{
  switch(action.type)
  {
    case UPDATE_INPUT:
      return{
        ...state,
        text:action.payload
      }

      case FETCH_POSTS:
        return {
          ...state,
          mywishes:action.payload
        }


        case SUBMIT_POSTS:
          return {
            ...state,
            mywishes:[...state.mywishes,action.payload]
          }


          case DELETE_POSTS:
            const newWishes = state.mywishes.filter(item=>{
              return item._id !== action.payload._id
            })
            return {
              ...state,
              mywishes:newWishes
            }

      default:return state
  }

}

export default contactReducers