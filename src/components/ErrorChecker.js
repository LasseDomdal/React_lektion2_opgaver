import React, {useState} from "react";

function ErrorChecker() {
    const [Input, setInput] = useState("");
    const [Error, setErrors] = useState([]);

    const validateInput = (value) => {
        if (value.length > 7) {
            return ["Value too long"]
        }
        return []
    }

    const handleOnChange = (event) => {
        const {name, value} = event.target
        if (name === "Input") {
            setInput(value)
            setErrors(validateInput(value))
        }
    }
        return (
            <div>
                {/*<form onSubmit={handleSubmit}>*/}
                <h1> Error Checker</h1>
                <input name="Input" value={Input.value} onChange={handleOnChange}/>
                <div className="form-element-error">{Error.map((error, index) => <p key={index}>{error}</p>)}</div>
                {/*</form>*/}
            </div>
        );

}
export default ErrorChecker