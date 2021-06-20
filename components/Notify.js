import { useContext } from "react";
import { DataContext } from "../store/GlobalState";
import Loading from "./Loading";

<<<<<<< HEAD
const Notify = () => {
  const [state, dispatch] = useContext(DataContext);
  const { notify } = state;
  return (
    <>
      {notify.loading && <Loading />}
      {/* {notify.err}
      {notify.success} */}
    </>
  )
};
=======
const Notify=()=>{
    const[state,dispatch]=useContext(DataContext)
    const {notify}=state
    return (
        <>
        {notify.loading && <Loading/>}
        </>
    )
}
>>>>>>> oanh

export default Notify;
