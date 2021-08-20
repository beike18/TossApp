import React from "react";

class Coin extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return <img width = "20%" alt="faild" src={this.props.imageUrl}/>
    }
}

export default Coin