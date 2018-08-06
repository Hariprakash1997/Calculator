import React from 'react';
import styles from './InputField.css';
import { parse } from 'querystring';
import { isNumber } from 'util';

class InputField extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            firstValue:"",
            secondValue:"",
            outputValue:"",
            symbol:"",
        }
    }

    handleFirst = (event) => {
        const First = parseInt(event.target.value);
        this.setState({
            firstValue:First
        })
    }

    handleSecond = (event) => {
        const Second = parseInt(event.target.value);
        this.setState({
            secondValue:Second
        })
    }

    checkNumber = () => {
       
        const checkNum = /[0-9]/;
        const validateFirstValue = checkNum.test(this.state.firstValue);
        const validateSecondValue = checkNum.test(this.state.secondValue);

        // const lengthOne = this.state.firstValue.toString().length;
        // const lengthTwo = this.state.secondValue.toString().length;

        // for( let i = 0 ; i < lengthOne ; i++ ){
        //     if(this.state.firstValue.toString().charAt(i) != /[0-9]/){
        //         this.setState({
        //             firstValue:"",
        //             secondValue:"",
        //             outputValue:"",
        //         });
               
        //         return false;
        //     }
        // }

        // for( let i = 0 ; i < lengthTwo ; i++ ){
        //     if(this.state.secondValue.toString().charAt(i) != /[0-9]/){
        //         this.setState({
        //             firstValue:"",
        //             secondValue:"",
        //             outputValue:"",
        //         });
                
        //         return false;
        //     }
        // }
       
        if(validateFirstValue == "" || validateSecondValue == ""){
            alert("Only numbers are allowed");
            return false;
        }
    }

    add = () => {
        console.log('this.state.firstValue', this.state.firstValue);      
        console.log('isNan', isNaN(this.state.firstValue));

        const checkNum = /[0-9]/;
        const validateFirstValue = checkNum.test(this.state.firstValue);
        const validateSecondValue = checkNum.test(this.state.secondValue);

        if(validateFirstValue == "" || validateSecondValue == ""){
            alert("Only numbers are allowed");
            return false;
        } else{

            let addNumbers = this.state.firstValue + this.state.secondValue;

            this.setState({
                symbol:"+",
                outputValue:addNumbers
            })
        }
             
    }

    sub = () => {

        this.checkNumber();

        let subNumbers = this.state.firstValue - this.state.secondValue;
        
        this.setState({
            symbol:"-",
            outputValue:subNumbers
        })
        
    }

    mul = () => {

        this.checkNumber();
    
        let mulNumbers = this.state.firstValue * this.state.secondValue;
        
        this.setState({
            symbol:"*",
            outputValue:mulNumbers
        })
        
    }

    div = () => {

        this.checkNumber();
       
        let divNumbers = this.state.firstValue / this.state.secondValue;
        
        this.setState({
            symbol:"/",
            outputValue:divNumbers
        })
        
    }
 
    render(){

        const inputField = {
            marginTop: "10%",
            marginLeft: "30%"
        }
    
        const inputs = {
            margin: "5%",
            padding: "2%",
            width: "10%",
            border: "1px solid black"
        }

        const button = {
            padding: "2% 3%",
            marginLeft: "4%",
        }  

        const text = {
            display: "block",
            marginLeft: "38%",
            color: "red"
        }

        const divStyle = {
            marginTop: "3%"
        }
        
    return (
        <div style={inputField}>
            <input type="text" name="inputOne" style={inputs} onChange={this.handleFirst} />
            <span>{this.state.symbol}</span>
            <input type="text" name="inputTwo" style={inputs} onChange={this.handleSecond}/>
            <span>=</span>
            <input type="text" name="output" value={this.state.outputValue} style={inputs} />
            <span style={text}>Press + or - or * or / button <br />to perform calculation</span>
            {/* <Button clicked={this.getValues} valueOne={this.state.firstValue} valueTwo={this.state.secondValue} /> */}
            <div style={divStyle}>
            <button style={button} id="add" onClick={this.add}>+</button>
            <button style={button} id="sub" onClick={this.sub}>-</button>
            <button style={button} id="mul" onClick={this.mul}>*</button>
            <button style={button} id="div" onClick={this.div}>/</button>
            </div>
        </div>
    );
    }

}

export default InputField;