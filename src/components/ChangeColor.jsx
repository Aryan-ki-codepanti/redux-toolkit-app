import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeColor, clearColor } from '../features/Theme';


export const ChangeColor = () => {

    const [color, setColor] = useState("");
    const dispatch = useDispatch();
    return (
        <div>
            <input type="text" value={color} onChange={e => setColor(prev => e.target.value)} placeholder="Enter Color" />
            <button onClick={() => dispatch(changeColor({color}))}>Change Theme</button>
            <button onClick={() => dispatch(clearColor())}>Clear</button>
        </div>
    )
}
