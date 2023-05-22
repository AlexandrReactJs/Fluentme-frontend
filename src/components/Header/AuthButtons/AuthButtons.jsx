import React from "react";
import { Link } from "react-router-dom";

const AuthButtons = () => {

    return (
        <div>
            <Link to='/login'>LOGIN</Link>
            <Link to='/register'>Register</Link>
        </div>
    )
}


export default AuthButtons;