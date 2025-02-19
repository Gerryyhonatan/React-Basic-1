import { useState } from "react";

type IEmployee = {
    id: number;
    name: string;
}

const EmployeesPage = () => {
    const [employees, setEmployees] = useState<IEmployee[]>([]);
    const [employeesIsLoading, setEmployeesIsLoading] = useState(false)

    const fetchEmployees = async () => {
        try {
            setEmployeesIsLoading(true)
            const response = await fetch("http://localhost:2000/employees", {
                method: "GET"
            });
            const responseJson = await response.json() as IEmployee[]
    
            setEmployees(responseJson)
            setEmployeesIsLoading(false)
        } catch (error) {
            alert("Gagal mendapatkan data Employee")
        }
       
    }
    return (
        <div>
            <h1>Employees Page</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee => {
                            return (
                                <tr>
                                    <td>{employee.id}</td>
                                    <td>{employee.name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <button onClick={fetchEmployees}>Fetch Employees</button>
            {employeesIsLoading ? <P>Loading...</P> : null}
        </div>
    )
}

export default EmployeesPage