import React from 'react'
import { setUser } from './slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'
//  Grab the user login information
//  Check to see if the user entered the correct information
//  Set the current user in state in the user reducer

export default function Login() {
    const dispatch = useDispatch()
    const user = useSelector( (state)=> state.user )

    const handleLogin = (e) => {
        e.preventDefault()
        const loginData = new FormData(e.target)
        const login = Object.fromEntries(loginData)
        dispatch(setUser(login))
        console.log(user.isLoggedIn)
    }

  return (
    <div className="container">
        <form action="" className="flex flex-col gap-2 text-sm" onSubmit={ handleLogin }>
            <label htmlFor="">User</label>
            <input className="input" name="username" type="text" autoComplete=''/>
            <label htmlFor="">Password</label>
            <input className="input" name="password" type="password" autoComplete='current-password' />
            <button className="bg-teal-700 p-1 rounded-lg mt-2 font-bold text-md mb-4 text-gray-200">Login</button>
        </form>

    </div>
  )
}
 
