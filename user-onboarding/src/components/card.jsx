import React from "react";
import defaultAvatar from "./newUser.png";

const Card = props => {
    const { user } = props;

    JSON.stringify(user);

    return (
        <div key={user.id} className="card">
            <img
                src={!user.avatar ? defaultAvatar : user.avatar}
                alt="profile picture"
                className="pfp"
            />
            <h2>{user.first_name} {user.last_name}</h2>
            <h2>{user.email}</h2>
            <div className="shelf">
                <div className="status"></div>
                <p>Active</p>
                <button className="message">Message</button>
            </div>
        </div>
    )
}

export default Card;