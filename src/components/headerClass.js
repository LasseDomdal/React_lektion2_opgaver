import React from "react";


class HeaderClass extends React.Component{
    props;
    render() {
        var isLoggedIn = this.props.isLog;
        return (
            <div>
            <h1>{this.props.overskrift}</h1>
            <button>{isLoggedIn ? "logout":"signup"}</button>
            <button>{isLoggedIn ? "signup": null}</button>
            </div>
        )

    }
}
export default HeaderClass;