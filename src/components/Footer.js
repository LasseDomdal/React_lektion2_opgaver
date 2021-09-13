import React, {useState} from "react";


function Footer(props) {
    const[isLoggedIn, setisloggedin] = useState( false);

        return (
            <div>
                <h1>{props.footerskrift}</h1>
                <button onClick={() => setisloggedin(false)}>{isLoggedIn ? "logout": null}</button>
                <button onClick={() => setisloggedin(true)}>{!isLoggedIn ? "signup": null}</button>
            </div>
        );


}
export default Footer