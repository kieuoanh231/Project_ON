import { useContext } from "react";
import { DataContext } from "../store/GlobalState";
import Loading from "./Loading";

const Notify=()=>{
    const{state,dispatch}=useContext(DataContext)
    const {notify}=state
    return (
        <>
        {notify.loading && <Loading/>}
        {notify.error && 
              <div className="my-alert alert alert-danger alert-dismissible fade show" role="alert">
              {notify.error}
              <button  type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span onClick={() => dispatch({ type: 'NOTIFY', payload: {} })} aria-hidden="true">&times;</span>
              </button>
            </div>
            }
        </>
    )
}

export default Notify;
