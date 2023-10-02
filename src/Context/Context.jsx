import { createContext, useReducer } from "react";

export const cartContext = createContext();

export const Context = (props) =>{
    const reducer = (state, action) => {
         switch (action.type) {
            case 'add':
                const checkState = state.filter((item)=> {return action.payload.id === item.id});
                if(checkState.length > 0){
                    return state
                } else{
                    return [...state, action.payload]
                }
                // INCREASE FUNCTIONALITY
                case 'INCREASE':
                    const temState = state.map((item)=>{
                        if(item.id === action.payload.id){

                            return {...item, quantity: item.quantity+1}
                        } else {
                           return item
                        }
                    });
                    return temState

                // DECREASE FUNCTIONALITY

                    case 'DECREASE':
                        const tempState2 = state.map((item) => {
                          if (item.id === action.payload.id) {
                            // Check if quantity is greater than 0 before decrementing
                            if (item.quantity > 0) {
                              return { ...item, quantity: item.quantity - 1 };
                            } else {
                              return item; // Quantity is already 0, so no change
                            }
                          } else {
                            return item;
                          }
                        });
                        return tempState2;

                        // REMOVE FUNCTIONALITY

                        case 'REMOVE':
                            const tempState3 = state.filter((item)=>{
                             return   item.id !== action.payload.id                                
                            }
                           )
                           return tempState3
                         
            default:
                return state;
         }
    }

    const [state, dispatch] = useReducer(reducer, []);
    const info = {state, dispatch};
    return (
        <cartContext.Provider value={info}>{props.children}</cartContext.Provider>
    );
}