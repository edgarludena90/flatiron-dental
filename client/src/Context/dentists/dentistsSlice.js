// redux action + reducers

// Action Creators
export function fetchDentists() {
    return function(dispatch){
      fetch("/dentists")
      .then(r=>r.json())
      .then(dentists=>
        dispatch({
          type: "dentists/dentistsLoaded",
          payload: dentists
        }))
      .catch(e=>console.log(e))
    }
  }
  
  // Reducers
  const initialState = {
    entities: [], //array of doctors
    status: "idle"
  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case "dentists/dentistsLoaded":
        return {
          ...state,
          entities: action.payload,
        };
      case "doctors/dentistsLoading":
        return{
          ...state,
          status: "Loading"
        }
      
      default:
        return state;
    }
  }
  