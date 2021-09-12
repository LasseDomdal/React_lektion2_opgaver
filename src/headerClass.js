import React from "react";


class HeaderClass extends React.Component{
    props;
    render() {
        return (
            <h1>{this.props.overskrift}</h1>
        )

    }
}
export default HeaderClass;