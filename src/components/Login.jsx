import React from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../features/User';

const Login = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(login({ name:"aryan" , email: "pedo@gmail.com" , age:3 }))}>Login</button>
        </div>
    )
}

export default Login
