
import { useReducer , useEffect} from "react";
import { createContext } from "react";
import reducers from "./Reducers";


export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const initialState = { notify: {}, auth: {}, cart:[] };
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



    return (
        <DataContext.Provider value={[state,dispatch]}>
            {children}
            {console.log(children)}
            
        </DataContext.Provider>
    )
}

