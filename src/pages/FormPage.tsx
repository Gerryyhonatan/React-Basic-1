import { useRef, useState } from "react"

const FormPage = () => {
    // Uncontrolled component/input
    const inputRef = useRef<HTMLInputElement>(null)
    const inputEmailRef = useRef<HTMLInputElement>(null)

    // Controlled component/input
    const [fullNameInput, setFullNameInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")


    const [usernameErrorMessage, setUsernameErrorMessage] = useState("")
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("")

    const handleSubmit = () => {
        // const fullNameFormValue = inputRef.current?.value
        // const fullEmailFormValue = inputEmailRef.current?.value
        // alert("Form Submitted : " + fullNameFormValue + fullEmailFormValue)

        const fullNameValidation = fullNameInput.length < 3
        const passwordValidation = passwordInput.length < 8

        if (fullNameValidation) {
            setUsernameErrorMessage("Username must be at least 3 characters")
        }

        if (passwordValidation) {
            setPasswordErrorMessage("Password must be at least 8 characters")
        }
    }

    return (
        <div>
            <h1>Form Page</h1>

            <div style={{display : "flex", gap : "8px", flexDirection : "column", textAlign : "left"}}>
                <label htmlFor="full-name">Full Name</label>
                <input onChange={(e) => setFullNameInput(e.target.value)} id="full-name" type="text" value={fullNameInput}/>
                <span style={{ color: "red"}}>{usernameErrorMessage}</span>
                
                <label htmlFor="password">Password</label>
                <input onChange={(e) => setPasswordInput(e.target.value)} id="password" type="password" value={passwordInput}/>
                <span style={{ color: "red"}}>{passwordErrorMessage}</span>
                <button onClick={handleSubmit}>Submit</button>

            </div>

        </div>
    )
}

export default FormPage