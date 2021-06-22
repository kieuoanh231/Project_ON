
import { useReducer , useEffect} from "react";
import { createContext } from "react";
import reducers from "./Reducers";
import { getData } from "../utils/fetchData";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const initialState = { notify: {}, auth: {}, cart:[], modal: {} };
  const [state, dispatch] = useReducer(reducers, initialState);
  const {cart} = state
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
            token: res.accessToken,
            user: res.user,
          },
        });
      });
    }
},[])

useEffect(() => {
  const on__cart = JSON.parse(localStorage.getItem('on__cart'))

  if(on__cart) dispatch({ type: 'ADD_CART', payload: on__cart })
}, [])

useEffect(() => {
  localStorage.setItem('on__cart', JSON.stringify(cart))
}, [cart])

    return (
        <DataContext.Provider value={{state,dispatch}}>
            {children}
        </DataContext.Provider>
    )
}

