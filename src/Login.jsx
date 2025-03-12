import React from 'react'
import { setUser } from './UserSlice'
import { useDispatch, useSelector } from 'react-redux'
//  Grab the user login information
//  Check to see if the user entered the correct information
//  Set the current user in state in the user reducer

function Login() {
    const dispatch = useDispatch()
    const user = useSelector( (state)=> state.user )

    const handleLogin = (e) => {
        e.preventDefault()
        const loginData = new FormData(e.target)
        const login = Object.fromEntries(loginData)
        dispatch(setUser(login))
        console.log(user)
    }

  return (
    <div className="container">
        <form action="" className="flex flex-col gap-2 text-sm" onSubmit={ handleLogin }>
            <label htmlFor="">User</label>
            <input className="input md:w-24" name="username" type="text" autoComplete=''/>
            <label htmlFor="">Password</label>
            <input className="input w-24" name="password" type="password" autoComplete='current-password' />
            <button>Login</button>
        </form>

    </div>
  )
}
 
export default Login