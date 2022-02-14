import React from "react";

class GreetingsClass extends React.Component {
    render() {
        return <h1>Merhaba {this.props.name}</h1>;
    }
}

export default GreetingsClass;