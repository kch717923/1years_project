import React, { useEffect, useState } from 'react';

const InputSample = () => {

    const [text,setText] = useState('뭐');

    const onChange = (e) => {
        setText(e.target.innerText)
    }

    const onReset = () => {
        setText('');
    }
    useEffect(() => {
        console.log(text)
    })
    return (
        <div>
            <input onChange={onChange} value={text}/>
            <div onInput={onChange} contentEditable={true} value={text}></div>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : {text}</b>
            </div>
        </div>
    );
};

export default InputSample;