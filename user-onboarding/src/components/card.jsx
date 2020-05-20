import React from "react";

const Card = props => {
    const { user } = props;

    JSON.stringify(user);

    return (
        <div key={user.id} className="card">
            <img src={user.avatar} alt="profile picture" />
            <h2>{user.first_name} {user.last_name}</h2>
            <h2>{user.email}</h2>
        </div>
    )
}

export default Card;