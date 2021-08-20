import React from "react";
import Coin from "./Coin";

const image = ["./grass.jpg","./sea.jpg"]
class Toss extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            imageUrl:"./grass.jpg",
            result:{
                head:0,
                tail:0
            }
        }

    }

    handleClick = () =>{
        let isHead;
        let rand = Math.random() * 10;
        if(rand > 5){
            isHead = 1
        }else{
            isHead = 0
        }

        this.setState({
            imageUrl:image[isHead],
            result:{
                head:this.state.result.head + isHead * 1,
                tail:this.state.result.tail + (!isHead) * 1
            }
        })
    }


    render(){
        return(
            <React.Fragment>
                <h1>Coin Toss</h1>
                <br/>
                <p>head:{this.state.result.head},tail:{this.state.result.tail}</p>
                <br/>
                <Coin imageUrl={this.state.imageUrl}/>
                <br/>
                <button
                onClick={this.handleClick}
                >
                    toss
                </button>
            </React.Fragment>
        )
    }
}

export  default Toss