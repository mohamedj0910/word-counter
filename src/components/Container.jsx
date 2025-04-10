import { useState } from "react";

function Container() {

    const [words,setWords] = useState(0)
    const [Characters,setCharacters] = useState(0)

    function updateValues(e){
        const value = e.target.value;
        setCharacters(value.length)
        setWords(value.trim().split(/\s+/).filter(Boolean).length)
    }

    return (
        <div className="container">
            <h1>Word and Character Counter</h1>
            <textarea placeholder="Start typing..." onChange={(e)=>{updateValues(e)}}></textarea>
            <div className="counter">
                <p>Words: <span id="word-count">{words}</span></p>
                <p>Characters: <span id="char-count">{Characters}</span></p>
            </div>
        </div>
    )
}

export default Container