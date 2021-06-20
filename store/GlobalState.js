import { useReducer , useEffect} from "react";
import { createContext } from "react";
import reducers from "./Reducers";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const initialState = { notify: {}, auth: {}, cart:[] };
  const [state, dispatch] = useReducer(reducers, initialState);
 
  return (
    <DataContext.Provider value={[state, dispatch]}>
      {children}
    </DataContext.Provider>
  );
};
