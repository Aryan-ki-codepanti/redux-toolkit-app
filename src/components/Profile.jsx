import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const user = useSelector(state => state.user.value);
    const color = useSelector(state => state.theme.value);
    return (
        <div style={{ color: color === "" ? "black" : color }}>
            <h1>Profile page</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
        </div>
    )
}

export default Profile
