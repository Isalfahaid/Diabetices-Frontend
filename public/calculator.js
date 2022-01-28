import React, { Component } from 'react'

export default class calculator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            total: "",
            num1: 0,
            num2: 0
        }


        useEffect(()=>{
            console.log("insid useEffect");
            document.title=`you clicked ${num1} times`;},[num1]);
    
    
        handletClick = (total,event) => {
            Number(num1) 
             Number(num2) 
   if (total === 1) {
           setTotal({ total : num1 +  num2 })
  
          }
          else if (total === 2 ) {
           setTotal({ total : num1 -  num2 })           }
          else if (total === 3) {
           setTotal({ total : num1 *  num2 })           }
          else if (total === 4 ) {
           setTotal({ total : num1 %  num2 })           }
          else  if (total === 5 ){
           setTotal({ total : num1 /  num2 })           }
          //event.prevent.Default();
      }
    render() {
        return (
            
                 <div >
                    <div >
                        <label >  number 1
    
                        </label> <br />
                        <input
                            className="input"
                            type="text"
                            name="input number"
                            //  value ={this.state.num1}
                            onChange={handletClick()}
                        />
                        <br />
                        <label >  number 2
    
                        </label>
                        <br />
                        <input
                            className="input"
                            type="text"
                            name="input number"
                              //   value={this.state.num2}
                            onChange={handletClick()}
                        />
                        <br />
                        <h1> {props.total} </h1>
                        <br />
                    </div>
    
    
                    <button onClick={handletClick(1)}> + </button> <br />
                    <button onClick={handletClick(2)}> - </button>  <br />
                    <button onClick={handletClick(3)}> * </button>  <br />
                    <button onClick={handletClick(4,event)}> % </button>  <br />
                    <button onClick={handletClick(5,event)}> / </button> <br />
    
    
    
    
    
                
            </div>
        )
    }
}

}