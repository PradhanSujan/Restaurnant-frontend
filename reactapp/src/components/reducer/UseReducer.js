// reducer bhitra it takes two parameter one is state and action
 

export const initialState = null; //here is 0,flase or null all are falsy value
export const reducer = (state, action) => {
    if(action.type==="USER"){
        return action.payload;
    }

    // jaba pani reducer call garchhu we 
    //need to return something like we return current state
    return state;

 }