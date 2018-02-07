// reducer for images get by api
import { FETCH_IMAGES } from '../actions';

// state is a list of images that returned by feed api
export default function(state = [], action) {
  //console.log(action.type === FETCH_IMAGES);
  switch (action.type) {
    case FETCH_IMAGES:
      // do not keep results from previous search
      // returning new list with new contents every time
      //console.log(action.payload.items);
      return action.payload.items;
  }
  return state;
}
