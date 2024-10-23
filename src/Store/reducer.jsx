import { useReducer } from "react";
const reducer = (state, action) => {
    switch (action.type) {
        case "ACCOUNTHOVER": return { ...state, accountHover: !state.accountHover };
    }
}
const [state, dispatch] = useReducer(reducer, { accountHover: false });
export const onHover = () => {
    dispatch({ type: "ACCOUNTHOVER" });
}
