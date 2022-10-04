import "../styles/CardsHolder.css"
import React, { createRef, useState, useEffect } from "react";

function CardsHolder() {
    const [inputRefs] = useState<HTMLInputElement[] | any>(() => Array.from({length: 4}, () => createRef()))
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    useEffect(() => {
        inputRefs?.[currentIndex]?.current.focus()
    })

    const handleChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentIndex((prevIndex) => {
            return calculateIndexes(prevIndex, target.value ? 1 : -1)
        })
    }

    const calculateIndexes = (prevIndex: number, sign: number) => {
        if (prevIndex === 0 && sign === -1) return prevIndex
        return (prevIndex === (inputRefs.length - 1) && sign === 1) ? prevIndex : prevIndex + (sign * 1)
    }

    const handleFocus = () => {
        inputRefs?.[currentIndex]?.current.focus()
    }

    return (
        <div className="cards-holder">
            {inputRefs.map((ref: any, index: number) => { 
                return <input type="text" key={index} onChange={handleChange} onFocus={handleFocus} ref={ref} maxLength={1}/>
            })}
        </div>
    )
};




export default CardsHolder;