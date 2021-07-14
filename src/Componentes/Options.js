import React, { useState } from "react";
import Conversor from "./Conversor";

export default function Options({ currencyoptions}) {

    const [valueA, setValueA] = useState('');
    const [valueB, setValueB] = useState('');
    //evento que recebe valor do primeiro select
    const eventoA = (event) => {setValueA(event.target.value)}
    //evento que recebe valor do segundo select
    const eventoB = (event) => {setValueB(event.target.value)}    
    let vetor =[];
    currencyoptions.map((item)=>{vetor.push(item.id)}) 

    const listOptions =(vetor.sort()).map((item,index)=>(<option key={index}>{item}</option>)) 

    return (
        <div>
            <select onChange={eventoA}>
                {listOptions}
            </select>
            <select onChange={eventoB}>
                {listOptions}
            </select>
            <Conversor moedaA={valueA} moedaB={valueB} />
        </div>
    )
}