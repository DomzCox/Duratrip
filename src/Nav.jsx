import React from 'react'

export default function Nav() {
  return (
    <div className="container">
        <h1 className="font-semibold text-gray-500">DuraTrip</h1>

        <div className=" flex justify-end gap-3">
            <button className="bg-slate-500">Home</button>
            <button className="bg-slate-600">Set Trip</button>
        </div>
    </div>
  )
}
