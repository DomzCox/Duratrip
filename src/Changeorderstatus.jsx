import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeOrderStatus } from './slices/SingleOrderSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck} from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import { CheckCircle} from "lucide-react";
function Changeorderstatus() {

    const dispatch = useDispatch()
    const route = useSelector( (state) => state.singleOrder.orderStatus )

    const handleUpdateOrderStatus = () => {
        dispatch(changeOrderStatus("Completed"))
        toast("Order status changed!");
    }
   
  return (
    <div className="mt-4 flex gap-3">
                {/* Show Complete button only if not completed */}
                {route.status !== "Completed" && (
                  <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition">
                    <CheckCircle size={16} /> Mark as Complete
                  </button>
                )}
                {/* <Addnote /> */}
              </div>
  )
}

export default Changeorderstatus