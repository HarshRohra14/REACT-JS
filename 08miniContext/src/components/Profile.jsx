import React, {useContext} from "react";
import UserContext from "../context/UserContext";

function Profile() {
    const { user } = useContext(UserContext);

    if (!user) return <div>Please log in to see your profile.</div>;

    return (
        <div>
            <h2>Welcome</h2>
            <p>Username: {user.username}</p>
        </div>
    );
}

export default Profile;