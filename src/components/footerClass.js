import React from "react";



class FooterClass extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState(prevState => ({  isLoggedIn: !prevState.isLoggedIn}));
    }


    render() {
        return (
            <div>
                <h1>{this.props.footerskrift}</h1>
                <button onClick={this.handleClick}>{this.state.isLoggedIn ? "logout": null}</button>
                <button onClick={this.handleClick}>{!this.state.isLoggedIn ? "signup": null}</button>
            </div>
        )
    }
}
export default FooterClass;