//lower case because we export just a function, not component
import React, { useReducer } from 'react'
//we will make a reusible function, to be used several time in our app, to automate the process
export default (reducer, actions, initialState) => {
    //args: when we create a context we need, reducer function, helper function with dispatch insider,and initial state
    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        const boundActions = {};
        for (let key in actions){
            boundActions[key] = actions[key](dispatch);
        }

        return (<Context.Provider value={{ state, ...boundActions }}>
            {children}
        </Context.Provider>);
    }
    return {Context, Provider};
};