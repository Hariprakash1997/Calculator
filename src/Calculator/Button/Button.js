import React from 'react';

const Button = (props) => {
 
        const button = {
            padding: "2% 3%",
            marginLeft: "4%",
        
        }  

        const firstValue = props.valueOne;
        const secondValue = props.valueTwo;

        add = () => {
            console.log(firstValue + secondValue);
        }

        return(
            <div>
                <button style={button} id="add" onClick={() => {props.clicked; add()}}>+</button>
                <button style={button} id="sub">-</button>
                <button style={button} id="mul">*</button>
                <button style={button} id="div">/</button>
                {/* <button style={props.styleButton}>{props.innerText}</button> */}
            </div>
        );
    
}

export default Button;