import React from "react";


function Header(props) {

    var isLoggedIn = props.isLog;
    return (
        <div>
            <h1>{props.overskrift}</h1>
            <button>{isLoggedIn ? "logout":"signup"}</button>
            <button>{isLoggedIn ? "signup": null}</button>
        </div>

    )

}
export default Header
