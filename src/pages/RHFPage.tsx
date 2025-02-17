import { useForm } from "react-hook-form"

type RegisterFormSchema = {
    username : string;
    password : string;
}


const RHFPage = () => {
    const form = useForm<RegisterFormSchema>()

const handleRegisterUser = (values: RegisterFormSchema) => {
    alert("Form submitted")
    console.log(values)
}

    return (
        <div>
            <h1>React Hook Form</h1>

            <form onSubmit={form.handleSubmit(handleRegisterUser)} style={{display : "flex", flexDirection:"column", gap : "10px"}}>
                <label>
                    Username : 
                    <input type="text" {...form.register("username")} />
                </label>

                <label>
                    Password : 
                    <input type="password" {...form.register("password")}/>
                </label>

                <button type="submit" style={{width: "fit-content"}}>Register User</button>
            </form>
        </div>
    )
}

export default RHFPage