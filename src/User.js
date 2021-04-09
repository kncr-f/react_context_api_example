import React, {useContext}  from 'react';
import {UserContext} from './context/UserContext';

const User=({user,textColor})=>{
    const context=useContext(UserContext);
    const contextTextColor=useContext(UserContext)
    return(
        <div style={{ background: user.color, color:user.textcolor}}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
            <p> Background-Color:{" "}  <input
                value={user.color}
                onChange={e => context.changeColor(user.id, e.target.value)}
            /></p>
        
            <p>Text-Color:{" "}  <input 
                value={user.textcolor}
                onChange={e => contextTextColor.textColor(user.id, e.target.value)}
            /></p>
            
            
        </div>
    );
}

export default User;