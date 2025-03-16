import React from 'react'
import { useDispatch } from 'react-redux'
import { changeOrderStatus } from './slices/SingleOrderSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck} from '@fortawesome/free-solid-svg-icons'

function Changeorderstatus() {

    const dispatch = useDispatch()

    const handleUpdateOrderStatus = () => {
        dispatch(changeOrderStatus("Completed"))
    }

  return (
    <button className="bg-green-900 text-gray-200 text-xs absolute right-1" onClick={handleUpdateOrderStatus}>Mark Completed <FontAwesomeIcon icon={faSquareCheck}/></button>
  )
}

export default Changeorderstatus