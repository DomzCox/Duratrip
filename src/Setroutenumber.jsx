import { useDispatch, useSelector } from "react-redux";
import { setRouteNum, updateRouteNumberStatus, logError } from "./slices/routeSlice";
import { userThunk } from "./slices/userSlice";


export default function Setroutenumber(){
// Set the current route number that we are adding orders too
// handle the form submission
// Update the state of the current route number which will be added to each order on that route when the form is being submitted

const dispatch = useDispatch()

const routenumset = useSelector( (state) => state.tripRoutes.routeNumIsSet )
const routenum = useSelector( (state) => state.tripRoutes.routeNum )
const err = useSelector( (state) => state.tripRoutes.error )



// IF the route number is not yet set then show the form to set the route or ask the  user if the would like to set a route.
// If the route is not empty hide the form
// If the form is an empty string then send an error to the error logs in the state and show on the screen
// When the route number is set remove the error

const setroute = (e) => {

    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);
    
    if (payload.route_num == "") {
         dispatch(logError("Please enter a valid route")) 
        }else{
            dispatch(setRouteNum(payload.route_num))
            dispatch(updateRouteNumberStatus())
            dispatch(logError("")) 
            dispatch(userThunk())
            
        }
    }


    return(
        <>
            
            {
             (routenumset) 
             ?
            ""
             : 
             <form onSubmit={setroute}>
                <input className="input" type="number" name="route_num"/>
                <p>{err}</p>
                <button className="input">Set Route</button> 
            </form>   }
        </>
    )

}