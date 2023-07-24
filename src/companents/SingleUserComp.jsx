import React from "react";

const SingleUserComp = ( {user} )=>{
    return (
        <div className="single-user">
            <div className="single">
                <img src={user.picture.large}/>
                <div className="user-info">
                    <h3>Name:{user.name.title} {user.name.first}    {user.name.last}</h3>
                    <p>Country:{user.location.country}</p>
                    <p>Email:{user.email}</p>
                    <p>NickName:{user.login.username}</p>
                    <p>Age:{user.dob.age}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleUserComp;