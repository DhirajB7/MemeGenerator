import React, { Component } from 'react'

export default class  extends Component {

    constructor() {
        super()
    
        this.state = {
             topText:"Top Text",
             bottomText:"Bottom Text",
             imageUrl:"http://i.imgflip.com/1bij.jpg",
             imageUrlArray:[]
        }
        this.btnClick = this.btnClick.bind(this)
        this.change = this.change.bind(this)
    }
    
    componentDidMount(){
        var memArray = []

       fetch("https://api.imgflip.com/get_memes").then(a=>a.json())
       .then(a=>a.data.memes.forEach(a=>memArray.push(a.url)))


     this.setState({
         imageUrlArray:memArray
     })

    }

    btnClick(){
        var index = Math.round(Math.random()*100)
        this.setState({
            imageUrl:this.state.imageUrlArray[index]
        })
    }

    change(event){
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div>
                <form className="meme-form">
                    <input type = "text" name="topText" placeholder="top text goes here" onChange = {this.change}></input>
                    <input type = "text" name="bottomText" placeholder="bottom text goes here" onChange = {this.change}></input>
                </form>
                <button onClick={this.btnClick}>Generate</button>
                <br/>
                <br/>
               <div className="meme">
                    <img src={this.state.imageUrl} alt=""/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}
