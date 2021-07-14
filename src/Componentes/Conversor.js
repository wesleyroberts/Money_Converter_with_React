
import React, { useState } from "react";
import './Converso.css'

export default function Conversor(props) {
    const [insertValue, setInsertValue] = useState(0);
    const [resultValue, setresultValue] = useState(0);

    async function converter() {
        let de_para = `${props.moedaA}_${props.moedaB}`;
        const reponse = await fetch(`https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=a981e09f9fa864f3d62f`)
        const data = await reponse.json();
        let cotacao = data[de_para];
        let result = (parseFloat(insertValue) * cotacao).toFixed(2)
        setresultValue(result)       
    }
        const evento = (event) => {setInsertValue(event.target.value)}
    return (
        <div>        
            <input className="rounded-input" type="text" placeholder="insert the value" onChange={evento}>
            </input>
            <input  type="button" onClick={() => converter()} value="to convert"></input>
            <h4> The Result in {props.moedaB} is: {resultValue} $</h4>
        </div>
    )
}
