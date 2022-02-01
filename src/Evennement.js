import React, { Component } from 'react'
import './style.css' 

class Evennement extends Component {

    constructor(){
        super()
        this.state = {
            x: 0,
           
            class:''
        }
        
        this.plus_un = this.plus_un.bind(this);
        this.moins_deux = this.moins_deux.bind(this);
        this.rouge = this.rouge.bind(this);
        this.vert = this.vert.bind(this);

    }

    plus_un(){
        this.setState(
            plus => {
                return{
                    x: plus.x + 1 ,
                    class:''                 
                }
            } 
        );
       
    }
    moins_deux(){
        this.setState(
            plus => {
                return{
                    x: plus.x - 2  ,
                    class:''                  
                }
            } 
        );
     }

     vert(){
        this.setState(
            () => {
                return{
                   
                    class:'vert'                   
                }
            } 
        );
     }

     rouge(){
        this.setState( () => {
                return{
                    
                    class:'rouge'                 
                }
            } 
        );
     }



    

    render() {
        return (
            <div>
               <div className="q3">
                    <h1 className={this.state.class}>  
                        
                            {this.state.x}
                        
                    </h1>

                    <button id="plus" onClick={this.plus_un}>
                        + 1 
                    </button>

                    <button id="moins"  onClick={this.moins_deux}>
                        - 2
                    </button>

                    <button id="rouge" onClick={this.rouge}>
                        Rouge
                    </button>

                    <button id="vert" onClick={this.vert}>
                        Vert
                    </button>
                </div> 

            </div>
        );
    }
}


export default Evennement;