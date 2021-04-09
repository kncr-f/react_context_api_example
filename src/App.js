import React, { useState } from 'react';
import "./styles.css";
import UserList from "./UserList";
import {UserContext} from "./context/UserContext";

const data=[
    {id:1, name:'Fatih', email:'fatih@gmail.com', age:35, color:"lightcyan", textcolor:"gold"},
    {id:2, name:'Zeliha', email:'zeliha@gmail.com', age:30, color:"honeydew",textcolor:"coral"},
    {id:3, name:'Selim', email:'selim@gmail.com', age:4, color:"deepskyblue",textcolor:"honeydew"},
    {id:4, name:'Ela', email:'ela@gmail.com', age:2, color:"mistyrose",textcolor:"coral"}
];
 
const App=()=>{
    const [users, setUsers]=useState(data);
    const changeColor=(id, color)=>{
        setUsers(
            users.map(user=>(user.id===id?{...user,color:color}:user))
        );

    }
    const textColor=(id, color)=>{
        setUsers(
            users.map(user=>(user.id===id?{...user,textcolor:color}:user))
        );
    }
    return(
      <UserContext.Provider value={{users,changeColor,textColor}}>
        <div className='App'>
          <header>
              <h1>Welcome!</h1>

          </header>
          <UserList />

        </div>
      </UserContext.Provider>
      
    );
};

export default App;