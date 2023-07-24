import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SingleUserComp from "./SingleUserComp";

const UserList = ()=> {

    const [users, setUsers]= useState([])

    const fecthUsers = async()=>{
        const response = await axios.get("https://randomuser.me/api/?results=10")
        
        setUsers(response.data.results)
    }

    useEffect(()=>{
        fecthUsers()
    },[])

    return(
        <div className="user-list">
            <ul>
                {users.map((user, idx)=>{
                    return(
                    <li>
                        <SingleUserComp user={user} key={idx}/> 
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default UserList;