<<<<<<< HEAD
import { useReducer , useEffect} from "react";
import { createContext } from "react";
import reducers from "./Reducers";

<<<<<<< HEAD
export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const initialState = { notify: {}, auth: {}, cart:[] };
  const [state, dispatch] = useReducer(reducers, initialState);
 
=======
import { createContext, useReducer, useEffect } from "react";
import reducers from "./Reducers";
import { getData } from "../utils/fetchData";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const initialState = { notify: {}, auth: {} };
  const [state, dispatch] = useReducer(reducers, initialState);

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      getData("auth/accessToken").then((res) => {
        if (res.err) {
          return localStorage.removeItem("firstLogin");
        }
        dispatch({
          type: "AUTH",
          payload: {
            toke: res.accessToken,
            user: res.user,
          },
        });
      });
    }
  }, []);
>>>>>>> oanh
  return (
    <DataContext.Provider value={[state, dispatch]}>
      {children}
    </DataContext.Provider>
  );
};
<<<<<<< HEAD
=======
export const DataContext=createContext()
export const DataProvider=({children})=>{
    const initialState={notify:{},auth:{}}
    const [state,dispatch]=useReducer(reducers,initialState)
    return (
        <DataContext.Provider value={[state,dispatch]}>
            {children}
            {console.log(children)}
            
        </DataContext.Provider>
    )
}
>>>>>>> oanh
=======
>>>>>>> oanh
