import React, { useRef, useState } from "react";

function InputSample3() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    })

    const nameInput = useRef()

    const { name, nickname } = inputs

    const onChange = (e) => {
        const { name, value } = e.target
        setInputs({
            ...inputs,
            [name]:value
        })
    }

    const onReset = () => {
        setInputs({
            name:'',
            nickname:'',
        })
        nameInput.current.focus()
    }

    return (
        <div>
            <div>
                <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}/>
            </div>
            <div>
                <input name="nickname" placeholder="별명" onChange={onChange} value={nickname} />
            </div>
            <div>
                <button onClick={onReset}>초기화</button>
            </div>
            <div>
                <b>값 : </b>
                {name} ({nickname})
            </div>
        </div>
    )
}

export default InputSample3