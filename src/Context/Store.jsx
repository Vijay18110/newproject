import { createContext, useState } from 'react'
export const context = createContext({
    counter: 0,
    OnIncreament: () => { },
    OnIncreament: () => { },
})
const ContextProvider = ({ children }) => {
    const [counter, setCounter] = useState(0);

    const OnIncreament = () => {
        setCounter(counter + 1);
    }
    const OnDecreament = () => {
        setCounter(counter - 1);
    }
    const value = {
        counter: counter,
        OnIncreament: OnIncreament,
        OnDecreament: OnDecreament,
    }
    return <context.Provider value={value}> {children}</context.Provider>
}
export default ContextProvider;