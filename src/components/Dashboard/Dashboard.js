import React from "react";

const Dashboard = ({user}) => {
    return(
        <div>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{Date(user.joined).toLocaleString()}</p>
            <p>{user.logins}</p>
        </div>
    )
}

export default Dashboard;