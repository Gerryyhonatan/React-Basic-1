import { useForm } from "react-hook-form"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

// type RegisterFormSchema = {
//     username : string;
//     password : string;
// }

const registerFormShcema = z.object({
    username: z.string().min(3, {message: "Minimal 3 karakter cuy"}).max(10),
    password: z.string().min(8),
    repeatPassword: z.string(),
    age : z.coerce.number().min(17)
}).superRefine((args, ctx) => {
    if (args.password !== args.repeatPassword) {
        ctx.addIssue({
            code: "custom",
            path : ["repeatPassword"],
            message: "Password tidak sama",
        })
    }
});

type RegisterFormSchema = z.infer<typeof registerFormShcema>

const RHFPage = () => {
    const [showPassword, setShowPassword] = useState(false)


    const form = useForm<RegisterFormSchema>({
        resolver: zodResolver(registerFormShcema)
    })

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
                <span style={{color: "red"}}>{form.formState.errors.username?.message}</span>

                <label>
                    Password : 
                    <input type={showPassword ? "text" : "password"} {...form.register("password")}/>
                </label>
                <span style={{color: "red"}}>{form.formState.errors.password?.message}</span>

                <label>
                    Repeat Password : 
                    <input type={showPassword ? "text" : "password"} {...form.register("repeatPassword")}/>
                </label>
                <span style={{color: "red"}}>{form.formState.errors.repeatPassword?.message}</span>

                <label>
                    <input type="checkbox" onChange={(event) => setShowPassword(event.target.checked)} /> Show Password
                </label>
                
                <label>
                    Age : 
                    <input type="number" {...form.register("age")}/>
                </label>
                <span style={{color: "red"}}>{form.formState.errors.age?.message}</span>

                <button type="submit" style={{width: "fit-content"}}>Register User</button>
            </form>
        </div>
    )
}

export default RHFPage